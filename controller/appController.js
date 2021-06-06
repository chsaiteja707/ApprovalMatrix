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