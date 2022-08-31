// REQUIRE DEPENDENCIES
const express = require('express');
const drinks = require("./models/drinks");
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



app.get("/drinks/:indexOfFruitsArray", (req, res) => {
 res.send(drinks[req.params.indexOfDrinksArray])
});

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`Listening... `, port)
});