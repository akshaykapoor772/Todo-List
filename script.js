let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let submitButton = document.getElementById('submit');

let toDoList = [];

addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;

  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';

  deleteButton.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
  });
  
  paragraph.appendChild(deleteButton);
  
  toDoContainer.appendChild(paragraph);
  
  inputField.value = "";
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })

  toDoList.push(paragraph.innerText);
})

submitButton.addEventListener('click', function(){
  fetch('http://localhost:3000/submit-todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toDoList),
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
    toDoList = [];
    toDoContainer.innerHTML = "";
  })
  .catch(error => console.error(error));
})