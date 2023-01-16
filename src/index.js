document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const tasksList = document.querySelector('#tasks');
    const li = document.createElement('li');
    const formText = document.getElementById('new-task-description').value;
    li.textContent = formText;
    const selection = document.getElementById('priority');
    const priority = selection.options[selection.selectedIndex];


    switch(priority.value) {
      case 'high':
        li.className = 'high-prio';
        break;
      case 'medium':
        li.className = 'med-prio';
        break;
      case 'low':
        li.className = 'low-prio';
        break;
    }
    console.log(priority);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    li.append(deleteButton);
    deleteButton.addEventListener('click', e => {
      li.remove();
    });
    tasksList.append(li);
  });
});
