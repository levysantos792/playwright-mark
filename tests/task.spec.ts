import { test } from '@playwright/test';
import { Taskpage } from './support/page/taskPage/index';
import { TaskAPI } from './support/helpers';
// import { faker } from '@faker-js/faker';

let taskPage: Taskpage
let taskAPI: TaskAPI


const newTaskName = 'Nova Tarefa Cadastrada'

test.beforeEach(async ({ page, request }) => {
    taskPage = new Taskpage(page)
    taskAPI = new TaskAPI(request)
    await taskPage.navegateToHomePage(page)
})

test.describe('Tarefas', () => {

    test('Criar uma nova tarefa', async () => {
        await taskAPI.deleteTaskByHelper(newTaskName)
        await taskPage.crearNewTask(newTaskName)
        await taskPage.taskItem(newTaskName)

    });

    test.only('Não deve criar tarefa duplicada', async () => {
        await taskAPI.deleteTaskByHelper(newTaskName)
        await taskAPI.postTask(newTaskName)
        await taskPage.crearNewTask(newTaskName)
        await taskPage.duplicateMessage(/(Task already exists!|Tarefa já existe!)/)
    })

    test('Não cadastrar task em branco', async () => {
        await taskPage.crearNewTask('')
        await taskPage.taskEmpty('This is a required field')
    })

    test('Marcar uma task como concluida', async () => {
        await taskAPI.deleteTaskByHelper(newTaskName)
        await taskPage.crearNewTask(newTaskName)
        await taskPage.taskConcluida(newTaskName)
        await taskPage.shouldBeDone(newTaskName)

    })

    test('Excluir task não concluida', async () => {
        await taskAPI.deleteTaskByHelper(newTaskName)
        await taskPage.crearNewTask(newTaskName)
        await taskPage.removeTask(newTaskName)
    })

    test('Excluir task concluida', async () => {
        await taskAPI.deleteTaskByHelper(newTaskName)
        await taskPage.crearNewTask(newTaskName)
        await taskPage.taskConcluida(newTaskName)
        await taskPage.shouldBeDone(newTaskName)
        await taskPage.removeTask(newTaskName)

    })

})