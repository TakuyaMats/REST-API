const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/db.json';

    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/recipes', (req, res) => {
        readFile(data => {
            console.log(data.recipes.name);
            res.send(data);
        }, true);
    });

    app.put('/:recipes', (req, res) => {
        readFile(data => {
            const recipeName = req.params['recipes'];
            const recipes = data.recipes
            for (let i = 0; i < recipes.length; i++) {
                if(recipes[i].name === recipeName){
                    recipes[i] = req.body;
                }
            }
            console.log(data);
            writeFile(JSON.stringify(data), () => {
                res.status(200).send(`recipe: ${recipeName} updated`)
            });
        }, true);
    })
};

module.exports = userRoutes;