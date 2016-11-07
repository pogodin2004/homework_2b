var express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( (req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req,res)=>{
	var str = req.query.fullname;
	str = str.toLowerCase();
	var arr = str.split(' ');
	arr = arr.filter(el=>el);
	arr.forEach((e,i,a)=>{a[i]=e[0].toUpperCase()+e.slice(1)});
	if(arr.length >3 || req.query.fullname=="" || !(/^[^\d_\\\/]+$/.test(str))) res.end('Invalid fullname');
	if(arr.length == 1) res.end(arr[arr.length-1]);
	res.end([arr[arr.length-1]].concat(arr.slice(0,arr.length-1).map(el=>el.slice(0,1)+".")).join(" "))
})

app.listen(3000, () =>{
	console.log('Ready? Go!!!');
});

