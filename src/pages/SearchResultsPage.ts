import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {

    // ===== Locators =====
    private readonly locators = {
        hotelList: () => '[data-selenium="hotel-name"]',
        // firstHotel: () => '[data-selenium="hotel-name"]',
        // priceLabel: () => '[data-selenium="pd-price"]', // Or similar

    };

    constructor(page: Page) {
        super(page);
    }

    // ===== Actions =====

    async selectHotel(hotelName: string) {
        await this.page.waitForSelector(this.locators.hotelList(), { state: 'visible' });
        const hotelLocator = this.page.locator(this.locators.hotelList()).filter({ hasText: hotelName });
        return await this.openNewTab(hotelLocator);
    }

    // ===== Assertions =====

}
