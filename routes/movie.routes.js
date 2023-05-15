// const { getAllMovies, getMovieBasedOnId, createMovie, updateMovie, deleteMovie } = require('../controller/movies.controller');
// const { validateMovieReqBody, verifyToken,isAdmin } = require('../middleware');
const{getAllMovies, getMovieBasedOnId} =require('../controller/movies.controller')
module.exports = (app) => {
    app.get('/mba/api/v1/movies',getAllMovies);  
    app.get('/mba/api/v1/movies/:id', getMovieBasedOnId); 
    // app.post('/mba/api/v1/movie',[verifyToken, isAdmin, validateMovieReqBody],createMovie); 
    // app.put('/mba/api/v1/movie/:id',[verifyToken, isAdmin, validateMovieReqBody], updateMovie);
    // app.delete('/mba/api/v1/movie/:id',[verifyToken, isAdmin], deleteMovie);
}