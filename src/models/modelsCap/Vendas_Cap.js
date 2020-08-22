const mongoose = require("mongoose");

const CapitalSaleSchema = new mongoose.Schema({
  ano: {
    type: Number,
    required: true,
  },

  mes: {
    type: Number,
    required: true,
  },
  
  imoveisVend: {
    imoveisVendTotal: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    vendasA: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    vendasB: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    vendasC: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    vendasD: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },

    vendasE: {
      casa: {
        type: Number,
        required: true,
      },
      apart: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    },
  },

  valorVendas: {
    vendas_100: {
      type: Number,
      require: true,
    },

    vendas_200: {
      type: Number,
      require: true,
    },

    vendas_300: {
      type: Number,
      require: true,
    },
    
    vendas_400: {
      type: Number,
      require: true,
    },

    vendas_500: {
      type: Number,
      require: true,
    },

    vendas_600: {
      type: Number,
      require: true,
    },

    vendas_700: {
      type: Number,
      require: true,
    },

    vendas_800: {
      type: Number,
      require: true,
    },

    vendas_900: {
      type: Number,
      require: true,
    },

    vendas_1000: {
      type: Number,
      require: true,
    },

    vendas_1001: {
      type: Number,
      require: true,
    },

  },

  valorVendasM2: {
    M2_2000: {
      type: Number,
      require: true,
    },

    M2_3000: {
      type: Number,
      require: true,
    },

    M2_4000: {
      type: Number,
      require: true,
    },
    
    M2_5000: {
      type: Number,
      require: true,
    },

    M2_6000: {
      type: Number,
      require: true,
    },

    M2_7000: {
      type: Number,
      require: true,
    },

    M2_8000: {
      type: Number,
      require: true,
    },

    M2_9000: {
      type: Number,
      require: true,
    },

    M2_10000: {
      type: Number,
      require: true,
    },

    M2_10001: {
      type: Number,
      require: true,
    },

  },

  vendasDorm:{
    vendKit:{
      type: Number,
      require: true,
    },

    vend1Dorm:{
      type: Number,
      require: true,
    },

    vend2Dorm:{
      type: Number,
      require: true,
    },

    vend3Dorm:{
      type: Number,
      require: true,
    },

    vend4Dorm:{
      type: Number,
      require: true,
    },

    vend4_Dorm:{
      type: Number,
      require: true,
    },
  },

  vendasGar:{

    vend0Gar:{
      type: Number,
      require: true,
    },

    vend1Gar:{
      type: Number,
      require: true,
    },

    vend2Gar:{
      type: Number,
      require: true,
    },

    vend3Gar:{
      type: Number,
      require: true,
    },

    vend3_Gar:{
      type: Number,
      require: true,
    },
  },

  vendaTipoImovel:{
    luxo:{
      type: Number,
      require: true,
    },

    medio:{
      type: Number,
      require: true,
    },

    standard:{
      type: Number,
      require: true,
    },
  },

});

module.exports = mongoose.model("vendasCap", CapitalSaleSchema);
