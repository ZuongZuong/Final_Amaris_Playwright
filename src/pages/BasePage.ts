import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  setPage(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: 'load' });
  }

  async click(selector: string | Locator) {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    await locator.click();
  }

  async fill(selector: string | Locator, text: string) {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    await locator.fill(text);
  }

  async waitForElement(selector: string | Locator) {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    await locator.waitFor({ state: 'visible' });
  }

  async openNewTab(clickLocator: string | Locator) {
    const locator = typeof clickLocator === 'string' ? this.page.locator(clickLocator) : clickLocator;
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      locator.first().click()
    ]);

    await newPage.waitForLoadState('load');
    return newPage;
  }
}
