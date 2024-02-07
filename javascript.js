const container= document.querySelector('#container')

let rowNumber
rowNumber=5
let total=rowNumber*(rowNumber+1)

let createGrid= function(){



for (let i=0;i<total;i++){
    const squareDiv=document.createElement('div')
    squareDiv.classList.add('squareDiv')
   if ((i%((Number(rowNumber))+1))===0){
    squareDiv.setAttribute('style', ' width: 100%; border: 0;height: 0;')
   }
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
   total=(rowNumber)*(((Number(rowNumber))+1))

    createGrid()
}
const sizeButton=document.querySelector('#sizeButton')
sizeButton.addEventListener('click', sizeChange);