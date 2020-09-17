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
   
    const vRCapAnos = [];
    
      for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
        let numeroVendas = [0,0,0];
        let tipoImovel = [0,0,0];
        let valorMedio = 0;
        let valorMedioM2 = 0;
        let numDorm = [0,0,0,0,0,0];
        let numGar = [0,0,0,0,0];
        let quant = 0;
        vRCap.map((item,index)=>{
          if(item.ano === i && item.region === req.params.region){
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

            numDorm[0] += item.vendasDorm.vendKit;
            numDorm[1] += item.vendasDorm.vend1Dorm;
            numDorm[2] += item.vendasDorm.vend2Dorm;
            numDorm[3] += item.vendasDorm.vend3Dorm;
            numDorm[4] += item.vendasDorm.vend4Dorm;
            numDorm[5] += item.vendasDorm.vend4_Dorm;

            numGar[0] += item.vendasGar.vend0Gar;
            numGar[1] += item.vendasGar.vend1Gar;
            numGar[2] += item.vendasGar.vend2Gar;
            numGar[3] += item.vendasGar.vend3Gar;
            numGar[4] += item.vendasGar.vend3_Gar;

            
            let casa = (item.valorMed.casas.kit +
              item.valorMed.casas.dorm1 +
              item.valorMed.casas.dorm2 +
              item.valorMed.casas.dorm3 +
              item.valorMed.casas.dorm4);
            
            let apart = (item.valorMed.apart.kit +
              item.valorMed.apart.dorm1 +
              item.valorMed.apart.dorm2 +
              item.valorMed.apart.dorm3 +
              item.valorMed.apart.dorm4);

            valorMedio += (casa + apart); 

            let casaM2 = (item.valorMedM2.casas.luxo.anos_7 +
              item.valorMedM2.casas.luxo.anos_8 +
              item.valorMedM2.casas.luxo.anos_15 +
              item.valorMedM2.casas.medio.anos_7 +
              item.valorMedM2.casas.medio.anos_8 +
              item.valorMedM2.casas.medio.anos_15 +
              item.valorMedM2.casas.simples.anos_7 +
              item.valorMedM2.casas.simples.anos_8 +
              item.valorMedM2.casas.simples.anos_15);

            let apartM2 = (item.valorMedM2.apart.luxo.anos_7 +
              item.valorMedM2.apart.luxo.anos_8 +
              item.valorMedM2.apart.luxo.anos_15 +
              item.valorMedM2.apart.medio.anos_7 +
              item.valorMedM2.apart.medio.anos_8 +
              item.valorMedM2.apart.medio.anos_15 +
              item.valorMedM2.apart.simples.anos_7 +
              item.valorMedM2.apart.simples.anos_8 +
              item.valorMedM2.apart.simples.anos_15);

            valorMedioM2 += casaM2 + apartM2; 
            quant += 1;
          }
        });
        
        let totTipo = tipoImovel.reduce((total,valorAtual) => total + valorAtual, 0);;
        tipoImovel = tipoImovel.map((item,index)=>{return item*100/totTipo});

        let totDorm = numDorm.reduce((total,valorAtual) => total + valorAtual, 0);;
        numDorm = numDorm.map((item,index)=>{return item*100/totDorm});

        let totGar = numGar.reduce((total,valorAtual) => total + valorAtual, 0);;
        numGar = numGar.map((item,index)=>{return item*100/totGar});

        numeroVendas = numeroVendas.map((item,index)=> item/quant);
        vRCapAnos.push({
          ano: i,
          region: req.params.region,
          valorMedio: [valorMedio/quant],
          valorMedioM2: [valorMedioM2/quant],
          numeroVendas: numeroVendas,
          vendaTipoImovel: tipoImovel,
          numDorm: numDorm,
          numGar: numGar,
        });
      }
    
    return res.json(vRCapAnos);
  }
};