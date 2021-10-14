const input = document.querySelector('input');
const addBtn = document.querySelector('.addNewTask_btn');
const container = document.querySelector('.toDoListBox');

const createNewElements = () => {
    //Create Elements
    const taskContainer = document.createElement('div');
    const taskContent = document.createElement('p');
    const btnContainer = document.createElement('div');
    const doneTaskBtn = document.createElement('button');
    const removeTaskBtn = document.createElement('button');

    container.appendChild(taskContainer);
    taskContainer.appendChild(taskContent);
    
    taskContent.innerHTML = input.value;
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
}

const addNewTask = () => {
    createNewElements();
    

}

addBtn.addEventListener('click', addNewTask)
