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
    // Add localstorage

    saveLocalTask(task);

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
           removeLocalTasks(item);
       }

       if(item.classList[0] === "doneBtn")
       {
           item.parentNode.classList.toggle('completedTask');
       }

   }


   function saveLocalTask(item){
       let items;
       if(localStorage.getItem('items') === null){
           items = [];
       }
       else{
           items = JSON.parse(localStorage.getItem('items'));
       }
       items.push(item);
       localStorage.setItem('items', JSON.stringify(items));
   }

   function getTasks() {
       let items;
       if(localStorage.getItem('items') === null){
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.forEach(function(item) {
        //TaskDiv
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer flex';
    container.appendChild(taskContainer);
    
    //task value
    const taskContent = document.createElement('p');  
    taskContent.className = "taskContent";
    taskContainer.appendChild(taskContent);
    taskContent.innerText = item;
    // Add localstorage

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
    });
   }

   function removeLocalTasks(item){
    if(localStorage.getItem('items') === null){
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    const itemIndex = item.children[0].innerText;
    items.splice(items.indexOf(itemIndex),1);
    localStorage.setItem('items', JSON.stringify(items));
   }

   addBtn.addEventListener('click', addNewTask);
   container.addEventListener('click', removeTask);
   document.addEventListener('DOMContentLoaded', getTasks )




