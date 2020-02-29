var express     =require('express');
var app         =express();
var mongoose    = require("mongoose");

mongoose.connect("mongodb+srv://nkc:Nk@12345@cluster0-s7fou.mongodb.net/test?retryWrites=true&w=majority");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/",function(req,res){
res.render("home");
});
app.get("/html",function(req,res){
res.render("html");
});
app.get("/css",function(req,res){
res.render("css");
});
app.get("/javascript",function(req,res){
res.render("javascript");
});
app.get("/c_cpp",function(req,res){
res.render("c_cpp");
});
app.get("/python",function(req,res){
res.render("python");
});
app.get("/java",function(req,res){
res.render("java");
});
app.get("/sql",function(req,res){
res.render("sql");
});
app.get("/online",function(req,res){
res.render("online");
});
app.get("/offline",function(req,res){
res.render("offline");
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});