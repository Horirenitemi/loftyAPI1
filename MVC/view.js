const express = require("express");

const Router = express.Router();

const myData = require("./model");

exports.getAllEntry = async(req, res) =>{
    const newData = await myData.find();
    res.status(200).json(
        {
        developBy:"orire",
        report: true,
        totalData: newData.length,
        data: newData,
    }
    );
};


exports.getSingleEntry = async(req, res) =>{
    const newData = await myData.findById(req.params.id);
    res.status(200).json(newData);
};


exports.deleteSingleEntry = async(req, res) =>{
    const newData = await myData.findByIdAndDelete(req.params.id,);
    res.status(200).json("Done");
};


exports.updateSingleEntry = async(req, res) =>{
    const newData = await myData.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(newData);
};


exports.createEntry = async(req, res) =>{
    const newData = await myData.create(req.body);
    res.status(201).json(newData);
};

module.exports = Router;