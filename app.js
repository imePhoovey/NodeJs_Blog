//应用程序的启动入口文件
 
//加载express模块
var express = require('express');
//创建app应用,相当于nodeJS的http.createService()
var app = express();

var swig = require('swig');

app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});

app.use('/public',express.static(__dirname+'/public'));

/**
 * [description] 给app绑定首页路由，把一个url路径通过一个或多个方法绑定
 * @param  {[type]} req       request对象，保存客户端请求相关的一些数据
 * @param  {[type]} res       response对象
 * @param  {[type]} next      函数,用于执行下一个和当前路径匹配的函数
 * @return {[type]}           [description]
 */
app.get('/',function(req,res,next){
	//res.send(string)发送内容直客户端
	res.render('index');
})

app.get('/main.css',function(req,res,next){
	res.setHeader('content-type','text/css');
	res.send("body {color:red}");
});

//监听http请求
app.listen(8081);
