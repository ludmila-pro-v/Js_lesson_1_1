var p = 33721;

var a = (p - p % 10) / 10;
var b = (a - a % 10) / 10;
var c = (b - b % 10) / 10;
var d = (c - c % 10) / 10;
var e = (p % 10) * (a % 10) * (b % 10) * (c % 10) * d;

console.log(e);

f = e ** 3;

console.log(f)