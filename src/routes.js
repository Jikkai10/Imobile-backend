const express = require("express");
const routes = express.Router();

const VendasCap = require("./controllers/controllersCap/VendasCapController");

routes.get("/vendasCap", VendasCap.index);
routes.get("/vendasCap/ano/:first/:last", VendasCap.indexAno);
routes.post("/vendasCap", VendasCap.store);
routes.put("/vendasCap/:id", VendasCap.update);
routes.delete("/vendasCap/:id", VendasCap.destroy);

const VendasRCap = require("./controllers/controllersCap/VendasRCapController");

routes.get("/vendasRCap", VendasRCap.index);
routes.get('/vendasRCap/:region/ano/:first/:last', VendasRCap.agruparRegioes)
routes.post("/vendasRCap", VendasRCap.store);
routes.put("/vendasRCap/:id", VendasRCap.update);
routes.delete("/vendasRCap/:id", VendasRCap.destroy);

const AluguelCap = require("./controllers/controllersCap/AluguelCapController");

routes.get("/aluguelCap", AluguelCap.index);
routes.get("/aluguelCap/ano/:first/:last", AluguelCap.indexAno);
routes.post("/aluguelCap", AluguelCap.store);
routes.put("/aluguelCap/:id", AluguelCap.update);
routes.delete("/aluguelCap/:id", AluguelCap.destroy);

const AluguelRCap = require("./controllers/controllersCap/AluguelRCapController");

routes.get("/aluguelRCap", AluguelRCap.index);
routes.get("/aluguelRCap/:region/ano/:first/:last", AluguelRCap.agruparRegioes);
routes.post("/aluguelRCap", AluguelRCap.store);
routes.put("/aluguelRCap/:id", AluguelRCap.update);
routes.delete("/aluguelRCap/:id", AluguelRCap.destroy);

const vendasRegion = require("./controllers/controllersRegion/vendas");

routes.get("/vendasRegion", vendasRegion.index);
routes.post("/vendasRegion", vendasRegion.store);
routes.put("/vendasRegion/:id", vendasRegion.update);
routes.delete("/vendasRegion/:id", vendasRegion.destroy);

const vendasCity = require("./controllers/controllersRegion/vendasCity");

routes.get("/vendasCity", vendasCity.index);
routes.post("/vendasCity", vendasCity.store);
routes.put("/vendasCity/:id", vendasCity.update);
routes.delete("/vendasCity/:id", vendasCity.destroy);

const aluguelRegion = require("./controllers/controllersRegion/aluguel");

routes.get("/aluguelRegion", aluguelRegion.index);
routes.post("/aluguelRegion", aluguelRegion.store);
routes.put("/aluguelRegion/:id", aluguelRegion.update);
routes.delete("/aluguelRegion/:id", aluguelRegion.destroy);

const aluguelCity = require("./controllers/controllersRegion/aluguelCity");

routes.get("/aluguelCity", aluguelCity.index);
routes.post("/aluguelCity", aluguelCity.store);
routes.put("/aluguelCity/:id", aluguelCity.update);
routes.delete("/aluguelCity/:id", aluguelCity.destroy);





module.exports = routes;
