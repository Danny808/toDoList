const input = document.querySelector('input');
const button = document.querySelector('button');
const taskCont = document.querySelector('.tasks_cont');

const addTask = () => {
    if(input.value === '') return;
    let taskDiv = document.createElement('p');
    taskDiv.className = 'task'
    taskDiv.innerHTML = input.value;
    taskCont.appendChild(taskDiv);
    input.value = '';
}


const add_complate_button = () => 
{
    let complateButton = document.createElement('button');
    complateButton.className = 'addButton'
    taskCont.appendChild(complateButton);
}

button.addEventListener('click', addTask);