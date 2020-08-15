const mongoose = require("mongoose");
const Aluguel_RCap = require('../../models/modelsCap/Aluguel_Regioes_Cap');

module.exports = {
  async index(req, res) {
    const aRCap = await Aluguel_RCap.find();

    return res.json(aRCap);
  },

  async show(req, res) {
    const aRCap = await Aluguel_RCap.findById(req.params.id);

    return res.json(aRCap);
  },


  async store(req, res) {
    const aRCap = await Aluguel_RCap.create(req.body);
    return res.json(aRCap);
  },

  async update(req, res) {
    const aRCap = await Aluguel_RCap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(aRCap);
  },

  async destroy(req, res) {
    await Aluguel_RCap.findByIdAndRemove(req.params.id);

    return res.send();
  },
};