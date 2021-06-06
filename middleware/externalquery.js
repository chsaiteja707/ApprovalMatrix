const https=require('https')
module.exports=async (req,res,next)=>{
    https.get('https://jsonplaceholder.typicode.com/users',res=>{
        console.log(res.statusCode);
        console.log(res.headers );
        res.on('data',(data)=>{
            process.stdout.write(data);
                
        })
    }).on(err=>{
        console.log(err);
    })
}