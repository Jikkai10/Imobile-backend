const mongoose = require("mongoose");
const Aluguel_Cap = require('../../models/modelsCap/Aluguel_Cap');

module.exports = {
  async index(req, res) {
    const aCap = await Aluguel_Cap.find();

    return res.json(aCap);
  },

  async show(req, res) {
    const aCap = await Aluguel_Cap.findById(req.params.id);

    return res.json(aCap);
  },


  async store(req, res) {
    const aCap = await Aluguel_Cap.create(req.body);
    return res.json(aCap);
  },

  async update(req, res) {
    const aCap = await Aluguel_Cap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(aCap);
  },

  async destroy(req, res) {
    await Aluguel_Cap.findByIdAndRemove(req.params.id);

    return res.send();
  },
};