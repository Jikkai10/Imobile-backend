const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const Vendas = require('../../models/modelsRegion/vendas');

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
}