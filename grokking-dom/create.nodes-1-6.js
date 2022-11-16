const div = document.createElement('div')
const ul = document.createElement('ul')

// Первый LI
const li = document.createElement('li')
const a = document.createElement('a')
a.href = 'instagram.com'
a.title = 'intocode'
a.append(document.createTextNode('наш инстаграмм'))
// Второй LI
const li2 = document.createElement('li')
const a2 = document.createElement('a')
a2.href = 'intocode.com'
a2.title = 'intocode'
a2.append(document.createTextNode('наш сайт'))
//
div.append(ul)
ul.append(li, li2)
li.append(a)
li2.append(a2)

div.after('body')

console.log(div)