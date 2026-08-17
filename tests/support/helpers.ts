import { expect, APIRequestContext } from '@playwright/test';
import { taskModel } from '../../tests/fixture/task';
require('dotenv').config({
    quiet: true
});

const BASE_API = process.env.BASE_API

export class TaskAPI {
    constructor(
        readonly request: APIRequestContext
    ) { }

    async deleteTaskByHelper(taskName: string) {

        const response = await this.request.delete(`${BASE_API}/helper/tasks/${taskName}`)

        // Aceita 204 (deletado) ou 404 (não encontrado)
        expect([204, 404]).toContain(response.status())
    }

    async postTask(taskName: string) {
        const task: taskModel =
        {
            name: taskName,
            is_done: false
        }

        const response = await this.request.post(`${BASE_API}/tasks`, { data: task })

        expect(response.status()).toBe(201)
    }
}