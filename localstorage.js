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
    let items;
 if(localStorage.getItem('items') === null){
      items = [];
 }
 else{
     items = JSON.parse(localStorage.getItem('items'));
 }
 const itemIndex = item.children[0].innerText;
 items.splice(items.indexOf(itemIndex),1);
 console.log(items.indexOf(item.children[0]))
 localStorage.setItem('items', JSON.stringify(items));
}