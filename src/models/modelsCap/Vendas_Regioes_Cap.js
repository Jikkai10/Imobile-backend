const mongoose = require("mongoose");

const CapitalRegionSaleSchema = new mongoose.Schema({
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
    required: true,
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
        luxo:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },

        medio:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },

        simples:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },
    },

    apart:{
        luxo:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },

        medio:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },

        simples:{
            anos_7:{
                type: Number,
                //required: true,
            },

            anos_8:{
                type: Number,
                //required: true,
            },

            anos_15:{
                type: Number,
                //required: true,
            },
        },
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

module.exports = mongoose.model("Vendas_Cap_Regiao", CapitalRegionSaleSchema);