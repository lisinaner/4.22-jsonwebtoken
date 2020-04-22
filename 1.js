var jwt = require("jsonwebtoken")
var a = jwt.sign({
	data: 'foobar'
}, 'token', { expiresIn: '1h' });
console.log(a)

var b = jwt.verify(a, "token")
console.log(b)