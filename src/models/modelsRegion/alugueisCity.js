const mongoose = require("mongoose");

const CityAlSchema = new mongoose.Schema({

    cidade: {
        type: String,
        required: true,
    },
    
  ano: {
    type: Number,
    required: true,
  },

  mes: {
    type: Number,
    required: true,
  },

  regiao: {
    type: String,
    required: true,
  },
  
  valorMed:{
    casas: {
        nobre: {
            type: Number
        },
        centro: {
            type: Number
        },
        outrasRegioes: {
            type: Number
        },
    },
    apart: {
        nobre: {
            type: Number
        },
        centro: {
            type: Number
        },
        outrasRegioes: {
            type: Number
        },
    }
  },

  valorMedM2:{
    casas: {
        nobre: {
            type: Number
        },
        centro: {
            type: Number
        },
        outrasRegioes: {
            type: Number
        },
    },
    apart: {
        nobre: {
            type: Number
        },
        centro: {
            type: Number
        },
        outrasRegioes: {
            type: Number
        },
    }
  },

});

module.exports = mongoose.model("Aluguel_City", CityAlSchema);