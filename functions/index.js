const functions = require('firebase-functions');
const scrapeCoupons = require('./scrapeCoupons');

exports.api = functions.https.onRequest(async (req, res) => {
  if (req.path === '/coupons') {
    const coupons = await scrapeCoupons();
    res.json(coupons);
  } else {
    res.status(404).send('Not found');
  }
});
