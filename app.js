console.log('working?');
let items=document.querySelectorAll('.box');
let display=document.querySelector('.status-display');
let resetBtn=document.querySelector('.reset-btn');
console.log(items);
let currentPlayer='X';
let boxIndex=['','','','','','','','',''];
let isGameActive=true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function changePlayerTurn(){
    currentPlayer=(currentPlayer=='X')? 'O':'X';
    console.log(`${currentPlayer} player turn`);
    display.innerHTML=`player ${currentPlayer} turn`;
}
function resultValidate(){
    let isWinner=false;
    for(let i=0;i<=7;i++)
    {
        let checkCondition=winningConditions[i];
        let a=boxIndex[checkCondition[0]];
        let b=boxIndex[checkCondition[1]];
        let c=boxIndex[checkCondition[2]];
        if (a==='' || b==='' || c===''){
            continue;
        }
        if(a===b && b===c){
              isWinner=true;
              isGameActive=false;
              console.log(`winner is ${currentPlayer}`);
              display.innerHTML=`Player ${currentPlayer} is a Winner`;
              return;
        }
        else if(!boxIndex.includes('') )
        {
            console.log('match drawn');
            display.innerHTML='match draw';
            return;
        }  
    }
    changePlayerTurn();
}
function cellPlayed(element,i){
element.innerHTML=`${currentPlayer}`;
boxIndex[i]=currentPlayer;
}
function gameStart(e){
  console.log(e.target);
  let elementClicked=e.target;
  let index=parseInt(elementClicked.getAttribute('data-index'));
  console.log(index);
 if(!boxIndex[index]=='' || !isGameActive)
 {
    return;
 }
 else   {
 cellPlayed(elementClicked,index);
 resultValidate();
 }
}

for(let i=0;i<=8;i++){
items[i].addEventListener('click',gameStart);
}
function resetGame(){
    boxIndex=['','','','','','','','',''];
    for(let i=0;i<boxIndex.length;i++){
        items[i].innerHTML='';
    }
}
resetBtn.addEventListener('click',resetGame);
