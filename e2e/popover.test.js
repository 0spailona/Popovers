import puppetteer from 'puppeteer';


jest.setTimeout(30000);

describe('check popover buttons', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });


  test('load page', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('#root')
  })

  test('show popover after click on button First', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('#root')
    const btn = await page.$('.btnFirst')
    await btn.click();
    await page.locator('.popover').wait();
    await btn.click();
    await page.waitForFunction(() => !document.querySelector('.popover'));
  })

  test('show popover after click on button Second', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('#root')
    const btn = await page.$('.btnSecond')
    await btn.click();
    await page.locator('.popover').wait();
    await btn.click();
    await page.waitForFunction(() => !document.querySelector('.popover'));
  })

  afterAll(async () => {
    await browser.close();
  });

})
