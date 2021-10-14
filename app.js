
const input = document.querySelector('input');
const addBtn = document.querySelector('.addNewTask_btn');
const container = document.querySelector('.toDoListBox');

const addNewTask = () => {
    //Create Elements
    
    const taskContainer = document.createElement('div');
    const taskContent = document.createElement('p');
    const btnContainer = document.createElement('div');
    const doneTaskBtn = document.createElement('button');
    const removeTaskBtn = document.createElement('button');


    container.appendChild(taskContainer);
    taskContainer.appendChild(taskContent);
    let task = input.value;
    taskContent.innerHTML = task;
    if(input.value === '') return;
    taskContainer.appendChild(btnContainer);
    btnContainer.appendChild(doneTaskBtn);
    btnContainer.appendChild(removeTaskBtn);
    
    //Add Class to Elements
    taskContainer.className = 'taskContainer flex';
    taskContent.className = "taskContent";
    btnContainer.className = 'btnContainer';
    doneTaskBtn.className = 'doneBtn btn';
    removeTaskBtn.className = 'removeBtn btn';

    input.value = '';

    removeTaskBtn.addEventListener('click', (e) => {
        taskContainer.remove();
    });

    doneTaskBtn.addEventListener('click', () => {
        taskContainer.style.backgroundColor = 'green'
    })
}


addBtn.addEventListener('click', addNewTask)

