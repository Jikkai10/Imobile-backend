const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const Vendas_Cap = require('../../models/modelsCap/Vendas_Cap');

module.exports = {
  async index(req, res) {
    const vCap = await Vendas_Cap.find();

    return res.json(vCap);
  },

  async show(req, res) {
    const vCap = await Vendas_Cap.findById(req.params.id);

    return res.json(vCap);
  },


  async store(req, res) {
    const vCap = await Vendas_Cap.create(req.body);
    return res.json(vCap);
  },

  async update(req, res) {
    const vCap = await Vendas_Cap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vCap);
  },

  async destroy(req, res) {
    await Vendas_Cap.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async indexAno(req, res) {
    const vCap = await Vendas_Cap.find();

    let anos = vCap.map((item,index) => {
      return item.ano;
    });
    
    const vCapAnos = [];
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let numeroVendas = [0,0,0];
      let valorVendas = [0,0,0,0,0,0,0,0,0,0,0];
      let valorVendasM2 = [0,0,0,0,0,0,0,0,0,0];
      let tipoImovel = [0,0,0];
      let numDorm = [0,0,0,0,0,0];
      let numGar = [0,0,0,0,0];
      let quant = 0;
      vCap.map((item,index)=>{
        if(item.ano === i){

          numeroVendas[0] += item.imoveisVend.imoveisVendTotal.total;
          numeroVendas[1] += item.imoveisVend.imoveisVendTotal.casa;
          numeroVendas[2] += item.imoveisVend.imoveisVendTotal.apart;

          valorVendas[0] += item.valorVendas.vendas_100;
          valorVendas[1] += item.valorVendas.vendas_200;
          valorVendas[2] += item.valorVendas.vendas_300;
          valorVendas[3] += item.valorVendas.vendas_400;
          valorVendas[4] += item.valorVendas.vendas_500;
          valorVendas[5] += item.valorVendas.vendas_600;
          valorVendas[6] += item.valorVendas.vendas_700;
          valorVendas[7] += item.valorVendas.vendas_800;
          valorVendas[8] += item.valorVendas.vendas_900;
          valorVendas[9] += item.valorVendas.vendas_1000;
          valorVendas[10] += item.valorVendas.vendas_1001;

          valorVendasM2[0] += item.valorVendasM2.M2_2000;
          valorVendasM2[1] += item.valorVendasM2.M2_3000;
          valorVendasM2[2] += item.valorVendasM2.M2_4000;
          valorVendasM2[3] += item.valorVendasM2.M2_5000;
          valorVendasM2[4] += item.valorVendasM2.M2_6000;
          valorVendasM2[5] += item.valorVendasM2.M2_7000;
          valorVendasM2[6] += item.valorVendasM2.M2_8000;
          valorVendasM2[7] += item.valorVendasM2.M2_9000;
          valorVendasM2[8] += item.valorVendasM2.M2_10000;
          valorVendasM2[9] += item.valorVendasM2.M2_10001;

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

          quant += 1;
        }
        
      });

      let totTipo = tipoImovel.reduce((total,valorAtual) => total + valorAtual, 0);;
      tipoImovel = tipoImovel.map((item,index)=>{return item*100/totTipo});

      let totDorm = numDorm.reduce((total,valorAtual) => total + valorAtual, 0);;
      numDorm = numDorm.map((item,index)=>{return item*100/totDorm});

      let totGar = numGar.reduce((total,valorAtual) => total + valorAtual, 0);;
      numGar = numGar.map((item,index)=>{return item*100/totGar});

      let totValorVendas = valorVendas.reduce((total,valorAtual) => total + valorAtual, 0);
      valorVendas = valorVendas.map((item,index)=>{return item*100/totValorVendas});

      let totValorVendasM2 = valorVendasM2.reduce((total,valorAtual) => total + valorAtual, 0);
      valorVendasM2 = valorVendasM2.map((item,index)=>{return item*100/totValorVendasM2});

      numeroVendas = numeroVendas.map((item,index)=> item/quant);

      vCapAnos.push({
        ano: i,
        vendTot: numeroVendas,
        valorVendas: valorVendas,
        valorVendasM2: valorVendasM2,
        vendaTipoImovel: tipoImovel,
        numDorm: numDorm,
        numGar: numGar,
      });
    }

    let firsts = [vCapAnos[0].vendTot[0],vCapAnos[0].vendTot[1],vCapAnos[0].vendTot[2]];
    vCapAnos.forEach(
      (item,index) =>{ 
        vCapAnos[index].vendTot = item.vendTot.map((item,index) =>  item*100/firsts[index] - 100)
      });
    return res.json(vCapAnos);
  }
};
