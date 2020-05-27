const knex = require('knex');
const conf = require('../../knexfile');

const con = knex(conf.development);

module.exports = con;