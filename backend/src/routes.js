const express = require("express");
const rout = express.Router();

const ongs = require("./controllers/OngsController");
const casos = require("./controllers/CasosController");
const session = require("./controllers/SessionController");

rout.post('/ongs',ongs.create);
rout.get('/ongs',ongs.index);
rout.get('/ongs/:id',ongs.view);
rout.delete('/ongs:id',ongs.delete);

rout.post('/casos',casos.create);
rout.get('/casos',casos.index);
rout.get('/casos/all',casos.all);
rout.delete('/casos/:id',casos.delete);

rout.post('/sessions',session.login);

module.exports = rout;
