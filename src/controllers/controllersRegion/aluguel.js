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
}