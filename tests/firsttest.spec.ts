import { test, expect } from "@playwright/test";

test.only("basic test", async ({ page }) => {
    await page.goto('https://test-trialsconnect.crm11.dynamics.com/');
    await expect(page.getByText('Active Trials')).toBeVisible();
    //await expect(page).toHaveTitle(/Active Trials/);
});