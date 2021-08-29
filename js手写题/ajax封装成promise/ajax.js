// const xhr = new XMLHttpRequest()
// xhr.open('GET', './test.json', true) //true是异步
// xhr.onreadystatechange  = function() {
//   if(xhr.readyState === 4){
//     if(xhr.status ===200){
//       console.log(

//         JSON.parse(xhr.responseText)
//       );
//       alert(xhr.responseText)
//     }else if(xhr.status === 404){
//       console.log('404 not found');
//     }
//   }  
// }

// xhr.send(null)



// const xhr = new XMLHttpRequest()
// xhr.open('POST', './login.json', true) //true是异步
// xhr.onreadystatechange  = function() {
//   if(xhr.readyState === 4){  /// 0（未初始化）还没有调用send方法， 1 （载入）已调用send（）方法，正在发送请求
//     if(xhr.status ===200){   /// 2（载入完成）send（）方法执行完成，已经接收到全部相应内容
//       console.log(           /// 3 （交互）正在解析相应内容    4 （完成）相应内容解析完成，可以在客户端调用

//         JSON.parse(xhr.responseText)
//       );
//       alert(xhr.responseText)
//     }else{
//       console.log('其他情况');
//     }
//   }  
// }

// const postData = {
//   userName: "zhangsan",
//   password: 'xxx'
// }
// xhr.send(JSON.stringify(postData))

// function ajax(url){
//   return  new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url, true)
//     xhr.send(null)

//     xhr.onreadystatechange = function(){
//       if(xhr.readyState === 4){
//         if(xhr.status === 200){
//           resolve(
//             JSON.parse(xhr.responseText)
//           )
//         }
//         else if(xhr.status === 404){
//           reject(new Error('404 not found'))
//         }
//       }
//     }

//   })

// }

function newAjax(url){
    
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('get',url,true)
        xhr.send(null)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
    })
}



const url = './test.json'
newAjax(url)
.then(res => console.log(res)
)
