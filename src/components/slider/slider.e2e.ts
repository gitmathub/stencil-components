import { newE2EPage } from '@stencil/core/testing';
import pptrFirefox from 'puppeteer-firefox';

describe('mat-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-slider></mat-slider>');
    const element = await page.find('mat-slider');
    expect(element).toHaveClass('hydrated');
  });

  // testing... does this test make sense?
  it(' has\'t changed the snapshot', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-slider></mat-slider>');
    const results = await page.compareScreenshot('Snaphot of intial state', { fullPage: false });
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 0.2 })
  });


});

describe('screenshots', () => {
  // this is not really a test
  it('has created a Firefox snapshot', async () => {
    const browser = await pptrFirefox.launch();
    const page = await browser.newPage();
    page
    await page.goto('http://localhost:3333'); // expects dev server to run
    const screenshot = await page.screenshot({ path: 'screenshot/images/firefox.png' });
    expect(screenshot).toBeDefined()
    await browser.close();
  });

})
