function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      let taskList = document.getElementById('taskList');
      let li = document.createElement('li');
  
      let taskTextNode = document.createTextNode(taskText);
      li.appendChild(taskTextNode);
  
      let removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.className = 'redButton';
      removeButton.onclick = function() {
        li.remove();
      };
  
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      taskInput.value = ''; // Clear the input field
    }
  }
  