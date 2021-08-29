console.log(100); //1

setTimeout(() => {
  console.log(200); // 4
})

Promise.resolve().then(()=>{ //3
  console.log(300);
})

console.log(400); //2