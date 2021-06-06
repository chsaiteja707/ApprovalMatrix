const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();

const appRoutes=require('./routes/appRoutes');

const app=express();

app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(appRoutes);

app.listen(process.env.APPLICATION_PORT,()=>{
    console.log('listening on '+process.env.APPLICATION_PORT)
})