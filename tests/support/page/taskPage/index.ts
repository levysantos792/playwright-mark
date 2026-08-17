import { Page, expect } from '@playwright/test';
import { TaskPageElements } from './elements';
require('dotenv').config({
    quiet: true
});

const BASE_URL = process.env.BASE_URL

export class Taskpage {

    constructor(
        readonly page: Page
    ) { }

    async navegateToHomePage(page: Page) {
        await page.goto(`/`)
        await expect(page).toHaveTitle(TaskPageElements.title)
    }

    async crearNewTask(taskName: string) {
        await this.page.locator(TaskPageElements.inputTask).fill(taskName)
        await this.page.locator(TaskPageElements.btnCreateTask).click()
    }

    async taskItem(taskName: string) {
        await expect(this.page.locator(TaskPageElements.dataTaskId).filter({ hasText: taskName })).toBeVisible({ timeout: 20000})
    }

    async getTaskItem(taskName: string) {
        return this.page.locator(TaskPageElements.dataTaskId).filter({ hasText: taskName })
    }

    async duplicateMessage(msg: string | RegExp) {
        await expect(this.page.locator(TaskPageElements.taskSlreadyExists).filter({ hasText: msg })).toBeVisible({ timeout: 20000 })

    }

    async taskEmpty(messageEmpty: string) {
        const msgEmpty = await this.page.locator(TaskPageElements.inputTask).evaluate(e => (e as HTMLInputElement).validationMessage)
        expect(msgEmpty).toEqual(messageEmpty)
    }

    async taskConcluida(taskName: string) {
        const task = await this.getTaskItem(taskName)
        await expect(task).toBeVisible();
        await task.locator(TaskPageElements.toggleTaskDesativado).nth(0).click({ force: true })
        await expect(this.page.locator(TaskPageElements.taskConcluida).filter({ hasText: taskName })).toBeVisible()
    }

    async shouldBeDone(taskName: string) {

        //valida se a task está tracejada
        const target = this.page.getByText(taskName)
        await expect(target).toHaveCSS('text-decoration-line', 'line-through');
    }

    async removeTask(taskName: string) {
        const task = await this.getTaskItem(taskName)
        await expect(task).toBeVisible();
        await task.locator(TaskPageElements.btnExcluirTask).nth(0).click({ force: true })
        await expect(this.page.locator(TaskPageElements.dataTaskId).filter({ hasText: taskName })).not.toBeVisible()
    }
}

