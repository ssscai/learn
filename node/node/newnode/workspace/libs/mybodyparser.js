
const querystring=require('querystring');
function urlencoded(req,res,next){
    let str='';
    req.on('data',data=>{
        str+=data;
    })
    req.on('end',()=>{
        req.body=querystring.parse(str);
        next();
    })
}
module.exports=urlencoded;
// exports.urlencoded=function (req,res,next){
//     let str='';
//     req.on('data',data=>{
//         str+=data;
//     })
//     req.on('end',()=>{
//         req.body=querystring.parse(str);
//         next();
//     })
// }