const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const AluguelCity = require('../../models/modelsRegion/alugueisCity');

module.exports = {
  async index(req, res) {
    const aluguelCity = await AluguelCity.find();

    return res.json(aluguelCity);
  },

  async show(req, res) {
    const aluguelCity = await AluguelCity.findById(req.params.id);

    return res.json(aluguelCity);
  },


  async store(req, res) {
    const aluguelCity = await AluguelCity.create(req.body);
    return res.json(aluguelCity);
  },

  async update(req, res) {
    const aluguelCity = await AluguelCity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(aluguelCity);
  },

  async destroy(req, res) {
    await AluguelCity.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async indexAno(req, res){
    const aCity = await AluguelCity.find();
    const aCityAnos = [];
    
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let medNobre = 0;
      let medCentro = 0;
      let medOutros = 0;
      let medNobreM2 = 0;
      let medCentroM2 = 0;
      let medOutrosM2 = 0;
      aCity.map((item)=>{
        if(item.ano === i && item.regiao === req.params.region && item.cidade == req.params.cidade){
          medNobre = (item.valorMed.casas.nobre + item.valorMed.apart.nobre)/2;
          medCentro = (item.valorMed.casas.centro + item.valorMed.apart.centro)/2;
          medOutros = (item.valorMed.casas.outrasRegioes + item.valorMed.apart.outrasRegioes)/2;
          medNobreM2 = (item.valorMedM2.casas.nobre + item.valorMedM2.apart.nobre)/2;
          medCentroM2 = (item.valorMedM2.casas.centro + item.valorMedM2.apart.centro)/2;
          medOutrosM2 = (item.valorMedM2.casas.outrasRegioes + item.valorMedM2.apart.outrasRegioes)/2;

          
        }
      });
      aCityAnos.push({
        ano: i,
        medNobre: medNobre,
        medCentro: medCentro,
        medOutros: medOutros,
        medNobreM2: medNobreM2,
        medCentroM2: medCentroM2,
        medOutrosM2: medOutrosM2,
      });
    }
    let first = [0,0,0,0,0,0];
    aCityAnos.forEach(
      (item,index) =>{
        if(item.medNobre !== 0 && first[0] === 0){
          first[0] = item.medNobre;
        }
        if(item.medCentro !== 0 && first[1] === 0){
          first[1] = item.medCentro;
        }
        if(item.medOutros !== 0 && first[2] === 0){
          first[2] = item.medOutros;
        }
        if(item.medNobreM2 !== 0 && first[3] === 0){
          first[3] = item.medNobreM2;
        }
        if(item.medCentroM2 !== 0 && first[4] === 0){
          first[4] = item.medCentroM2;
        }
        if(item.medOutrosM2 !== 0 && first[5] === 0){
          first[5] = item.medOutrosM2;
        }
      }
    );
    first.forEach((item,index) =>{
      if(first[index] === 0){
        first[index] = 1;
      }
    });
    aCityAnos.forEach(
      (item,index) =>{ 
        aCityAnos[index].medNobre = [item.medNobre*100/first[0]- 100];
        aCityAnos[index].medCentro = [item.medCentro*100/first[1] - 100];
        aCityAnos[index].medOutros = [item.medOutros*100/first[2] - 100];
        aCityAnos[index].medNobreM2 = [item.medNobreM2*100/first[3] - 100];
        aCityAnos[index].medCentroM2 = [item.medCentroM2*100/first[4] - 100];
        aCityAnos[index].medOutrosM2 = [item.medOutrosM2*100/first[5] - 100];
      });
    return res.json(aCityAnos);
  }
}