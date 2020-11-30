const mongoose = require("mongoose");

const Imagem = new mongoose.Schema({
    nome: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
},);

module.exports = mongoose.model("Imagem", Imagem);