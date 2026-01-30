# Amaris Test Automation Framework

A robust and scalable UI test automation framework built with **Playwright** and **TypeScript** for testing the Agoda hotel booking platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Framework Architecture](#framework-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Framework Features](#framework-features)
- [Page Object Model](#page-object-model)
- [Utilities](#utilities)
- [Test Data](#test-data)
- [Configuration](#configuration)
- [Reporting](#reporting)
- [Best Practices](#best-practices)

## 🎯 Overview

This framework is designed with a focus on:

- **Code Structure**: Clean, modular, and organized architecture
- **Readability**: Self-documenting code with clear naming conventions
- **Maintainability**: Easy to update and extend
- **Scalability**: Supports growing test suites
- **Efficiency**: Optimized test execution with proper waits and synchronization
- **Reliability**: Handles dynamic web elements and multi-tab scenarios

## 🏗️ Framework Architecture

The framework follows the **Page Object Model (POM)** design pattern with **Playwright Fixtures** for dependency injection, ensuring:

- Separation of test logic from page interactions
- Reusable page components
- Easy maintenance and updates
- Type-safe implementations with TypeScript

## 🛠️ Tech Stack

- **Test Framework**: [Playwright](https://playwright.dev/) v1.58.0
- **Language**: TypeScript
- **Package Manager**: npm
- **Date Handling**: date-fns v4.1.0
- **Node Version**: Compatible with Node.js LTS

## 📁 Project Structure

```
amaris-test-automation/
├── src/
│   ├── pages/                    # Page Object Models
│   │   ├── BasePage.ts          # Base class with common methods
│   │   ├── HomePage.ts          # Agoda home page interactions
│   │   ├── SearchResultsPage.ts # Search results page interactions
│   │   └── HotelDetailsPage.ts  # Hotel details page interactions
│   └── utils/                    # Utility classes
│       ├── DateUtils.ts         # Date manipulation utilities
│       └── RandomUtils.ts       # Random data generation utilities
├── tests/
│   ├── base-test.ts             # Playwright fixtures configuration
│   └── agoda-fixture.spec.ts    # Test specifications
├── data/
│   └── testData.json            # Test data storage
├── test-results/                # Test execution results
├── playwright-report/           # HTML test reports
├── playwright.config.ts         # Playwright configuration
├── package.json                 # Project dependencies
└── .gitignore                   # Git ignore rules
```

## 📦 Installation

### Prerequisites

- Node.js (LTS version recommended)
 
- npm


### Setup Steps

1. **Download and install Node.js**
   - Go to the official website: https://nodejs.org  
   - Download the **LTS (Long Term Support)** version  
   - Install using default settings  

   Verify installation:

   ```bash
   node -v
   npm -v
   ```
2. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd amaris-test-automation
   ```

3. **Download node version** (Optional)

> ⚠️ This step is required **only when creating the project for the first time**.

   Run the following command:

   ```bash
   npm init playwright@latest
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```
   
5. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

## 🚀 Running Tests

### Available Commands

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# View test report
npm run test:report

# Open trace viewer
npm run trace:open
```

### Direct Playwright Commands

```bash
# Run specific test file
npx playwright test tests/agoda-fixture.spec.ts

# Run tests on specific browser
npx playwright test --project=chromium

# Run tests in debug mode
npx playwright test --debug

# Run tests with specific workers
npx playwright test --workers=2
```

## ✨ Framework Features

### 1. **Page Object Model (POM)**

All page interactions are encapsulated in dedicated page classes:

- `BasePage`: Common methods shared across all pages
- `HomePage`: Agoda home page specific actions
- `SearchResultsPage`: Search results handling
- `HotelDetailsPage`: Hotel details verification

### 2. **Playwright Fixtures**

Custom fixtures defined in `base-test.ts` provide:

- Automatic page object initialization
- Dependency injection
- Cleaner test code
- Better test isolation

### 3. **Multi-Tab Handling**

The framework intelligently handles scenarios where:

- New browser tabs are opened (e.g., hotel details)
- Page context needs to be switched
- Multiple pages need to be managed simultaneously

### 4. **Smart Waits**

- Automatic waiting for elements to be visible
- Proper synchronization with page loads
- Timeout configurations for stability

### 5. **Comprehensive Reporting**

- HTML reports with screenshots
- Video recordings of test execution
- Trace files for debugging
- Detailed error context

## 📄 Page Object Model

### BasePage

Base class providing common functionality:

```typescript
- navigateTo(url: string)           // Navigate to URL
- click(selector)                   // Click element
- fill(selector, text)              // Fill input field
- waitForElement(selector)          // Wait for element
- openNewTab(clickLocator)          // Handle new tab opening
- setPage(page)                     // Switch page context
```

### HomePage

Agoda home page interactions:

```typescript
- searchHotel(hotelName)            // Search for hotel
- selectDates(date)                 // Select check-in/out dates
- increaseAdult(number)             // Increase adult count
- increaseChild(number)             // Increase child count
- addChildrenAge(ages[])            // Set children ages
- clickSearch()                     // Submit search
```

### SearchResultsPage

Search results handling:

```typescript
- selectHotel(hotelName)            // Select hotel from results
```

### HotelDetailsPage

Hotel details verification:

```typescript
- expectHotelNameToBeVisible()      // Verify hotel name
- expectHotelPriceToBeVisible()     // Verify price display
```

## 🔧 Utilities

### DateUtils

Date manipulation utilities:

```typescript
- getDateWithOffset(days)           // Get date with offset
- convertDateFormat(dateStr)        // Convert date format
- getMonthName(monthNumber)         // Get month name
- getMonthNumber(monthName)         // Get month number
```

### RandomUtils

Random data generation:

```typescript
- randomAge()                       // Generate random child age (1-7)
```

## 📊 Test Data

Test data is stored in `data/testData.json` for easy maintenance:

```json
{
  "destination": "Muong Thanh Saigon Centre Hotel",
  "checkInDays": 2,
  "checkOutDays": 3,
  "rooms": 1,
  "adults": 4,
  "children": 2
}
```

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

Key settings:

- **Base URL**: <https://www.agoda.com/>
- **Timeout**: 60 seconds
- **Parallel Execution**: Enabled
- **Trace**: Always on
- **Screenshots**: Enabled on failure
- **Video**: Recorded for all tests
- **Viewport**: 1280x720

### Browser Configuration

Currently configured for:

- ✅ Chromium (Desktop Chrome)

## 📈 Reporting

### HTML Report

After test execution, view the HTML report:

```bash
npm run test:report
```

The report includes:

- Test execution summary
- Pass/fail status
- Screenshots on failure
- Video recordings
- Execution timeline

### Trace Viewer

For detailed debugging:

```bash
npx playwright show-trace test-results/<test-name>/trace.zip
```

## 🎯 Best Practices

### 1. **Locator Strategy**

- Prefer `data-selenium` and `data-element-name` attributes
- Use stable, unique selectors
- Avoid XPath when possible

### 2. **Test Organization**

- One test file per feature/flow
- Use descriptive test names
- Group related tests with `test.describe()`

### 3. **Assertions**

- Use Playwright's built-in assertions
- Set appropriate timeouts
- Verify expected states explicitly

### 4. **Code Quality**

- Follow TypeScript best practices
- Use async/await consistently
- Handle errors gracefully
- Keep methods focused and single-purpose

### 5. **Maintenance**

- Update locators when UI changes
- Keep test data separate from test logic
- Document complex interactions
- Regular dependency updates

## 🔍 Example Test Flow

```typescript
test('should search for a hotel successfully', async ({ 
  homePage, 
  searchResultsPage, 
  hotelDetailsPage 
}) => {
  // Navigate to home page
  await homePage.navigateTo('/');
  
  // Search for hotel
  await homePage.searchHotel('Muong Thanh Saigon Centre Hotel');
  
  // Select dates
  await homePage.selectDates(DateUtils.getDateWithOffset(2));
  await homePage.selectDates(DateUtils.getDateWithOffset(3));
  
  // Set occupancy
  await homePage.increaseAdult(2);
  await homePage.increaseChild(2);
  await homePage.addChildrenAge(['5', '7']);
  
  // Search
  await homePage.clickSearch();
  
  // Select hotel (opens new tab)
  const newTab = await searchResultsPage.selectHotel('Muong Thanh Saigon Centre Hotel');
  hotelDetailsPage.setPage(newTab);
  await newTab.bringToFront();
  
  // Verify hotel details
  await hotelDetailsPage.expectHotelNameToBeVisible();
  await hotelDetailsPage.expectHotelPriceToBeVisible();
});
```

## 🤝 Contributing

1. Follow the existing code structure
2. Write meaningful commit messages
3. Add tests for new features
4. Update documentation as needed

---

**Built with ❤️ using Playwright and TypeScript**
