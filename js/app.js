console.log('DOM To-Do Lab');

const inp = document.querySelector('#typed-message')

const btn = document.querySelector('#submit-button')

const toDoList = document.getElementById('todo-list')
// .getElementById is used just to practice different cached element references

btn.addEventListener('click', function (evt) {
  const newLi = document.createElement('li')
  newLi.textContent = inp.value
  if (inp.value !== ""){
  inp.value = ""
  document.querySelector('ul').appendChild(newLi)
  }
})
