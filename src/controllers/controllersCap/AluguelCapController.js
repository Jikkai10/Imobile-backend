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
      let numeroQuartos = [0,0,0,0,0,0];
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

          numeroQuartos[0] += item.aluguelDorm.alKit;
          numeroQuartos[1] += item.aluguelDorm.al1Dorm;
          numeroQuartos[2] += item.aluguelDorm.al2Dorm;
          numeroQuartos[3] += item.aluguelDorm.al3Dorm;
          numeroQuartos[4] += item.aluguelDorm.al4Dorm;
          numeroQuartos[5] += item.aluguelDorm.al4_Dorm;

          quant += 1;
        }
        
      });

      let totTipo = numeroQuartos.reduce((total,valorAtual) => total + valorAtual, 0);;
      numeroQuartos = numeroQuartos.map((item,index)=>{return item*100/totTipo});

      let totValorVendas = precoAlugueis.reduce((total,valorAtual) => total + valorAtual, 0);
      precoAlugueis = precoAlugueis.map((item,index)=>{return item*100/totValorVendas});

      numeroAlugueis = numeroAlugueis.map((item,index)=> item/quant);

      aCapAnos.push({
        ano: i,
        numeroAluguel: numeroAlugueis,
        valorAluguel: precoAlugueis,
        aluguelDorm: numeroQuartos,
      });
    }
    return res.json(aCapAnos);
  },
  
}