const mongoose = require("mongoose");

const CapitalRegionAlSchema = new mongoose.Schema({
  ano: {
    type: Number,
    required: true,
  },

  mes: {
    type: Number,
    required: true,
  },

  region: {
    type: String,
    required: true
  },
  
  valorMed:{
    casas:{
        kit:{
            type: Number,
            //required: true,
        },

        dorm1:{
            type: Number,
            //required: true,
        },

        dorm2:{
            type: Number,
            //required: true,
        },

        dorm3:{
            type: Number,
            //required: true,
        },

        dorm4:{
            type: Number,
            //required: true,
        },
    },

    apart:{
        kit:{
            type: Number,
            //required: true,
        },

        dorm1:{
            type: Number,
            //required: true,
        },

        dorm2:{
            type: Number,
            //required: true,
        },

        dorm3:{
            type: Number,
            //required: true,
        },

        dorm4:{
            type: Number,
            //required: true,
        },
    },
  },

  valorMedM2:{
    casas:{
        kit:{
            type: Number,
            //required: true,
        },

        dorm1:{
            type: Number,
            //required: true,
        },

        dorm2:{
            type: Number,
            //required: true,
        },

        dorm3:{
            type: Number,
            //required: true,
        },

        dorm4:{
            type: Number,
            //required: true,
        },
    },

    apart:{
        kit:{
            type: Number,
            //required: true,
        },

        dorm1:{
            type: Number,
            //required: true,
        },

        dorm2:{
            type: Number,
            //required: true,
        },

        dorm3:{
            type: Number,
            //required: true,
        },

        dorm4:{
            type: Number,
            //required: true,
        },
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
    }
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

module.exports = mongoose.model("Aluguel_Cap_Regiao", CapitalRegionAlSchema);