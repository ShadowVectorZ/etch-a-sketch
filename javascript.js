const container= document.querySelector('#container')

let rowNumber
rowNumber=16
let total=rowNumber*(rowNumber)

let createGrid= function(){
for (let i=0;i<total;i++){
    const squareDiv=document.createElement('div')
    squareDiv.classList.add('squareDiv')
    let pixelSize =600/rowNumber
    squareDiv.setAttribute('style',  `height:${pixelSize}px; width:${pixelSize}px` ) 

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
   total=(Number(rowNumber))*((Number(rowNumber)))

    createGrid()
}
const sizeButton=document.querySelector('#sizeButton')
sizeButton.addEventListener('click', sizeChange);