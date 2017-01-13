var fs = require("fs"); 
var f1 = fs.readFileSync('access2.log', 'utf8'); 
pattern = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/ig 
ips = f1.match(pattern); 
var unique = {}; 
for (var i in ips) { 
if (ips[i] in original) { 
original[ips[i]] += 1; 
} 
else original[ips[i]] = 1; 
} 
var keys = Object.keys(original); 
keys.sort(); 
var network = ""; 
for (var i in keys) { 
pattern=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i 
var netnew = keys[i].match(pattern); 
if (netnew[0] != network) { 
console.log('---'); 
console.log(netnew[0]); 
network = netnew[0]; 
} 
console.log(keys[i], "-", original[keys[i]]); 
}