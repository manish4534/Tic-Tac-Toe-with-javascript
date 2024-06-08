let currentPlayer = "X"
let a1 = Array(9).fill(null)
let eb = document.getElementById("r-btn")
let es = document.getElementById("s-card")
let scoreX = 0, scoreO = 0, flag = 0;


// console.log(a1)

function handleClick(el){
  const id = Number(el.id)

  if(a1[id] !== null || flag !== 0) return;
  a1[id] = currentPlayer;

  el.innerText = currentPlayer;
  // console.log(a1)
  checkWinner()
  
  currentPlayer === "X" ? el.style.color = 'green' : el.style.color = 'red';
  currentPlayer = currentPlayer === "X" ? "O" : "X";

}

function checkWinner(){
  const ew = document.getElementById("winner")


  // console.log(ew)
  if(
    (a1[0] !== null && a1[0] == a1[1] && a1[2] == a1[1]) || 
    (a1[3] !== null && a1[3] == a1[4] && a1[4] == a1[5]) || 
    (a1[6] !== null && a1[6] == a1[7] && a1[7] == a1[8]) || 
    (a1[0] !== null && a1[0] == a1[3] && a1[3] == a1[6]) || 
    (a1[1] !== null && a1[1] == a1[4] && a1[4] == a1[7]) || 
    (a1[2] !== null && a1[2] == a1[5] && a1[5] == a1[8]) || 
    (a1[0] !== null && a1[0] == a1[4] && a1[4] == a1[8]) || 
    (a1[6] !== null && a1[6] == a1[4] && a1[4] == a1[2]) 
  ){
    currentPlayer === "X" ? scoreX++ : scoreO++;
    flag = 1;
    // console.log(currentPlayer)
    console.log(scoreO)
    console.log(scoreX)
    // document.write(`Winner is ${currentPlayer}`)
    ew.innerText = `Winner is ${currentPlayer}`
    eb.innerText = "restart"
    es.innerText = `score: X => ${scoreX} || O => ${scoreO}`
    return;
  }
  
  if(!a1.some(e => e === null)){
    // document.write("Draw!!")
    ew.innerText = "Draw!!"
    return
  }
}

function handleBtn(){
  a1.fill(null)
  // console.log(a1)
  flag = 0;
  for(let i=0;i<9;i++){
    let cell = document.getElementById(`${i}`)
    cell.innerText = null
  }
}