import { test } from '@playwright/test';
import { successfulLogin } from '../pages/loginPage';
import { clickOnProspectAndCompanies } from '../pages/dashboardPage';
import { addNewProspectExtractFromUrl } from '../pages/prospectsAndCompaniesPage';

test.afterEach(async ({ page }) => {
    if (page) {
      await page.close();
    }
  });

test('Import prospects from LinkedIn search bar using the Extract from url option', async ({ page }) => {
    await successfulLogin({ page });
    await clickOnProspectAndCompanies({ page });
    await addNewProspectExtractFromUrl({ page });
});