import { expect } from '@playwright/test';

export const prospectAndCompaniesBtn = 'a:nth-child(4) > img';
export const prospectAndCompaniesUrl = 'https://app.heyreach.io/app/prospects';
export const prospectAndCompaniesHeaderPath = '.text-dark';
export const prospectAndCompaniesHeaderText = 'Prospects & Companies';

export const clickOnProspectAndCompanies = async ({ page }) => {
    await page.locator(prospectAndCompaniesBtn).click();
    await page.waitForURL(prospectAndCompaniesUrl);
    await expect(page.locator(prospectAndCompaniesHeaderPath)).toHaveText(prospectAndCompaniesHeaderText);
    await page.waitForTimeout(3000);
};
