// load model
const model = require('./model');

// use model's find function to implement findAllMovies
const findAllMovies = () => model.find();

// implement function to remove a movie given its ID
const deleteMovie = (id) =>
    model.removeOne({_id: id});

// implement function to insert a movie into the database
const createMovie = (movie) =>
    model.create(movie);

// implement findMovieById to
// use model's findById to retrieve document by primary key
const findMovieById = (id) =>
    model.findById(id);

const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});



// export as an API to use in service
module.exports = {
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie



};

