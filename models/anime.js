var mongoose = require('mongoose');


var animeSchema = mongoose.Schema({
    sources:[{
        type: String
    }],
    title:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    episodes:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    synonyms:[{
        type: String
    }],
    relations:[{
        type: String
    }]
})


var Anime = module.exports = mongoose.model('Anime', animeSchema, 'anime');

module.exports.getAnimes = function(limit=10, callback){
    Anime.find(callback).limit(limit);
}

module.exports.getAnimeById = function(id, callback){
    Anime.findById(id, callback);
}

module.exports.addAnime = function(anime, callback){
    Anime.create(anime, callback);
}

module.exports.updateAnime = function(id,anime, options, callback){
    var query = {_id:id};
    var update = {
        title : anime.title,
        thumbnail : anime.thumbnail,
        picture : anime.picture,
        type : anime.type,
    }
    Anime.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteAnime = function(id, callback){
    var query = {_id:id};
    Anime.deleteOne(query, callback);
}