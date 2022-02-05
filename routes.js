var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    
    res.render("index");
});

router.get("/home", function(req,res){
    res.render("home");
});

router.get("/about", function(req,res){
    res.render("about");
});

router.get("/login", function(req,res){
    res.render("login");
});
module.exports = router;