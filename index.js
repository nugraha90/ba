const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('http://bapenda.bekasikota.go.id/slot-gacor/', {waitUntil: 'networkidle2'});

    const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    let resQuery = data.toLowerCase()

    const substrings = ["slot"];
    let str;

    // Try it where we expect a match
    str = resQuery
    if (substrings.some(v => str.includes(v))) {
        console.log('match');
    } else {
       console.log('No match');
    }
    // console.log(resQuery)
    await browser.close();
})()
