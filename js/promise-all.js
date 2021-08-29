// let p1 = new Promise((resolve,reject)=>{
//   resolve('ok');
// })


// let p2 = new Promise((resolve,reject) =>{
//   resolve('success')
// })

// let p3 = new Promise((resolve,reject)=>{
//   reject('fail!')
// })

// Promise.all([p1, p2]).then((result) => {
//   console.log(result)               //['成功了', 'success']
// }).catch((error) => {
//   console.log(error)
// })

// Promise.all([p1,p3,p2]).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)      // 失败了，打出 '失败'
// })

//Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示

// ///手写promise。all

function all(promises){
  let len = promises.length, res = [];
  if(len){
    return new Promise((resolve,reject)=>{
      for(let i=0; i<len; i++){
        let promise = promises[i];
        promise.then(response=>{
          res[i] = response;
          if(reject.length === len){
            resolve(res);
          }
        },error=>{
          reject(error)
        })
      }
    })
  }
}


//test
let p1 = new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve(1);
  },1000)
})

let p2 = new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve(2);
  },2000)
})

let p3 = new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve(3);
  },3000)
})

all([p1,p2,p3]).then(res=>{
  console.log(res);
}).catch(console.log)