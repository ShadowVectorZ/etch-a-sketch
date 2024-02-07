const container= document.querySelector('#container')

let rowNumber
rowNumber=18

let total=rowNumber*(rowNumber+1)

for (let i=0;i<total;i++){
    const squareDiv=document.createElement('div')
    squareDiv.classList.add('squareDiv')
   if ((i%(rowNumber+1))===0){
    squareDiv.setAttribute('style', ' width: 100%; border: 0;height: 0;')
   }
    container.appendChild(squareDiv)
}