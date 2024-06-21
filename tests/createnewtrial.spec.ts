import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
import {CreateNewTrialSelectors} from "../selectors/selectors.json";
import { stringify } from 'querystring';
import { TIMEOUT } from 'dns';
//const url = process.env.URL ?? '';

test.only("create new trial", async ({ page }) => {
    //let url = process.env.URL ?? '';
   // await page.goto('url');
    await page.goto('https://test-trialsconnect.crm11.dynamics.com/');
    await expect(page.getByText('Active Trials')).toBeVisible();
    await page.locator((CreateNewTrialSelectors.NewTrialSelector)).click();
    await page.locator(CreateNewTrialSelectors.TrialTitleSelector).click();
    await page.locator(CreateNewTrialSelectors.TrialTitleSelector).fill('sample test');
    await page.locator(CreateNewTrialSelectors.ProtocolStatusSelector);    
});