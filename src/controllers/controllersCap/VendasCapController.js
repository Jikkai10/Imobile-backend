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
};
