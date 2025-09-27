const puppeteer = require('puppeteer');
const parseCoupons = require('./utils/parseCoupons');

module.exports = async function scrapeCoupons() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.dollargeneral.com/coupons.html', { waitUntil: 'networkidle2' });

  const html = await page.content();
  const coupons = parseCoupons(html);

  await browser.close();
  return coupons;
};
