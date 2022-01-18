const recipeRoutes = require('./recipe');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // run our user route module here to complete the wire up
    recipeRoutes(app, fs);
};

module.exports = appRouter;