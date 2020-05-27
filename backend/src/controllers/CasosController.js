const express = require("express");
const crypto = require("crypto");
const con = require("../database/connections");

const rout = express.Router();

const size = 10;
module.exports = {
    async create(req,res){
        const {title,description,value} = req.body;
        const ong_id = req.headers.authorization;
        if(ong_id == null){
            return res.status(401).json({error:'Não autorizado'});
        }
        const [id] = await con('casos').insert({
            title,
            description,
            value,
            ong_id
        });
        return res.json({
            status:"okay",
            id
        });
    }, 
    async index(req,res){
        const ong_id = req.headers.authorization;
        if(ong_id ==null)
            return res.status(401).json({error:'Não autorizado'});
        const {page = 1} = req.query;
        const [count] = await con('casos').count();
        res.header('total',count['count(*)']);
        const casos = await con('casos').join(
            'ongs','ongs.id','=','casos.ong_id'
        ).where('ongs.id',ong_id).limit(size).offset((page-1)*size).select(['casos.*','ongs.name','ongs.email','ongs.city','ongs.uf','ongs.whatsapp']);
        
        return res.json(casos);
    },
    async all(req,res){
        const {page = 1} = req.query;
        const [count] = await con('casos').count();
        res.header('total',count['count(*)']);
        const casos = await con('casos').join(
            'ongs','ongs.id','=','casos.ong_id'
        ).limit(size).offset((page-1)*size).select(['casos.*','ongs.name','ongs.email','ongs.city','ongs.uf','ongs.whatsapp']);
        
        return res.json(casos);
    },
    async view(req,res){
        const {id}  = req.params;
        const ongs = await con('ongs').where('id',id).select('*');
        if(ong_id !== ong_id_src)
            return res.status(401).json({error:'Não autorizado'});
    
        return res.json(ongs);
    },
    async delete(req,res){
        const {id}  = req.params;
        const ong_id = req.headers.authorization;
        const [ong_id_src] = await con('ongs').where('id',ong_id).select('id');
        //console.log(ong_id,ong_id_src.id)
        console.log(id)
        if(ong_id !== ong_id_src.id)
            return res.status(401).json({error:'Não autorizado'});
        
        await con('casos').where('id',id).delete();
        return res.status(204).send();
    }

}