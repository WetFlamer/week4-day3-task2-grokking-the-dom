// v1.0
// const massiv = ["html", "css", "js"]
// const ul = document.createElement('ul')
// const li = document.createElement('li')
// const li2 = document.createElement('li')
// const li3 = document.createElement('li')
//     for(let i = 0; i < massiv.length; i++) {
        
//         li.textContent = massiv[0]
//         li2.textContent = massiv[1]
//         li3.textContent = massiv[2]
//     }

// ul.append(li, li2, li3)
// document.body.append(ul)

// v2.0
// const render = function (massiv){
//     const ul = document.createElement('ul')
//         const li = document.createElement('li')
//         const li2 = document.createElement('li')
//         const li3 = document.createElement('li')

//     for(let i = 0; i < massiv.length; i++) {
//         li.textContent = massiv[0]
//         li2.textContent = massiv[1]
//         li3.textContent = massiv[2]
//     }
//     ul.append(li, li2, li3)
//     document.body.append(ul)
// }
// render(["html", "css", "js"])

// v3.0
//   function render (massiv) {
//     const ul = document.createElement('ul')
//     const li = document.createElement('li')
//     const li2 = document.createElement('li')
//     const li3 = document.createElement('li')
//     const a = document.createElement('a')
//     const a2 = document.createElement('a')
//     const a3 = document.createElement('a')
//     for(let i = 0; i < massiv.length; i++) {
//         a.href = massivs[0].url
//         a.textContent = massivs[0].name
//         a2.href = massivs[1].url
//         a2.textContent = massivs[1].name
//         a3.href = massivs[2].url
//         a3.textContent = massivs[2].name
//     }
//     li.append(a)
//     li2.append(a2)
//     li3.append(a3)
//     ul.append(li, li2, li3)
//     document.body.append(ul)
   
//   }
//   const massivs = [
//     {
//       name: 'Google',
//       url: 'https://google.com'
//     },
//     {
//       name: 'Instagram',
//       url: 'https://instagram.com'
//     },
//     {
//       name: 'intocode',
//       url: 'https://intocode.ru'
//     },
//   ]
//   render(massivs)