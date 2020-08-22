const mongoose = require("mongoose");

const CapitalAlSchema = new mongoose.Schema({
  ano: {
    type: Number,
    required: true,
  },

  mes: {
    type: Number,
    required: true,
  },
  
  imoveisAl: {
    imoveisAlTotal: {
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

    aluguelA: {
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

    aluguelB: {
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

    aluguelC: {
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

    aluguelD: {
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

    aluguelE: {
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

  valorAluguel: {

    aluguel_200: {
      type: Number,
      require: true,
    },

    aluguel_400: {
      type: Number,
      require: true,
    },
    
    aluguel_600: {
      type: Number,
      require: true,
    },

    aluguel_800: {
      type: Number,
      require: true,
    },

    aluguel_1000: {
      type: Number,
      require: true,
    },

    aluguel_1200: {
      type: Number,
      require: true,
    },

    aluguel_1400: {
      type: Number,
      require: true,
    },

    aluguel_1600: {
      type: Number,
      require: true,
    },

    aluguel_1800: {
      type: Number,
      require: true,
    },

    aluguel_2000: {
      type: Number,
      require: true,
    },

    aluguel_2001: {
        type: Number,
        require: true,
    },

  },

  valorAluguelM2: {
    M2_10: {
      type: Number,
      require: true,
    },

    M2_15: {
      type: Number,
      require: true,
    },

    M2_20: {
      type: Number,
      require: true,
    },
    
    M2_25: {
      type: Number,
      require: true,
    },

    M2_30: {
      type: Number,
      require: true,
    },

    M2_35: {
      type: Number,
      require: true,
    },

    M2_36: {
      type: Number,
      require: true,
    },

  },

  aluguelDorm:{
    alKit:{
      type: Number,
      require: true,
    },

    al1Dorm:{
      type: Number,
      require: true,
    },

    al2Dorm:{
      type: Number,
      require: true,
    },

    al3Dorm:{
      type: Number,
      require: true,
    },

    al4Dorm:{
      type: Number,
      require: true,
    },

    al4_Dorm:{
      type: Number,
      require: true,
    },
  },

  aluguelGar:{

    al0Gar:{
      type: Number,
      require: true,
    },

    al1Gar:{
      type: Number,
      require: true,
    },

    al2Gar:{
      type: Number,
      require: true,
    },

    al3Gar:{
      type: Number,
      require: true,
    },

    al3_Gar:{
      type: Number,
      require: true,
    },
  },

});

module.exports = mongoose.model("Aluguel_Cap", CapitalAlSchema);