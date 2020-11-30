const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const path = require("path");

// iniciando o app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname,"tmp","uploads")));

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/tccImobileApi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

// rotas
app.use("/", require("./src/routes"));
app.listen(3002);
