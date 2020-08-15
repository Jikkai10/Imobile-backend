const express = require("express");
const routes = express.Router();

const VendasCap = require("./controllers/controllersCap/VendasCapController");

routes.get("/vendasCap", VendasCap.index);
routes.post("/vendasCap", VendasCap.store);
routes.put("/vendasCap/:id", VendasCap.update);
routes.delete("/vendasCap/:id", VendasCap.destroy);

const VendasRCap = require("./controllers/controllersCap/VendasRCapController");

routes.get("/vendasRCap", VendasRCap.index);
routes.post("/vendasRCap", VendasRCap.store);
routes.put("/vendasRCap/:id", VendasRCap.update);
routes.delete("/vendasRCap/:id", VendasRCap.destroy);

const AluguelCap = require("./controllers/controllersCap/AluguelCapController");

routes.get("/aluguelCap", AluguelCap.index);
routes.post("/aluguelCap", AluguelCap.store);
routes.put("/aluguelCap/:id", AluguelCap.update);
routes.delete("/aluguelCap/:id", AluguelCap.destroy);

const AluguelRCap = require("./controllers/controllersCap/AluguelRCapController");

routes.get("/aluguelRCap", AluguelRCap.index);
routes.post("/aluguelRCap", AluguelRCap.store);
routes.put("/aluguelRCap/:id", AluguelRCap.update);
routes.delete("/aluguelRCap/:id", AluguelRCap.destroy);



module.exports = routes;
