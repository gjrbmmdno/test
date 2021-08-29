


//1
function flatten(arr){
  return arr.reduce((result, curr)=>{
    return result.concat(Array.isArray(curr)? flatten(curr):curr);
  },[]);
}


//2
function flatten(arr){
  return arr.toString().split(',').map(function(item){
    return Number(item)
  })
}



let arr = [[[1,2],3],[4,5],[6,7,8]];

console.log(flatten(arr));