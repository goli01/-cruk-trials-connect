import { chromium, FullConfig } from '@playwright/test';
import login from '../utils/login';
import * as dotenv from 'dotenv';
dotenv.config();

const username = process.env.USERNAME ?? '';
const password = process.env.PASSWORD ?? '';
const url = process.env.URL ?? '';

async function globalSetup(config: FullConfig): Promise<void> {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await login(page, url as string, username, password);
  await page.context().storageState({ path: "./LoginAuth.json" });
  //await browser.close();
}

export default globalSetup;