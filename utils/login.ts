import { Page } from '@playwright/test';

async function login(
  page: Page,
  url: string,
  username: string,
  password: string,

): Promise<void> {
  await page.goto(url);
  await page.locator('[type="email"]').fill(username); 
  await page.locator('[type="submit"]').click(); 
  await page.locator('[type="password"]').fill(password); 
  await page.locator('[type="submit"]').click();
  await page.locator('[type="submit"]').click();
}

export default login;