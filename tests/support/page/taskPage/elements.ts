export class TaskPageElements {
    static readonly title = 'Gerencie suas tarefas com Mark L';
    static readonly inputTask = '#newTask';
    static readonly btnCreateTask = `button[type='submit']`;
    static readonly dataTaskId = '[data-testid="task-item"]';
    static readonly taskSlreadyExists = '#swal2-html-container';
    static readonly toggleTaskDesativado = 'button[class*=listItemToggle]';
    static readonly toggleTaskAtivado = 'button[class*=listItemToggleSelected]'
    static readonly taskConcluida = 'p[class*=listItemTextSelected]'
    static readonly btnExcluirTask = 'button[class*=listItemDeleteButton]'

}