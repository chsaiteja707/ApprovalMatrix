const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');


require('dotenv').config();

const appRoutes=require('./routes/appRoutes');

const app=express();

app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));
app.use(cookieParser('boomboomchao'));
app.use(session({secret:"secsession",resave:false,saveUninitialized:false}));

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(email==='a@a.com'){
        req.session.user_id=email;
        res.redirect('/');
    }else{
        res.render('login');
    }
})

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    } else{
        req.session.count=1;
    }
    res.send('viewed this page : '+req.session.count)
})

app.get('/signed',(req,res)=>{
    res.cookie('name','chellubo',{signed:true});
    res.send('hai hello')
})

app.get('/verify',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})
app.use(appRoutes);

app.get('*',(req,res,next)=>{
    res.render('404');
})





app.listen(process.env.APPLICATION_PORT,()=>{
    console.log('listening on '+process.env.APPLICATION_PORT)
})