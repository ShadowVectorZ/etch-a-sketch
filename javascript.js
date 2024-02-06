const container= document.querySelector('#container')

let rowNumber
rowNumber=16

let total=rowNumber*(rowNumber+1)

for (let i=0;i<total;i++){
    const squareDiv=document.createElement('div')
    squareDiv.classList.add('squareDiv')

    container.appendChild(squareDiv)
}