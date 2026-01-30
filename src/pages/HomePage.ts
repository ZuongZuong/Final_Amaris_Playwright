import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { DateUtils } from '../utils/DateUtils';

export class HomePage extends BasePage {

    // ===== Locators =====
    private readonly locators = {
        inputHotelName: () => '[aria-controls="search-box-autocomplete-id"]',
        suggestionItem: (hotelName: string) => `[data-element-value="${hotelName}"]`,
        btnNextMonth: () => 'button[aria-label="Next Month"]',
        btnPreviousMonth: () => 'button[aria-label="Previous Month"]',
        spanDate: (date: string) => `span[data-selenium-date="${date}"]`,
        labelMonth: () => '.DayPicker-Caption',
        room: {
            increase: () => '[data-selenium="occupancyRooms"] button[data-selenium="plus"]',
            decrease: () => '[data-selenium="occupancyRooms"] button[data-selenium="minus"]',
        },
        adult: {
            increase: () => '[data-selenium="occupancyAdults"] button[data-selenium="plus"]',
            decrease: () => '[data-selenium="occupancyAdults"] button[data-selenium="minus"]',
        },
        child: {
            increase: () => '[data-selenium="occupancyChildren"] button[data-selenium="plus"]',
            decrease: () => '[data-selenium="occupancyChildren"] button[data-selenium="minus"]',
        },
        childList: () => '[data-element-name="occ-child-age-dropdown"]',
        childAgeList: (age: string) => `[data-testid="title"]`,
        btnSearch: () => '[data-element-name="search-button"]',
        checkinBox: () => '[data-selenium="checkInBox"]',

    };

    constructor(page: Page) {
        super(page);
    }


    // ===== Actions =====

    async searchHotel(hotelName: string) {
        await this.page.fill(this.locators.inputHotelName(), hotelName);
        await this.page.waitForSelector(this.locators.suggestionItem(hotelName));
        await this.page.click(this.locators.suggestionItem(hotelName));
    }

    async clickCheckinBox() {
        await this.page.click(this.locators.checkinBox());
    }

    async selectDates(date: string) {
        await this.page.waitForSelector(this.locators.labelMonth(), { state: 'visible' });

        await this.page.click(this.locators.spanDate(DateUtils.convertDateFormat(date)));

    }

    async increaseRoom(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.room.increase());
        }
    }

    async increaseAdult(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.adult.increase());
        }
    }

    async increaseChild(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.child.increase());
        }
    }

    async decreaseRoom(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.room.decrease());
        }
    }

    async decreaseAdult(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.adult.decrease());
        }
    }

    async decreaseChild(number: number) {
        for (let i = 0; i < number; i++) {
            await this.page.click(this.locators.child.decrease());
        }
    }

    async clickSearch() {
        await this.page.click(this.locators.btnSearch());
    }

    async addChildrenAge(ages: string[]) {
        for (let i = 0; i < ages.length; i++) {
            await this.page.click(this.locators.childList());
            await this.page.click(this.locators.childAgeList(ages[i]));
        }
    }

    // ===== Assertions =====

}
