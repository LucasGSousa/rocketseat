const express = require("express");
const crypto = require("crypto");
const con = require("../database/connections");

const rout = express.Router();


module.exports = {
    async create(req,res){
        const {name,whatsapp,email,city,uf} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await con('ongs').insert({
            id,
            name,
            email,
            city,
            uf,
            whatsapp
        });
        return res.json({
            id
        });
    }, 
    async index(req,res){
        const ongs = await con('ongs').select('*');
    
        return res.json(ongs);
    },
    async view(req,res){
        const ongs = await con('ongs').select('*');
    
        return res.json(ongs);
    },
    async delete(req,res){
        const ongs = await con('ongs').select('*');
    
        return res.json(ongs);
    }

}