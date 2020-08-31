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

   
    const aRCapAnos = [];
      for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
        let numeroAlugueis = [0,0,0];
        let numeroQuartos = [0,0,0,0,0,0];
        let numGar = [0,0,0,0,0];
        let valorMedio = 0;
        let valorMedioM2 = 0;
        let quant = 0;
        aRCap.map((item,index)=>{
          if(item.ano === i && item.region === req.params.region){
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

            numGar[0] = item.aluguelGar.al0Gar;
            numGar[1] = item.aluguelGar.al1Gar;
            numGar[2] = item.aluguelGar.al2Gar;
            numGar[3] = item.aluguelGar.al3Gar;
            numGar[4] = item.aluguelGar.al3_Gar;
            
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

            let casaM2 = (item.valorMedM2.casas.kit +
              item.valorMedM2.casas.dorm1 +
              item.valorMedM2.casas.dorm2 +
              item.valorMedM2.casas.dorm3 +
              item.valorMedM2.casas.dorm4);
            
            let apartM2 = (item.valorMedM2.apart.kit +
              item.valorMedM2.apart.dorm1 +
              item.valorMedM2.apart.dorm2 +
              item.valorMedM2.apart.dorm3 +
              item.valorMedM2.apart.dorm4);

            valorMedioM2 += (casaM2 + apartM2); 

            quant += 1;
          }
        });
        
        let totTipo = numeroQuartos.reduce((total,valorAtual) => total + valorAtual, 0);;
        numeroQuartos = numeroQuartos.map((item,index)=>{return item*100/totTipo});

        let totGar = numGar.reduce((total,valorAtual) => total + valorAtual, 0);;
        numGar = numGar.map((item,index)=>{return item*100/totGar});


        numeroAlugueis = numeroAlugueis.map((item,index)=> item/quant);
        aRCapAnos.push({
          ano: i,
          region: req.params.region,
          valorMedio: valorMedio/quant,
          valorMedioM2: valorMedioM2/quant,
          numeroAluguel: numeroAlugueis,
          aluguelDorm: numeroQuartos,
          aluguelGar: numGar,
        });
      }
    
    return res.json(aRCapAnos);
  }
};