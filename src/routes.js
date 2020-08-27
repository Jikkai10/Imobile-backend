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
routes.get('/vendasRCap/agrupado/:first/:last', VendasRCap.agruparRegioes)
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
routes.get("/aluguelRCap/ano/:first/:last", AluguelRCap.agruparRegioes);
routes.post("/aluguelRCap", AluguelRCap.store);
routes.put("/aluguelRCap/:id", AluguelRCap.update);
routes.delete("/aluguelRCap/:id", AluguelRCap.destroy);



module.exports = routes;
