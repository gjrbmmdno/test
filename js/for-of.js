function muti(num){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(num * num)
    }, 1000)
  })
}

//同步的循环
const nums = [1, 2, 3]
nums.forEach(async(i) => {
  const res = await muti(i)
  console.log(res);
})


//异步的循环
!(async function(){
  
  for(let i of nums){
    const res = await muti(i)
    console.log(res);
  }
})()