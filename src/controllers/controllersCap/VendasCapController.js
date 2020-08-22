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
    for(var i = Math.min(...anos); i <= Math.max(...anos); i++){
      let numeroVendas = [0,0,0];
      let valorVendas = [0,0,0,0,0,0,0,0,0,0,0];
      let tipoImovel = [0,0,0];
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
          tipoImovel[0] += item.vendaTipoImovel.luxo;
          tipoImovel[1] += item.vendaTipoImovel.medio;
          tipoImovel[2] += item.vendaTipoImovel.standard;
          quant += 1;
        }
        
      });
      let totTipo = tipoImovel.reduce((total,valorAtual) => total + valorAtual, 0);;
      tipoImovel = tipoImovel.map((item,index)=>{return item*100/totTipo});
      let totValorVendas = valorVendas.reduce((total,valorAtual) => total + valorAtual, 0);
      valorVendas = valorVendas.map((item,index)=>{return item*100/totValorVendas});
      vCapAnos.push({
        ano: i,
        vendTot: numeroVendas[0]/quant,
        valorVendas: {
          vendas_100: valorVendas[0],
          vendas_200: valorVendas[1],
          vendas_300: valorVendas[2],
          vendas_400: valorVendas[3]
        },
        vendaTipoImovel: {
          luxo: tipoImovel[0],
          medio: tipoImovel[1],
          standard: tipoImovel[2]
        }
      });
    }
    return res.json(vCapAnos);
  }
};
