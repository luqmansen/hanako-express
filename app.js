require('dotenv').config();
const port = (process.env.PORT || 3000)
const mongo_url = process.env.MONGODB_URI

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())


var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(mongo_url);
var db = mongoose.connection;

Anime = require('./models/anime');

app.get('/', function(req, res){
    res.send('Henlo, please use /api');
});

app.get('/api/animes', function(req, res){
    Anime.getAnimes(function(err, animes){
        if(err){throw err;}
        res.json(animes);
    });
});

app.get('/api/anime/:_id', function(req, res){
    Anime.getAnimeById(req.params._id, function(err, anime){
        if(err){throw err;}
        res.json(anime);
    });
});

app.post('/api/anime/', function(req, res){
    var anime = req.body;
    Anime.addAnime(anime, function(err, anime){
        if(err){
            res.json(err);
        } else{
            res.json(anime);
        }
    });
});


app.put('/api/anime/:_id', function(req, res){
    var id = req.params._id;
    var anime = req.body;
    Anime.updateAnime(id, anime,{}, function(err, anime){
        if(err){
            res.json(err);
        } else{
            res.json(anime);
        }
    });
});


app.delete('/api/anime/:_id', function(req, res){
    var id = req.params._id;
    Anime.deleteAnime(id, function(err, anime){
        if(err){
            res.json(err);
        } else{
            res.json(anime);
        }
    });
});



app.listen(port);
console.log('running on port ' + port);
