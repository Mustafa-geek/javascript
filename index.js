// npm init
// npm i cowsay
const Quote = require('inspirational-quotes');

//console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false })); // return quote without author
const a = Quote.getRandomQuote(); // return any random quote
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : a,
    e : "pp",
    T : "pp "
}));

















