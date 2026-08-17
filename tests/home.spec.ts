import { test } from '@playwright/test';
import { Taskpage } from './support/page/taskPage/index';


test('homepage has Playwright', async ({ page }) => {
    const taskpage: Taskpage = new Taskpage(page)
    await taskpage.navegateToHomePage(page)
})