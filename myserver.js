var express = require('express');
var app = express();

app.set('view engine','jade');
var port = process.env.PORT || 2000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/legoProductDetails',(req,res)=>{
    res.render('legoProductDetails')
})

app.get('/magicCardsProductDetails',(req,res)=>{
    res.render('magicCardsProductDetails')
})

app.get('/marblesProductDetails',(req,res)=>{
    res.render('marblesProductDetails')
})

app.get('/robotsProductDetails',(req,res)=>{
    res.render('robotsProductDetails')
})

app.get('/stuffedToysProductDetails',(req,res)=>{
    res.render('stuffedToysProductDetails')
})

var server = app.listen(port,function() {});