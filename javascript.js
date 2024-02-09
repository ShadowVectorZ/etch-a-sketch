const container= document.querySelector('#container')

let rowNumber
rowNumber=16
let total=rowNumber*(rowNumber)




let createGrid= function(){
for (let i=0;i<total;i++){
     let squareDiv=document.createElement('div')
    squareDiv.classList.add('squareDiv')
    let pixelSize =(100/(rowNumber))
    squareDiv.setAttribute('style',  `width:${pixelSize}%` ) 
    squareDiv.addEventListener('mouseenter', ()=>{
        squareDiv.style.backgroundColor='black';
    })
    container.appendChild(squareDiv)   
}

}


createGrid()




let sizeChange=function(){
    while( container.hasChildNodes() ){
        container.removeChild(container.lastChild);} 
    rowNumber=0
    total=0
   rowNumber=(prompt("What size would you like the grid to be?"))
   if (rowNumber>100) {
    rowNumber=(prompt('Size cannot be over 100, please try again'))
}
   total=(Number(rowNumber))*((Number(rowNumber)))


    createGrid()
}
const sizeButton=document.querySelector('#sizeButton')
sizeButton.addEventListener('click', sizeChange);


