const mongoose = require("mongoose");
const Vendas_RCap = require('../../models/modelsCap/Vendas_Regioes_Cap');

module.exports = {
  async index(req, res) {
    const vRCap = await Vendas_RCap.find();

    return res.json(vRCap);
  },

  async show(req, res) {
    const vRCap = await Vendas_RCap.findById(req.params.id);

    return res.json(vRCap);
  },


  async store(req, res) {
    const vRCap = await Vendas_RCap.create(req.body);
    return res.json(vRCap);
  },

  async update(req, res) {
    const vRCap = await Vendas_RCap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vRCap);
  },

  async destroy(req, res) {
    await Vendas_RCap.findByIdAndRemove(req.params.id);

    return res.send();
  },
};