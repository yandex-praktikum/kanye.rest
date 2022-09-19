const router = require('express').Router();
const { getQuoteAsJson, getTextQuote } = require('../controllers/quotes');

router.get('/', (_, res) => res.send(getQuoteAsJson()));

router.get('/text', (_, res) => res.send(getTextQuote()));

router.use('*', (_, res) => res.status(404).json({
  message: 'Unknown entrypoint.',
}));

module.exports = router;
