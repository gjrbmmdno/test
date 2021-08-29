// async function fn1(){
//   return 100
// }

// const res1 = fn1()

// res1.then(data => {
//   console.log('data', data);
// })


!(async function(){
  const p1 = Promise.resolve(300)
  const data = await p1
  console.log('data',data)
  
})