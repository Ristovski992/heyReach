import { test } from '@playwright/test';
import { successfulLogin, invalidEmailLogin, invalidPasswordLogin } from '../pages/loginPage';

test.afterEach(async ({ page }) => {
  await page.close();
})

test.describe('SuccessfulLogin', () => {
  test('HeyReach Login', async ({ page }) => {
    await successfulLogin({ page })
  });
});

test.describe('Negative Login Scenarios', () => {
  test('Invalid Email Login', async ({ page }) => {
    await invalidEmailLogin({ page, username: process.env.INVALID_USER, password: process.env.LOGIN_PASSWORD });
  });

  test('Invalid Password Login', async ({ page }) => {
    await invalidPasswordLogin({ page, username: process.env.LOGIN_USER, password: process.env.INVALID_PASSWORD });
  });
});