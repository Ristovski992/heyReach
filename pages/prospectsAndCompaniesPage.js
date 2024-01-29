import { expect } from '@playwright/test';
import { getRandomNumberSpecifiedAsString } from '../helpers/commonFunctions';
import { prospectAndCompaniesBtn } from './dashboardPage';

// Locators
export const prospectsListsLink = 'ul > li:nth-child(1)';
export const selectedMethodHeaderPath = 'div > h1';
export const selectedMethodHeaderText = 'Import from LinkedIn search bar';
export const importFromLinkedlnSearchBarUrl = 'https://app.heyreach.io/app/generate-prospects?listType=0';
export const listNameField = '[placeholder="Enter your list name"]';
export const searchAccountField = '//*/span/ngx-mat-select-search/div/div/input';
export const startImportingBtn = '.mt-6 > div';
export const selectAccountCheckbox = '[role="option"]:nth-child(2) > mat-pseudo-checkbox';
export const enterSearchUrlInput = '[placeholder="Enter search URL"]';
export const linkedinSearchResultUrl = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103420483%22%5D&keywords=QA&network=%5B%22F%22%5D&origin=FACETED_SEARCH&pastCompany=%5B%2234400%22%5D&sid=9IY';
export const progressBar = 'progress-bar > div';
export const prospectTitlePath = '.my-3 > span';
export const stopImportingBtn = '.mx-2';
export const nameHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(1)';
export const headlineHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(2)';
export const emailHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(3)';
export const jobTitleHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(4)';
export const companyHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(5)';
export const locationHeader = 'linkedin-reusable-user-list >div > div > span > span:nth-child(6)';
export const prospectAndCompaniesListTable = 'tbody > tr:nth-child(1) > td:nth-child(1) > div > div > div > div';

// Values
export const listNameValue = 'Extract From Url ' + await getRandomNumberSpecifiedAsString(3);

// Import from LinkedIn search bar
// Extract from URL option
export const addNewProspectExtractFromUrl = async ({ page }) => {
    // Navigating to prospects list link
    await page.locator(prospectsListsLink).click();
    // Clicking on "Add new prospects" button
    await page.getByRole('button', { name: 'Add new prospects' }).click();
    // Selecting "LinkedIn Search Bar" option
    await page.getByText('LinkedIn Search Bar', { exact: true }).click();
    // Verifying the selected method header
    await expect(page.locator(selectedMethodHeaderPath)).toHaveText(selectedMethodHeaderText);
    // Clicking on "Continue" button
    await page.getByRole('button', { name: 'Continue' }).click();
    // Verifying the selected method header again
    await expect(page.locator(selectedMethodHeaderPath)).toHaveText(selectedMethodHeaderText);
    // Waiting for the URL to match the expected import URL
    await page.waitForURL(importFromLinkedlnSearchBarUrl);
    // Filling the list name field
    await page.locator(listNameField).fill(listNameValue);
    // Selecting accounts and checking the checkbox
    await page.getByLabel('Select accounts').locator('div').first().click();
    await page.locator(selectAccountCheckbox).click();
    await page.keyboard.press('Escape');
    // Filling the search URL input
    await page.locator(enterSearchUrlInput).fill(linkedinSearchResultUrl);
    await page.waitForTimeout(1000);
    // Verifying that the start importing button is enabled
    await expect(page.locator(startImportingBtn)).toBeEnabled();
    // Clicking on the start importing button
    await page.locator(startImportingBtn).click();
    // Verifying that the "Search started!" message is visible
    await expect(page.getByText('Search started!')).toBeVisible();
    // Verifying the visibility of progress bar, stop importing button, and hiding stop importing button
    await expect(page.locator(progressBar)).toBeVisible();
    await expect(page.locator(stopImportingBtn)).toBeVisible();
    await expect(page.locator(stopImportingBtn)).toBeHidden();
    // Verifying that the list name entered in the form before starting the importing process is the same
    await expect(page.locator(prospectTitlePath)).toHaveText(listNameValue);
    // Verifying the visibility of various headers
    await expect(page.locator(nameHeader)).toBeVisible();
    await expect(page.locator(headlineHeader)).toBeVisible();
    await expect(page.locator(emailHeader)).toBeVisible();
    await expect(page.locator(jobTitleHeader)).toBeVisible();
    await expect(page.locator(companyHeader)).toBeVisible();
    await expect(page.locator(locationHeader)).toBeVisible();
    // Clicking on the "Prospect and Companies" button
    await page.locator(prospectAndCompaniesBtn).click();
    // Verifying that the new prospect list is added to the prospect list table
    await expect(page.locator(prospectAndCompaniesListTable)).toHaveText(listNameValue);
};
