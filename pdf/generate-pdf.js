const puppeteer = require('puppeteer');
(async () => {
 // launch and create a new page
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 // go to page in resumeonly mode, wait for any network events to settle
 await page.goto("http://localhost:3000?resumeonly=true", {
  waitUntil: "networkidle2"
 });
 // output to a local file
 await page.pdf({
  path: "resume.pdf",
  format: "Letter",
  printBackground: true
 });
 // close
 await browser.close();
})();