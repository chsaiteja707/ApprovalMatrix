module.exports=(req,res,next)=>{
    if(!req.session.user_id){

        res.redirect('/login')
    }else{
        console.log(req.session.user_id);
        console.log('validated')
        next();
    }
}