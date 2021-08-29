//不缓存
for(let i=0; i<document.getElementsByTagName('p').length; i++){

}

//缓存
const pList = document.getElementsByTagName('p')
const length = pList.length
for(let i=0; i<length; i++){

}