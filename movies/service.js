const dao = require('./dao')

module.exports = (app) => {

    const findAllMovies = (req, res) =>
        dao.findAllMovies()
            .then(movies => res.json(movies));


    // create an HTTP DELETE endpoint mapped to URL pattern /rest/movies/:id
    // that uses the deleteMovie DAO function to remove a movie
    const deleteMovie = (req, res) =>
        dao.deleteMovie(req.params.id)
            .then((status) => res.send(status));

    const createMovie = (req, res) =>
        dao.createMovie(req.body)
            .then((insertedMovie) => res.json(insertedMovie));

    const findMovieById = (req, res) =>
        dao.findMovieById(req.params.id)
            .then(movie => res.json(movie));

    const updateMovie = (req, res) =>
        dao.updateMovie(req.params.id, req.body)
            .then(status => res.send(status));


    // register HTTP DELETE request handler
    app.get("/rest/movies", findAllMovies); // listen for HTTP GET and notify findAllMovies
    app.delete("/rest/movies/:id", deleteMovie);
    app.post("/rest/movies", createMovie);
    app.get("/rest/movies/:id", findMovieById);
    app.put("/rest/movies/:id", updateMovie);
}

