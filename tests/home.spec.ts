import { test } from '@playwright/test';
import { navegateToHomePage } from '../page/homePage';

test('homepage has Playwright', async ({ page }) => {
    await navegateToHomePage(page)
})