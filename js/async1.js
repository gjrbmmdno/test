
function loadImg(src){
  const p = new Promise( 
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图像加载失败${src}`)
        reject(err)
      }
      img.src = src
    }
  )

  return p
}

const src1 = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
const src2 = 'https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png'


async function loadImg1(){
  const img1 = await loadImg(src1)
  return img1
}

async function loadImg2(){
  const img2 = await loadImg(src2)
  return img2
}

!(async function (){

  

})()