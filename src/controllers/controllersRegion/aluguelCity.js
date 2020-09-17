const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const AluguelCity = require('../../models/modelsRegion/alugueisCity');

module.exports = {
  async index(req, res) {
    const AluguelCity = await AluguelCity.find();

    return res.json(AluguelCity);
  },

  async show(req, res) {
    const AluguelCity = await AluguelCity.findById(req.params.id);

    return res.json(AluguelCity);
  },


  async store(req, res) {
    const AluguelCity = await AluguelCity.create(req.body);
    return res.json(AluguelCity);
  },

  async update(req, res) {
    const AluguelCity = await AluguelCity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(AluguelCity);
  },

  async destroy(req, res) {
    await AluguelCity.findByIdAndRemove(req.params.id);

    return res.send();
  },
}