const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// const jsonData = require('./db.json');

const app = express();
// const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});

// const readFile = (
//     callback,
//     returnJson = false,
//     filePath = jsonData,
//     encoding = 'utf8'
// ) => {
//     fs.readFile(filePath, encoding, (err, jsonData) => {
//         if (err) {
//             throw err;
//         }

//         callback(returnJson ? JSON.parse(jsonData) : jsonData);
//     });
// };

// const writeFile = (
//     fileData,
//     callback,
//     filePath = jsonData,
//     encoding = 'utf8'
// ) => {
//     fs.writeFile(filePath, fileData, encoding, err => {
//         if (err) {
//             throw err;
//         }

//         callback();
//     });
// };

// app.get('/recipes', (req, res) => {
//     readFile(jsonData => {
//         res.send(jsonData);
//     }, true);
// });



// // GET request to get the whole json object
// // app.get('/recipes', (req, res) => res.json(jsonData));

// GET request that returns all recipe names.
app.get('/names', (req, res) => {
    let obj = [];

    for (let i = 0; i < jsonData.recipes.length; i++) {
        let length = jsonData.recipes[i].name
        obj.push(length)
    }
    res.json({
        "recipeName ": obj
    })
})

// // GET request that takes a recipe name as a string param.
// app.get('/recipes/details/:name', (req, res) => {
//     const ingredients = req.params.name;

//     for (let i = 0; i < jsonData.recipes.length; i++) {
//         if (ingredients === jsonData.recipes[i].name) {
//             let ingredientsLength = jsonData.recipes[i].ingredients.length
//             return res.json({
//                 "details": {
//                     "ingredients": jsonData.recipes[i].ingredients
//                 },
//                 "numSteps": ingredientsLength
//             });
//         }
//     }

//     return res.json({})
// });

// // POST request that can add additional recipes
// app.post('/recipes', (req, res) => {
//     const newRecipe = req.body;
//     let recipesArr = jsonData.recipes
//     recipesArr.push(newRecipe);
//     res.json(recipesArr);
// });

// // PUT request that can update existing recipes
// // maybe need a for loop like I did in the string param?
// app.put('/:recipes', function (req, res) {

// });



// // PORT listen
// app.listen(PORT, () => {
//     console.log(`server is running on port: ${PORT}`);
// });