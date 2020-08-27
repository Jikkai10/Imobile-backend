const mongoose = require("mongoose");
const Aluguel_RCap = require('../../models/modelsCap/Aluguel_Regioes_Cap');
const Aluguel_Cap = require('../../models/modelsCap/Aluguel_Cap');

module.exports = {
  async index(req, res) {
    const aRCap = await Aluguel_RCap.find();

    return res.json(aRCap);
  },

  async show(req, res) {
    const aRCap = await Aluguel_RCap.findById(req.params.id);

    return res.json(aRCap);
  },


  async store(req, res) {
    const aRCap = await Aluguel_RCap.create(req.body);
    return res.json(aRCap);
  },

  async update(req, res) {
    const aRCap = await Aluguel_RCap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(aRCap);
  },

  async destroy(req, res) {
    await Aluguel_RCap.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async agruparRegioes(req, res){
    const aRCap = await Aluguel_RCap.find();
    const aCap = await Aluguel_Cap.find();
    let anos = aRCap.map((item,index) => {
      return item.ano;
    });
    let regioes = aRCap.map((item,index) =>{
      return item.region;
    });
    
    regioes = regioes.filter((item, index) => regioes.indexOf(item) === index);
   
    const aRCapAnos = [];
    regioes.map((valor,index)=>{
      for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
        let numeroAlugueis = [0,0,0];
        let numeroQuartos = [0,0,0,0,0,0];
        let valorMedio = 0;
        let quant = 0;
        aRCap.map((item,index)=>{
          if(item.ano === i && item.region === valor){
            aCap.map((itemCap,index)=>{
              if((itemCap.ano === item.ano) && (itemCap.mes === item.mes)){
              if(item.region === 'a'){
                numeroAlugueis[0] += itemCap.imoveisAl.aluguelA.total;
                numeroAlugueis[1] += itemCap.imoveisAl.aluguelA.casa;
                numeroAlugueis[2] += itemCap.imoveisAl.aluguelA.apart;
              } 
              if(item.region === 'b'){
                numeroAlugueis[0] += itemCap.imoveisAl.aluguelB.total;
                numeroAlugueis[1] += itemCap.imoveisAl.aluguelB.casa;
                numeroAlugueis[2] += itemCap.imoveisAl.aluguelB.apart;
              } 
              if(item.region === 'c'){
                numeroAlugueis[0] += itemCap.imoveisAl.aluguelC.total;
                numeroAlugueis[1] += itemCap.imoveisAl.aluguelC.casa;
                numeroAlugueis[2] += itemCap.imoveisAl.aluguelC.apart;
              } 
              if(item.region === 'd'){
                numeroAlugueis[0] += itemCap.imoveisAl.aluguelD.total;
                numeroAlugueis[1] += itemCap.imoveisAl.aluguelD.casa;
                numeroAlugueis[2] += itemCap.imoveisAl.aluguelD.apart;
              } 
              if(item.region === 'e'){
                numeroAlugueis[0] += itemCap.imoveisAl.aluguelE.total;
                numeroAlugueis[1] += itemCap.imoveisAl.aluguelE.casa;
                numeroAlugueis[2] += itemCap.imoveisAl.aluguelE.apart;
              } 
            }
            });
            numeroQuartos[0] += item.aluguelDorm.alKit;
            numeroQuartos[1] += item.aluguelDorm.al1Dorm;
            numeroQuartos[2] += item.aluguelDorm.al2Dorm;
            numeroQuartos[3] += item.aluguelDorm.al3Dorm;
            numeroQuartos[4] += item.aluguelDorm.al4Dorm;
            numeroQuartos[5] += item.aluguelDorm.al4_Dorm;
            
            //let somaDorm = item.vendasDorm.vendKit + item.vendasDorm.vend1Dorm + item.vendasDorm.vend2Dorm + item.vendasDorm.vend3Dorm + item.vendasDorm.vend4Dorm;
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
            quant += 1;
          }
        });
        
        let totTipo = numeroQuartos.reduce((total,valorAtual) => total + valorAtual, 0);;
        numeroQuartos = numeroQuartos.map((item,index)=>{return item*100/totTipo});
        numeroAlugueis = numeroAlugueis.map((item,index)=> item/quant);
        aRCapAnos.push({
          ano: i,
          region: valor,
          valorMedio: valorMedio/quant,
          numeroAluguel: numeroAlugueis,
          aluguelDorm: numeroQuartos,
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
    aRCapAnos.map((value, index) => {
      
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