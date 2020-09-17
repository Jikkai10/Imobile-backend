const mongoose = require("mongoose");
//const Vendas_Cap = mongoose.model("vendasCap");
const VendasCity = require('../../models/modelsRegion/vendasCity');

module.exports = {
  async index(req, res) {
    const vendasCity = await VendasCity.find();

    return res.json(vendasCity);
  },

  async show(req, res) {
    const vendasCity = await VendasCity.findById(req.params.id);

    return res.json(vendasCity);
  },


  async store(req, res) {
    const vendasCity = await VendasCity.create(req.body);
    return res.json(vendasCity);
  },

  async update(req, res) {
    const vendasCity = await VendasCity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(vendasCity);
  },

  async destroy(req, res) {
    await VendasCity.findByIdAndRemove(req.params.id);

    return res.send();
  },
}