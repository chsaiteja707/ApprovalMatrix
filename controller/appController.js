exports.homeController=(req,res,next)=>{
    res.render('home');
}

exports.approvalController=(req,res,next)=>{
    res.render('approvals');
}

exports.requestController=(req,res,next)=>{
    res.render('requests');
}

exports.applicationController=(req,res,next)=>{
    res.render('applications');
}

exports.logoutController=(req,res,next)=>{
    req.session.user_id=null;
    req.session.destroy(); //will destroy entire session objects if anything is there
    res.redirect('/');
}

exports.sendCookies=(req,res,next)=>{
    const {name='ahn'} = req.cookies;
    res.cookie('sai','chelluboina');
    res.send('hi hello,'+name);

}