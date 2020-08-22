const mongoose = require("mongoose");
const Vendas_RCap = require('../../models/modelsCap/Vendas_Regioes_Cap');
const Vendas_Cap = require('../../models/modelsCap/Vendas_Cap');

module.exports = {
  async index(req, res) {
    const vRCap = await Vendas_RCap.find();

    return res.json(vRCap);
  },

  async show(req, res) {
    const vRCap = await Vendas_RCap.findById(req.params.id);

    return res.json(vRCap);
  },


  async store(req, res) {
    const vRCap = await Vendas_RCap.create(req.body);
    return res.json(vRCap);
  },

  async update(req, res) {
    const vRCap = await Vendas_RCap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vRCap);
  },

  async destroy(req, res) {
    await Vendas_RCap.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async agruparRegioes(req, res){
    const vRCap = await Vendas_RCap.find();
    const vCap = await Vendas_Cap.find();
    let anos = vRCap.map((item,index) => {
      return item.ano;
    });
    let regioes = vRCap.map((item,index) =>{
      return item.region;
    });
    
    regioes = regioes.filter((item, index) => regioes.indexOf(item) === index);
   
    const vRCapAnos = [];
    regioes.map((valor,index)=>{
      for(var i = Math.min(...anos); i <= Math.max(...anos); i++){
        let numeroVendas = [0,0,0];
        let tipoImovel = [0,0,0];
        let quant = 0;
        vRCap.map((item,index)=>{
          if(item.ano === i && item.region === valor){
            vCap.map((itemCap,index)=>{
              if((itemCap.ano === item.ano) && (itemCap.mes === item.mes)){
              if(item.region === 'a'){
                numeroVendas[0] += itemCap.imoveisVend.vendasA.total;
                numeroVendas[1] += itemCap.imoveisVend.vendasA.casa;
                numeroVendas[2] += itemCap.imoveisVend.vendasA.apart;
              } 
              if(item.region === 'b'){
                numeroVendas[0] += itemCap.imoveisVend.vendasB.total;
                numeroVendas[1] += itemCap.imoveisVend.vendasB.casa;
                numeroVendas[2] += itemCap.imoveisVend.vendasB.apart;
              } 
              if(item.region === 'c'){
                numeroVendas[0] += itemCap.imoveisVend.vendasC.total;
                numeroVendas[1] += itemCap.imoveisVend.vendasC.casa;
                numeroVendas[2] += itemCap.imoveisVend.vendasC.apart;
              } 
              if(item.region === 'd'){
                numeroVendas[0] += itemCap.imoveisVend.vendasD.total;
                numeroVendas[1] += itemCap.imoveisVend.vendasD.casa;
                numeroVendas[2] += itemCap.imoveisVend.vendasD.apart;
              } 
              if(item.region === 'e'){
                numeroVendas[0] += itemCap.imoveisVend.vendasE.total;
                numeroVendas[1] += itemCap.imoveisVend.vendasE.casa;
                numeroVendas[2] += itemCap.imoveisVend.vendasE.apart;
              } 
            }
            });
            tipoImovel[0] += item.vendaTipoImovel.luxo;
            tipoImovel[1] += item.vendaTipoImovel.medio;
            tipoImovel[2] += item.vendaTipoImovel.standard;
            quant += 1;
          }
        });
        
        let totTipo = tipoImovel.reduce((total,valorAtual) => total + valorAtual, 0);;
        tipoImovel = tipoImovel.map((item,index)=>{return item*100/totTipo});
        numeroVendas = numeroVendas.map((item,index)=> item/quant);
        vRCapAnos.push({
          ano: i,
          region: valor,
          numeroVendas: numeroVendas,
          vendaTipoImovel: tipoImovel,
        });
      }
    });
    const grupoRegioes = {
      regiaoA: [],
      regiaoB: [],
      regiaoC: [],
      regiaoD: [],
      regiaoE: [],
    }
    vRCapAnos.map((value, index) => {
      
      if(value.region === 'a'){
        grupoRegioes.regiaoA.push(value);
      }
      if(value.region === 'b'){
        grupoRegioes.regiaoB.push(value);
      }
      if(value.region === 'c'){
        grupoRegioes.regiaoC.push(value);
      }
      if(value.region === 'd'){
        grupoRegioes.regiaoD.push(value);
      }
      if(value.region === 'e'){
        grupoRegioes.regiaoE.push(value);
      }

      
    });
    
    return res.json(grupoRegioes);
  }
};