const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const Aluguel = require('../../models//modelsRegion/alugueis');

module.exports = {
  async index(req, res) {
    const alugueis = await Aluguel.find();

    return res.json(alugueis);
  },

  async show(req, res) {
    const alugueis = await Aluguel.findById(req.params.id);

    return res.json(alugueis);
  },


  async store(req, res) {
    const alugueis = await Aluguel.create(req.body);
    return res.json(alugueis);
  },

  async update(req, res) {
    const alugueis = await Aluguel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(alugueis);
  },

  async destroy(req, res) {
    await Aluguel.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async indexAno(req,res){
    const aRegion = await Aluguel.find();
    
    const aRegionAnos = [];
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let numeroAluguel = [0,0,0];
      let valorAluguel = [0,0,0,0,0,0,0,0,0,0,0];
      let valorAluguelM2 = [0,0,0,0,0,0,0];
      let numDorm = [0,0,0,0,0,0];
      let numGar = [0,0,0,0,0];
      let quant = 0;
      aRegion.map((item,index)=>{
        if(item.ano === i && item.regiao === req.params.region){
          valorAluguel[0] += item.valorAluguel.vendas_200;
          valorAluguel[1] += item.valorAluguel.vendas_400;
          valorAluguel[2] += item.valorAluguel.vendas_600;
          valorAluguel[3] += item.valorAluguel.vendas_800;
          valorAluguel[4] += item.valorAluguel.vendas_1000;
          valorAluguel[5] += item.valorAluguel.vendas_1200;
          valorAluguel[6] += item.valorAluguel.vendas_1400;
          valorAluguel[7] += item.valorAluguel.vendas_1600;
          valorAluguel[8] += item.valorAluguel.vendas_1800;
          valorAluguel[9] += item.valorAluguel.vendas_2000;
          valorAluguel[10] += item.valorAluguel.vendas_2001;

          valorAluguelM2[0] += item.valorAluguelM2.M2_10;
          valorAluguelM2[1] += item.valorAluguelM2.M2_15;
          valorAluguelM2[2] += item.valorAluguelM2.M2_20;
          valorAluguelM2[3] += item.valorAluguelM2.M2_25;
          valorAluguelM2[4] += item.valorAluguelM2.M2_30;
          valorAluguelM2[5] += item.valorAluguelM2.M2_35;
          valorAluguelM2[6] += item.valorAluguelM2.M2_36;
          if(req.params.tipo === 'total'){
            numeroAluguel[0] += item.imoveisAl.imoveisAlTotal.total;
            numeroAluguel[1] += item.imoveisAl.imoveisAlTotal.casa;
            numeroAluguel[2] += item.imoveisAl.imoveisAlTotal.apart;

            numDorm[0] += (item.aluguelDorm.nobre.alKit + item.aluguelDorm.centro.alKit + item.aluguelDorm.outrasRegioes.alKit);
            numDorm[1] += (item.aluguelDorm.nobre.al1Dorm + item.aluguelDorm.centro.al1Dorm + item.aluguelDorm.outrasRegioes.al1Dorm);
            numDorm[2] += (item.aluguelDorm.nobre.al2Dorm + item.aluguelDorm.centro.al2Dorm + item.aluguelDorm.outrasRegioes.al2Dorm);
            numDorm[3] += (item.aluguelDorm.nobre.al3Dorm + item.aluguelDorm.centro.al3Dorm + item.aluguelDorm.outrasRegioes.al3Dorm);
            numDorm[4] += (item.aluguelDorm.nobre.al4Dorm + item.aluguelDorm.centro.al4Dorm + item.aluguelDorm.outrasRegioes.al4Dorm);
            numDorm[5] += (item.aluguelDorm.nobre.al4_Dorm + item.aluguelDorm.centro.al4_Dorm + item.aluguelDorm.outrasRegioes.al4_Dorm);

            numGar[0] += (item.aluguelGar.nobre.al0Gar + item.aluguelGar.centro.al0Gar + item.aluguelGar.outrasRegioes.al0Gar);
            numGar[1] += (item.aluguelGar.nobre.al1Gar + item.aluguelGar.centro.al1Gar + item.aluguelGar.outrasRegioes.al1Gar);
            numGar[2] += (item.aluguelGar.nobre.al2Gar + item.aluguelGar.centro.al2Gar + item.aluguelGar.outrasRegioes.al2Gar);
            numGar[3] += (item.aluguelGar.nobre.al3Gar + item.aluguelGar.centro.al3Gar + item.aluguelGar.outrasRegioes.al3Gar);
            numGar[4] += (item.aluguelGar.nobre.al3_Gar + item.aluguelGar.centro.al3_Gar + item.aluguelGar.outrasRegioes.al3_Gar);
          }else{
            numeroAluguel[0] += item.imoveisAl[req.params.tipo].total;
            numeroAluguel[1] += item.imoveisAl[req.params.tipo].casa;
            numeroAluguel[2] += item.imoveisAl[req.params.tipo].apart;


            numDorm[0] += item.aluguelDorm[req.params.tipo].alKit;
            numDorm[1] += item.aluguelDorm[req.params.tipo].al1Dorm;
            numDorm[2] += item.aluguelDorm[req.params.tipo].al2Dorm;
            numDorm[3] += item.aluguelDorm[req.params.tipo].al3Dorm;
            numDorm[4] += item.aluguelDorm[req.params.tipo].al4Dorm;
            numDorm[5] += item.aluguelDorm[req.params.tipo].al4_Dorm;

            numGar[0] += item.aluguelGar[req.params.tipo].al0Gar;
            numGar[1] += item.aluguelGar[req.params.tipo].al1Gar;
            numGar[2] += item.aluguelGar[req.params.tipo].al2Gar;
            numGar[3] += item.aluguelGar[req.params.tipo].al3Gar;
            numGar[4] += item.aluguelGar[req.params.tipo].al3_Gar;
          }
          quant += 1;
        }
      });


      let totDorm = numDorm.reduce((total,valorAtual) => total + valorAtual, 0);;
      numDorm = numDorm.map((item,index)=>{return item*100/totDorm});

      let totGar = numGar.reduce((total,valorAtual) => total + valorAtual, 0);;
      numGar = numGar.map((item,index)=>{return item*100/totGar});

      let totValorAluguel = valorAluguel.reduce((total,valorAtual) => total + valorAtual, 0);
      valorAluguel = valorAluguel.map((item,index)=>{return item*100/totValorAluguel});

      let totValorAluguelM2 = valorAluguelM2.reduce((total,valorAtual) => total + valorAtual, 0);
      valorAluguelM2 = valorAluguelM2.map((item,index)=>{return item*100/totValorAluguelM2});

      numeroAluguel = numeroAluguel.map((item,index)=> item/quant);

      aRegionAnos.push({
        ano: i,
        numeroAluguel: numeroAluguel,
        valorAluguel: valorAluguel,
        valorAluguelM2: valorAluguelM2,
        aluguelDorm: numDorm,
        aluguelGar: numGar,
      });
    }

    let firsts = [aRegionAnos[0].numeroAluguel[0],aRegionAnos[0].numeroAluguel[1],aRegionAnos[0].numeroAluguel[2]];
    aRegionAnos.forEach(
      (item,index) =>{ 
        aRegionAnos[index].numeroAluguel = item.numeroAluguel.map((item,index) =>  item*100/firsts[index] - 100)
      });
    return res.json(aRegionAnos);
  }
}
