// REQUIRE DEPENDENCIES
const express = require('express');
const drinks = require("./models/drinks");
const food = require("./models/food");


// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;


// DEFINE OUR ROUTES
app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks, })
});


app.get("/drinks/:index", (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id]})
});


app.get("/food/", (req, res) => {
    res.render("food_index.ejs",  {
        allFood: food, })
});

app.get("/food/:index", (req, res) => {
    res.render("food_show.ejs", {
    foods: food[req.params.id]})
});
    
app.listen(port, () => {
    console.log(`Listening... `, port)
});