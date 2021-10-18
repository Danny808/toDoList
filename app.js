const input = document.querySelector('input');
const addBtn = document.querySelector('.addNewTask_btn');
const container = document.querySelector('.toDoListBox');

    function addNewTask (e) {

    e.preventDefault();

    let task = input.value;
    if(input.value === '') return;

    //TaskDiv
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer flex';
    container.appendChild(taskContainer);
    
    //task value
    const taskContent = document.createElement('p');  
    taskContent.className = "taskContent";
    taskContainer.appendChild(taskContent);
    taskContent.innerText = task;

    //btn container
    // const btnContainer = document.createElement('div');
    // btnContainer.className = 'btnContainer';
    // taskContainer.appendChild(btnContainer);

    //done button
    const doneTaskBtn =  document.createElement('button');
    doneTaskBtn.className = 'doneBtn btn';
    doneTaskBtn.innerHTML = '<i class="fas fa-check"></i>'
    taskContainer.appendChild(doneTaskBtn);

    //remove button
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.className = 'removeBtn btn';
    removeTaskBtn.innerHTML = '<i class="fas fa-trash"></i>';
    taskContainer.appendChild(removeTaskBtn);
    // Clear Input
    input.value = '';
   };

   function removeTask (e) {
       let item = e.target;
       if(item.classList[0] === 'removeBtn')
       {
           itemToDelate = item.parentNode;
           itemToDelate.remove();
       }

       if(item.classList[0] === "doneBtn")
       {
           item.parentNode.classList.toggle('completedTask');
       }

   }


   addBtn.addEventListener('click', addNewTask);
   container.addEventListener('click', removeTask);




