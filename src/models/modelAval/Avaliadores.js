const mongoose = require("mongoose");

const Aval = new mongoose.Schema({
    nome: String,
    localizacao: String,
    especialidade: String,
    descricao: String,
    contato: String,
    whats: String,
    creci: String,
    cnai: String,
    email: String,
    imagem: {
        name: String,
        url: String
    }
});

Aval.pre('save', function(){
    if(!this.imagem.url){
        this.imagem.url = `http://192.168.0.10:3002/files/${this.imagem.name}`
    }
});

module.exports = mongoose.model("Aval", Aval);