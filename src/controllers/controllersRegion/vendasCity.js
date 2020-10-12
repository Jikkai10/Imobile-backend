const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const VendasCity = require('../../models/modelsRegion/vendasCity');
const { indexAno } = require("../controllersCap/VendasCapController");

module.exports = {
  async index(req, res) {
    const vendasCity = await VendasCity.find();

    return res.json(vendasCity);
  },

  async show(req, res) {
    const vendasCity = await VendasCity.findById(req.params.id);

    return res.json(vendasCity);
  },


  async store(req, res) {
    const vendasCity = await VendasCity.create(req.body);
    return res.json(vendasCity);
  },

  async update(req, res) {
    const vendasCity = await VendasCity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vendasCity);
  },

  async destroy(req, res) {
    await VendasCity.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async cidades(req, res){
    const vCity = await VendasCity.find();
    const cidade = vCity.map((item) => item.cidade);
    let cidades = cidade.filter((este, i) => cidade.indexOf(este) === i);
    return res.json(cidades);
  },

  async indexAno(req, res){
    const vCity = await VendasCity.find();
    const vCityAnos = [];
    
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let medNobre = 0;
      let medCentro = 0;
      let medOutros = 0;
      let medNobreM2 = 0;
      let medCentroM2 = 0;
      let medOutrosM2 = 0;
      vCity.map((item)=>{
        
        if(item.ano === i && item.regiao === req.params.region && item.cidade == req.params.cidade){
          
          medNobre = (item.valorMed.casas.nobre + item.valorMed.apart.nobre)/2;
          medCentro = (item.valorMed.casas.centro + item.valorMed.apart.centro)/2;
          medOutros = (item.valorMed.casas.outrasRegioes + item.valorMed.apart.outrasRegioes)/2;
          medNobreM2 = (item.valorMedM2.casas.nobre + item.valorMedM2.apart.nobre)/2;
          medCentroM2 = (item.valorMedM2.casas.centro + item.valorMedM2.apart.centro)/2;
          medOutrosM2 = (item.valorMedM2.casas.outrasRegioes + item.valorMedM2.apart.outrasRegioes)/2;
          console.log(medNobre);
          
        }
      });
      vCityAnos.push({
        ano: i,
        medNobre: medNobre,
        medCentro: medCentro,
        medOutros: medOutros,
        medNobreM2: medNobreM2,
        medCentroM2: medCentroM2,
        medOutrosM2: medOutrosM2,
      });
    }
    console.log(vCityAnos[0].medNobre*100/vCityAnos[0].medNobre - 100);
    
    let first = [0,0,0,0,0,0];
    vCityAnos.forEach(
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
    vCityAnos.forEach(
      (item,index) =>{ 
        vCityAnos[index].medNobre = [item.medNobre*100/first[0]- 100];
        vCityAnos[index].medCentro = [item.medCentro*100/first[1] - 100];
        vCityAnos[index].medOutros = [item.medOutros*100/first[2] - 100];
        vCityAnos[index].medNobreM2 = [item.medNobreM2*100/first[3] - 100];
        vCityAnos[index].medCentroM2 = [item.medCentroM2*100/first[4] - 100];
        vCityAnos[index].medOutrosM2 = [item.medOutrosM2*100/first[5] - 100];
      });
      console.log(vCityAnos);
    return res.json(vCityAnos);
  }
}