const mongoose = require("mongoose");
const Aluguel_Cap = require('../../models/modelsCap/Aluguel_Cap');
const { indexAno } = require("./VendasCapController");

module.exports = {
  async index(req, res) {
    const aCap = await Aluguel_Cap.find();

    return res.json(aCap);
  },

  async show(req, res) {
    const aCap = await Aluguel_Cap.findById(req.params.id);

    return res.json(aCap);
  },


  async store(req, res) {
    const aCap = await Aluguel_Cap.create(req.body);
    return res.json(aCap);
  },

  async update(req, res) {
    const aCap = await Aluguel_Cap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(aCap);
  },

  async destroy(req, res) {
    await Aluguel_Cap.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async indexAno(req, res) {
    const aCap = await Aluguel_Cap.find();

    let anos = aCap.map((item,index) => {
      return item.ano;
    });

    const aCapAnos = [];
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let numeroAlugueis = [0,0,0];
      let precoAlugueis = [0,0,0,0,0,0,0,0,0,0,0];
      let precoAlugueisM2 = [0,0,0,0,0,0,0];
      let numeroQuartos = [0,0,0,0,0,0];
      let numGar = [0,0,0,0,0];
      let quant = 0;
      aCap.map((item,index)=>{
        if(item.ano === i){
          numeroAlugueis[0] += item.imoveisAl.imoveisAlTotal.total;
          numeroAlugueis[1] += item.imoveisAl.imoveisAlTotal.casa;
          numeroAlugueis[2] += item.imoveisAl.imoveisAlTotal.apart;

          precoAlugueis[0] += item.valorAluguel.aluguel_200;
          precoAlugueis[1] += item.valorAluguel.aluguel_400;
          precoAlugueis[2] += item.valorAluguel.aluguel_600;
          precoAlugueis[3] += item.valorAluguel.aluguel_800;
          precoAlugueis[4] += item.valorAluguel.aluguel_1000;
          precoAlugueis[5] += item.valorAluguel.aluguel_1200;
          precoAlugueis[6] += item.valorAluguel.aluguel_1400;
          precoAlugueis[7] += item.valorAluguel.aluguel_1600;
          precoAlugueis[8] += item.valorAluguel.aluguel_1800;
          precoAlugueis[9] += item.valorAluguel.aluguel_2000;
          precoAlugueis[10] += item.valorAluguel.aluguel_2001;

          precoAlugueisM2[0] += item.valorAluguelM2.M2_10;
          precoAlugueisM2[1] += item.valorAluguelM2.M2_15;
          precoAlugueisM2[2] += item.valorAluguelM2.M2_20;
          precoAlugueisM2[3] += item.valorAluguelM2.M2_25;
          precoAlugueisM2[4] += item.valorAluguelM2.M2_30;
          precoAlugueisM2[5] += item.valorAluguelM2.M2_35;
          precoAlugueisM2[6] += item.valorAluguelM2.M2_36;

          numeroQuartos[0] += item.aluguelDorm.alKit;
          numeroQuartos[1] += item.aluguelDorm.al1Dorm;
          numeroQuartos[2] += item.aluguelDorm.al2Dorm;
          numeroQuartos[3] += item.aluguelDorm.al3Dorm;
          numeroQuartos[4] += item.aluguelDorm.al4Dorm;
          numeroQuartos[5] += item.aluguelDorm.al4_Dorm;

          numGar[0] += item.aluguelGar.al0Gar;
          numGar[1] += item.aluguelGar.al1Gar;
          numGar[2] += item.aluguelGar.al2Gar;
          numGar[3] += item.aluguelGar.al3Gar;
          numGar[4] += item.aluguelGar.al3_Gar;

          quant += 1;
        }
        
      });

      let totTipo = numeroQuartos.reduce((total,valorAtual) => total + valorAtual, 0);;
      numeroQuartos = numeroQuartos.map((item,index)=>{return item*100/totTipo});

      let totGar = numGar.reduce((total,valorAtual) => total + valorAtual, 0);;
      numGar = numGar.map((item,index)=>{return item*100/totGar});

      let totValorVendas = precoAlugueis.reduce((total,valorAtual) => total + valorAtual, 0);
      precoAlugueis = precoAlugueis.map((item,index)=>{return item*100/totValorVendas});

      let totValorVendasM2 = precoAlugueisM2.reduce((total,valorAtual) => total + valorAtual, 0);
      precoAlugueisM2 = precoAlugueisM2.map((item,index)=>{return item*100/totValorVendasM2});

      numeroAlugueis = numeroAlugueis.map((item,index)=> item/quant);

      aCapAnos.push({
        ano: i,
        numeroAluguel: numeroAlugueis,
        valorAluguel: precoAlugueis,
        valorAluguelM2: precoAlugueisM2,
        aluguelDorm: numeroQuartos,
        aluguelGar: numGar,
      });
    }

    let firsts = [aCapAnos[0].numeroAluguel[0],aCapAnos[0].numeroAluguel[1],aCapAnos[0].numeroAluguel[2]];
    aCapAnos.forEach(
      (item,index) =>{ 
        aCapAnos[index].numeroAluguel = item.numeroAluguel.map((item,index) =>  item*100/firsts[index] - 100)
      });

    return res.json(aCapAnos);
  },
  
}