
const list = document.getElementById('list')

const frag = document.createDocumentFragment()


for(let i=0; i<10; i++){
  const li = document.createElement('li')
  li.innerHTML = `List item${i}`
  frag.appendChild(li)  
}


list.appendChild(frag)