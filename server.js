// REQUIRE DEPENDENCIES
const express = require('express');
const drinks = require("./models/drinks");
const food = require("./models/food");

// const fruits = require ("./models/fruits");
// // const veggies = require ("./models/fruit");


// INITIALIZE EXPRESS APP
const app = express();

const port = 3000;


// DEFINE OUR ROUTESno
// const fruits = [
//     {
//       name: "Mango",
//       color: "red",
//       readyToEat: true,
//     },
//     {
//       name: "Kiwi",
//       color: "green",
//       readyToEat: false,
//     },
//     {
//       name: "banana",
//       color: "yellow",
//       readyToEat: true,
//     },
// ];

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks, 
      })
    });


app.get("/drinks/:index", (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id]})
});


app.get("/food/", (req, res) => {
    res.render("food_index.ejs",  {
        allFood: food, 
      })
    });

    app.get("/food/:index", (req, res) => {
        res.render("food_show.ejs", {
            foods: food[req.params.id]})
    });
    


// app.get("/fruits/:indexOfFruitsArray", (req, res) => {
//     res.render("show.ejs", {
//       //second param must be an object
//       fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     })
//   })

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`Listening... `, port)
});