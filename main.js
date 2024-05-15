let body1 =document.querySelector('body')
let button2 =document.querySelector('#button2')
let p1 =document.querySelector('#p1')
let values=['0','1','2','3,','4','5','3','7','8','9','a','b','c','d','e','f']




function getgradiend(){
    let color='#'
    for(let i=0;i<6;i++){
        let rendomNomber=Math.trunc(Math.random()*values.length)
        color+=values[rendomNomber]
    }
    return color
}
function setgradiend(){
    let color1=getgradiend()
    let color2=getgradiend()
  
    let rendomDeg=Math.trunc(Math.random()*360)
    let bgColor=`linear-gradient(
        ${rendomDeg}deg,
        ${color1},
        ${color2}
       
       

    )`
    body1.style.background=bgColor
    p1.textContent=bgColor
}
button2.addEventListener('click',()=>{
    setgradiend()

})