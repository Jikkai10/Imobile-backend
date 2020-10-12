const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const Vendas = require('../../models/modelsRegion/vendas');
const { indexAno } = require("../controllersCap/VendasCapController");

module.exports = {
  async index(req, res) {
    const vendas = await Vendas.find();

    return res.json(vendas);
  },

  async show(req, res) {
    const vendas = await Vendas.findById(req.params.id);

    return res.json(vendas);
  },


  async store(req, res) {
    const vendas = await Vendas.create(req.body);
    return res.json(vendas);
  },

  async update(req, res) {
    const vendas = await Vendas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vendas);
  },

  async destroy(req, res) {
    await Vendas.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async indexAno(req,res){
    const vRegion = await Vendas.find();
    
    const vRegionAnos = [];
    for(var i = parseInt(req.params.first); i <= parseInt(req.params.last); i++){
      let numeroVendas = [0,0,0];
      let valorVendas = [0,0,0,0,0,0,0,0,0,0,0];
      let valorVendasM2 = [0,0,0,0,0,0,0,0,0,0];
      let tipoImovel = [0,0,0];
      let numDorm = [0,0,0,0,0,0];
      let numGar = [0,0,0,0,0];
      let quant = 0;
      vRegion.map((item,index)=>{
        if(item.ano === i && item.regiao === req.params.region){
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
          if(req.params.tipo === 'total'){
            numeroVendas[0] += item.imoveisVend.imoveisVendTotal.total;
            numeroVendas[1] += item.imoveisVend.imoveisVendTotal.casa;
            numeroVendas[2] += item.imoveisVend.imoveisVendTotal.apart;
            
            tipoImovel[0] += (item.vendaTipoImovel.nobre.luxo + item.vendaTipoImovel.centro.luxo + item.vendaTipoImovel.outrasRegioes.luxo);
            tipoImovel[1] += (item.vendaTipoImovel.nobre.medio + item.vendaTipoImovel.centro.medio + item.vendaTipoImovel.outrasRegioes.medio);
            tipoImovel[2] += (item.vendaTipoImovel.nobre.standard + item.vendaTipoImovel.centro.standard + item.vendaTipoImovel.outrasRegioes.standard);

            numDorm[0] += (item.vendasDorm.nobre.vendKit + item.vendasDorm.centro.vendKit + item.vendasDorm.outrasRegioes.vendKit);
            numDorm[1] += (item.vendasDorm.nobre.vend1Dorm + item.vendasDorm.centro.vend1Dorm + item.vendasDorm.outrasRegioes.vend1Dorm);
            numDorm[2] += (item.vendasDorm.nobre.vend2Dorm + item.vendasDorm.centro.vend2Dorm + item.vendasDorm.outrasRegioes.vend2Dorm);
            numDorm[3] += (item.vendasDorm.nobre.vend3Dorm + item.vendasDorm.centro.vend3Dorm + item.vendasDorm.outrasRegioes.vend3Dorm);
            numDorm[4] += (item.vendasDorm.nobre.vend4Dorm + item.vendasDorm.centro.vend4Dorm + item.vendasDorm.outrasRegioes.vend4Dorm);
            numDorm[5] += (item.vendasDorm.nobre.vend4_Dorm + item.vendasDorm.centro.vend4_Dorm + item.vendasDorm.outrasRegioes.vend4_Dorm);

            numGar[0] += (item.vendasGar.nobre.vend0Gar + item.vendasGar.centro.vend0Gar + item.vendasGar.outrasRegioes.vend0Gar);
            numGar[1] += (item.vendasGar.nobre.vend1Gar + item.vendasGar.centro.vend1Gar + item.vendasGar.outrasRegioes.vend1Gar);
            numGar[2] += (item.vendasGar.nobre.vend2Gar + item.vendasGar.centro.vend2Gar + item.vendasGar.outrasRegioes.vend2Gar);
            numGar[3] += (item.vendasGar.nobre.vend3Gar + item.vendasGar.centro.vend3Gar + item.vendasGar.outrasRegioes.vend3Gar);
            numGar[4] += (item.vendasGar.nobre.vend3_Gar + item.vendasGar.centro.vend3_Gar + item.vendasGar.outrasRegioes.vend3_Gar);

            quant += 1;
          }else{
            numeroVendas[0] += item.imoveisVend[req.params.tipo].total;
            numeroVendas[1] += item.imoveisVend[req.params.tipo].casa;
            numeroVendas[2] += item.imoveisVend[req.params.tipo].apart;

            tipoImovel[0] += item.vendaTipoImovel[req.params.tipo].luxo;
            tipoImovel[1] += item.vendaTipoImovel[req.params.tipo].medio;
            tipoImovel[2] += item.vendaTipoImovel[req.params.tipo].standard;

            numDorm[0] += item.vendasDorm[req.params.tipo].vendKit;
            numDorm[1] += item.vendasDorm[req.params.tipo].vend1Dorm;
            numDorm[2] += item.vendasDorm[req.params.tipo].vend2Dorm;
            numDorm[3] += item.vendasDorm[req.params.tipo].vend3Dorm;
            numDorm[4] += item.vendasDorm[req.params.tipo].vend4Dorm;
            numDorm[5] += item.vendasDorm[req.params.tipo].vend4_Dorm;

            numGar[0] += item.vendasGar[req.params.tipo].vend0Gar;
            numGar[1] += item.vendasGar[req.params.tipo].vend1Gar;
            numGar[2] += item.vendasGar[req.params.tipo].vend2Gar;
            numGar[3] += item.vendasGar[req.params.tipo].vend3Gar;
            numGar[4] += item.vendasGar[req.params.tipo].vend3_Gar;
            quant += 1;
          }
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

      vRegionAnos.push({
        ano: i,
        vendTot: numeroVendas,
        valorVendas: valorVendas,
        valorVendasM2: valorVendasM2,
        vendaTipoImovel: tipoImovel,
        numDorm: numDorm,
        numGar: numGar,
      });
    }

    let firsts = [vRegionAnos[0].vendTot[0],vRegionAnos[0].vendTot[1],vRegionAnos[0].vendTot[2]];
    vRegionAnos.forEach(
      (item,index) =>{ 
        vRegionAnos[index].vendTot = item.vendTot.map((item,index) =>  item*100/firsts[index] - 100)
      });
    return res.json(vRegionAnos);
  }
}