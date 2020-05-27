const express = require("express");
const crypto = require("crypto");
const con = require("../database/connections");

const rout = express.Router();

const size = 10;
module.exports = {
    async login(req,res){
        const {id} = req.body;
        const ong_id = req.headers.authorization;
        if(id == null){
            return res.status(401).json({error:'Não autorizado'});
        }
        const [ongs] = await con('ongs').where('id',id).limit(1).select('*');
        console.log(ongs)
        return res.json({
            nome : ongs.name,
            id : ongs.id
        });
    }
}