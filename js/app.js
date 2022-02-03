console.log('DOM To-Do Lab');

const inp = document.querySelector('#typed-message')

const btn = document.querySelector('#submit-button')

const toDoList = document.getElementById('todo-list')
// .getElementById is used just to practice different cached element references

btn.addEventListener('click', function (evt) {
  const newLi = document.createElement('li')
  newLi.textContent = inp.value
  if (inp.value !== "") {
    inp.value = ""
    document.querySelector('ul').appendChild(newLi)
  }
})

//new button
const newBtn = document.createElement('button')
newBtn.id = 'reset-button'
newBtn.textContent = 'Reset'
document.querySelector('body').appendChild(newBtn)

//event listener to remove to to-do list
newBtn.addEventListener('click', function (evt) {
  let newLi = document.querySelector('ul')
  newLi.textContent = ''
})

// delete on click

document.querySelector('ul').addEventListener('click', removeListItem)

function removeListItem(evt) {
  evt.target.remove()
}
