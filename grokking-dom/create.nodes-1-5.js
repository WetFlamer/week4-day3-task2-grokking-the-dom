const first = document.createElement('div')
first.className = 'red'
const person = document.createElement('div')
person.className = 'green'
const thirst = document.createElement('div')
thirst.className = 'blue'
thirst.textContent = 'я вложен'

person.append(thirst)
first.append(person)
console.log(first)