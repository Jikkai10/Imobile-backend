const mongoose = require("mongoose");

const RegionSaleSchema = new mongoose.Schema({

  regiao: {
    type: String,
    required: true
  },

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

    nobre: {
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

    centro: {
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

    outrasRegioes: {
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
    nobre:{
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
    centro:{
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
    outrasRegioes:{
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
    }
  },

  vendasGar:{
    nobre:{
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
    centro:{
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
    outrasRegioes:{
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
  },

  vendaTipoImovel:{
    nobre:{
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
    centro:{
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
    outrasRegioes:{
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
    }
  },

});

module.exports = mongoose.model("vendasRegiao", RegionSaleSchema);