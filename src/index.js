const Path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const dynamic = Path.join(__dirname,'../public/views');
const partial = Path.join(__dirname,'../public/partials');

app.set('view engine','hbs');
app.set('views',dynamic);
hbs.registerPartials(partial);

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('/about',(req,res)=>{
      res.render('about');
});

app.listen(port,'localhost',()=>{
    console.log(`App is serving on Port no.${port}`);
});