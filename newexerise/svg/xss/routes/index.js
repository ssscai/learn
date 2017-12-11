var express = require('express');
var router = express.Router();


var comments={

}
function html_enoode(str){
  var s='';
  if(str.length==0) return ""
  s=str.replace(/&/g,"&gt;");
  return s;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.set('X-XSS-Protection',0)
  res.render('index', { title: 'Express',xss:req.query.xss });
});
router.get('/comment',function(req,res,next){
  comments.v=html_enoode(res.query.comment);
})
router.get('/getComment',function(req,res,next){
  res.json({
    comment:comments.v
  })
})
module.exports = router;
