import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HotelDetailsPage extends BasePage {

    // ===== Locators =====
    private readonly locators = {
        hotelName: () => '[data-selenium="hotel-header-name"]',
        priceLabel: () => '#hotelNavBar [data-element-name="cheapest-room-price-property-nav-bar"]',
    };

    constructor(page: Page) {
        super(page);
    }

    // ===== Actions =====

    // ===== Assertions =====
    async expectHotelPriceToBeVisible() {
        await expect(this.page.locator(this.locators.priceLabel()).first()).toBeVisible({ timeout: 10000 });
    }

    async expectHotelNameToBeVisible() {
        await expect(this.page.locator(this.locators.hotelName()).first()).toBeVisible({ timeout: 10000 });
    }
}
