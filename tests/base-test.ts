import { test as base } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { SearchResultsPage } from '../src/pages/SearchResultsPage';
import { HotelDetailsPage } from '../src/pages/HotelDetailsPage';

// Define the types for our fixtures
export type MyFixtures = {
    homePage: HomePage;
    searchResultsPage: SearchResultsPage;
    hotelDetailsPage: HotelDetailsPage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    searchResultsPage: async ({ page }, use) => {
        const searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },
    hotelDetailsPage: async ({ page }, use) => {
        const hotelDetailsPage = new HotelDetailsPage(page);
        await use(hotelDetailsPage);
    },
});

export { expect } from '@playwright/test';
