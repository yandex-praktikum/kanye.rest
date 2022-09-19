const quotes = require('../quotes.json');

function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

function getTextQuote() {
  return getRandomQuote();
}

function getQuoteAsJson() {
  return { quote: getRandomQuote() };
}

module.exports = {
  getTextQuote,
  getQuoteAsJson,
};
