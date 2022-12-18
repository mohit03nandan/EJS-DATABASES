const express = require('express')
const mongoose = require("mongoose")

    const postSchema = {
        title: String,
        content: String
     };
       
    const Gallary = mongoose.model('Gallary', postSchema);
   

    
    var my_schemas = {
       "Gallary": Gallary
    };

module.exports = my_schemas;