const mongoose = require("mongoose");
const aval = require('../models/modelAval/Avaliadores');

module.exports = {
  async index(req, res) {
    const avaliadores = await aval.find();

    return res.json(avaliadores);
  },

  async show(req, res) {
    const avaliadores = await aval.findById(req.params.id);

    return res.json(avaliadores);
  },

  async showImage(req, res) {
    const avaliadores = await aval.findById(req.params.id);

    return res.json(avaliadores);
  },  


  async store(req,res) {
    
    const avaliadores = await aval.create({
      ...req.body,
      imagem: {
        name: req.file.filename,
      }
    });
    
    return res.json(avaliadores);
},

  async update(req, res) {
    const avaliadores = await aval.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(avaliadores);
  },

  async destroy(req, res) {
    await aval.findByIdAndRemove(req.params.id);

    return res.send();
  },
}