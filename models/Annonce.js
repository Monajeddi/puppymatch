const mongoose = require('mongoose')

const schema = mongoose.Schema

const annonceScema = new schema({
    nom: {
        type: String,
        require: true,
    },
    race: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    sexe: {
        type: String,
        require: true,
    },
    poil: String 
    ,
    vaccins: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    localisation: {
        type: String,
        require: true,
    },

})

module.exports = Annonce = mongoose.model('annonce', annonceScema)