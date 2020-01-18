import { newE2EPage } from '@stencil/core/testing';

describe('mat-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-slider></mat-slider>');

    const element = await page.find('mat-slider');
    expect(element).toHaveClass('hydrated');
  });
});
