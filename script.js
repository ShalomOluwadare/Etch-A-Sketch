const gridNum = document.querySelector('.gridNumber');
const colorbtn = document.querySelector('.colormode')
const gridContainer=document.querySelector('#grid-container');
const clearGrid=document.querySelector('.clearGrid');
const colorPicker=document.querySelector('#colorPicker');
const rainbowMode=document.querySelector('.random')
const eraser=document.querySelector('.eraser')

let divControl;
let numberOfSquares=0;
let mouseDown = false
let currentMode;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

colorbtn.onclick = () => {setCurrentMode('color')
colorbtn.style.backgroundColor='gray'
}
rainbowMode.onclick = () => {setCurrentMode('rainbow')
rainbowMode.style.backgroundColor='gray'
}
eraser.onclick = () => {setCurrentMode('eraser')
eraser.style.backgroundColor='gray'
}
clearGrid.onclick=()=> {setCurrentMode('clear')
clearGrid.style.backgroundColor='gray'
}


gridNum.addEventListener('click',askGridNumber);
function askGridNumber(){
    userInput=parseInt(prompt('how many squares per side:','max 50'))
    if (numberOfSquares===0&&userInput<=50){

        createGrid();
    }
    else if(numberOfSquares!==0&&userInput<=50){
        removeGrid()
        createGrid()
    }
    else{
        alert('input a valid number')
        askGridNumber()
    };
};
function setCurrentMode(newMode){
    currentMode = newMode
};

function removeGrid(){
    document.querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
};

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        rainbowMode.style.backgroundColor='gray'
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        colorbtn.style.backgroundColor='white'
        eraser.style.backgroundColor='white'
    } else if (currentMode === 'color') {
        colorbtn.style.backgroundColor='gray'
        e.target.style.backgroundColor = colorPicker.value
        rainbowMode.style.backgroundColor='white'
        eraser.style.backgroundColor='white'
    } else if (currentMode === 'eraser') {
        eraser.style.backgroundColor='gray'
        e.target.style.backgroundColor = 'white'
        colorbtn.style.backgroundColor='white'
        rainbowMode.style.backgroundColor='white'
    }
};

function createGrid(){
        numberOfSquares=userInput**2
        console.log(numberOfSquares)

        for(i=0;i<numberOfSquares;i++){
            let div= document.createElement('div')
            div.classList.add('grid-item')
            div.addEventListener('mouseover',changeColor)
            div.addEventListener('mousedown',changeColor)
            gridContainer.appendChild(div)
        };   

        divControl=document.querySelectorAll('.grid-item')
        gridContainer.style.gridTemplateColumns=`repeat(${userInput},1fr)`
        gridContainer.style.gridTemplateRows=`repeat(${userInput},1fr)`
        divControl.forEach(but=>{
        clearGrid.addEventListener('click',()=>{
            but.style.backgroundColor='white'
        })
    })
};

      
    




