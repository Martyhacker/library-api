var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

//Post
module.exports.addGenre = function(genre, callback){
    Genre.create(genre,callback);
}

//Update
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {name: genre.name};
    Genre.findOneAndUpdate(query, update, options ,callback);
}

//Delete
module.exports.deleteGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query,callback);
}