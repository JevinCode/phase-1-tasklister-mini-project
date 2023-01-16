document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const tasksList = document.querySelector('#tasks');
    const li = document.createElement('li');
    const formText = document.getElementById('new-task-description').value;
    li.textContent = formText;
    tasksList.append(li);
  })
});
