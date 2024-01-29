import { expect } from '@playwright/test';
export const heyReachTitle = '10x your LinkedIn outreach without scaling your team | HeyReach';
export const loginBtn = 'a.btn-base._1.w-button';
export const dashboardPath = '.module-header > h3 > span';
export const expectedTitle = 'ArkCase Application';
export const loginPageUrl = 'https://app.heyreach.io/account/login';
export const signInHeader = '.font-extrabold';
export const emailInput = '#email';
export const passwordInput = '#mat-input-1';
export const signInBtn = 'span.mdc-button__label > span';
export const dashboardUrl = 'https://app.heyreach.io/app/dashboard';
export const dashboardHeaderPath = '.text-2xl';
export const dashboardHeaderText = 'Dashboard';
export const invalidEmailMessagePath = 'div.alert-message.ng-tns-c92-3';
export const invalidEmailMessage = 'Invalid user name or password';
export const invalidPasswordMessagePath = 'div.alert-message.ng-tns-c92-4';
export const invalidPasswordMessage = 'The following errors were detected during validation. - The Password field is required.'
export const errorSignInMessagePath = 'div.alert-message.ng-tns-c92-3';
export const errorSignInMessage = 'Invalid user name or password';

// Valid login
export const successfulLogin = async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await expect(page).toHaveTitle(heyReachTitle);
    await page.locator(loginBtn).click();
    await page.waitForURL(loginPageUrl);
    await expect(page.locator(signInHeader)).toHaveText('Sign in');
    await page.locator(emailInput).fill(process.env.LOGIN_USER);
    await page.locator(passwordInput).fill(process.env.LOGIN_PASSWORD);
    await page.locator(signInBtn).click();
    await page.waitForURL(dashboardUrl);
    await expect(page.locator(dashboardHeaderPath)).toHaveText(dashboardHeaderText);
};

// Login with invalid username
export const invalidEmailLogin = async ({ page, username, password }) => {
    await page.goto(process.env.BASE_URL);
    await expect(page).toHaveTitle(heyReachTitle);
    await page.locator(loginBtn).click();
    await page.waitForURL(loginPageUrl);
    await expect(page.locator(signInHeader)).toHaveText('Sign in');
    await page.locator(emailInput).fill(username);
    await page.locator(passwordInput).fill(password);
    await page.locator(signInBtn).click();
    const errorMessage = await page.locator(errorSignInMessagePath).innerText();
    expect(errorMessage).toBe(errorSignInMessage);
};
// Login with invalid password
export const invalidPasswordLogin = async ({ page, username, password }) => {
    await page.goto(process.env.BASE_URL);
    await expect(page).toHaveTitle(heyReachTitle);
    await page.locator(loginBtn).click();
    await page.waitForURL(loginPageUrl);
    await expect(page.locator(signInHeader)).toHaveText('Sign in');
    await page.locator(emailInput).fill(username);
    await page.locator(passwordInput).fill(password);
    await page.locator(signInBtn).click();
    const errorMessage = await page.locator(errorSignInMessagePath).innerText();
    expect(errorMessage).toBe(errorSignInMessage);
};