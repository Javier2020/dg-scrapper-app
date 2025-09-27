const cheerio = require('cheerio');

module.exports = function parseCoupons(html) {
  const $ = cheerio.load(html);
  const coupons = [];

  $('.coupon-card').each((_, el) => {
    const title = $(el).find('.coupon-title').text().trim();
    const details = $(el).find('.coupon-description').text().trim();
    const expiration = $(el).find('.coupon-expiration').text().trim();
    coupons.push({ title, details, expiration });
  });

  return coupons;
};
