import { test, expect } from './base-test';
import { DateUtils } from '../src/utils/DateUtils';
import { RandomUtils } from '../src/utils/RandomUtils';
import { fail } from 'node:assert';

test.describe('Agoda Search a hotel', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigateTo('/');
    });

    test('@Smoke should search for a hotel successfully', async ({ homePage, searchResultsPage, hotelDetailsPage }) => {
        // // 1. Set Destination
        await homePage.searchHotel('Muong Thanh Saigon Centre Hotel');

        await homePage.selectDates(DateUtils.getDateWithOffset(2));
        await homePage.selectDates(DateUtils.getDateWithOffset(3));

        await homePage.increaseAdult(2);
        await homePage.increaseChild(2);

        await homePage.addChildrenAge([RandomUtils.randomAge().toString(), RandomUtils.randomAge().toString()]);

        await homePage.clickSearch();

        const newTab = await searchResultsPage.selectHotel('Muong Thanh Saigon Centre Hotel');
        hotelDetailsPage.setPage(newTab);
        await newTab.bringToFront();

        await hotelDetailsPage.expectHotelNameToBeVisible();
        await hotelDetailsPage.expectHotelPriceToBeVisible();

    });
});