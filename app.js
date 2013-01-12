var express = require('express');
var app = express();


app.configure(function(){
	app.use(express.bodyParser());
});

/**
 * Return the fibonacci of num
 * Fibonacci series is defined by F(n) = F(n-1) + F(n-2); F(0)=0; F(1)=1
 * @param num index of the number we want in the fibonacci series
 */
function fibonacci (num) {
	switch (num){
		case 0:
			return 0;
			break;
		case 1:
			return 1;
			break;
		default:
			return fibonacci(num-1) + fibonacci(num-2);
			break;
	}
}


app.get('/fibonacci', function(req, res){
	console.log(new Date() + " : request fibonacci of "+req.query["number"])
	var number = parseInt(req.query["number"]);
	var fibo = fibonacci(number);
	res.send(200, fibo.toString());
});

app.listen(3000);
console.log('Listening on port 3000');