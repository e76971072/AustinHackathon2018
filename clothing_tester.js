var Clothing = require ("./clothing.js");

const red = new Clothing(255, 0, 0, 'shirt');
const teal = new Clothing(0, 255, 255, 'pants');
const lime = new Clothing(43, 255, 0, 'shirt');
console.log(red.complements(teal));
console.log(teal.complements(lime));
console.log(lime.complements(teal));

