const userScore = 0;
const compScore = 0;
const obj = {
    0: "rock",
    1: "paper",
    2: "scissors"
}
function getComputerChoice(){
    const rand = Math.floor(Math.random()*3)
    return obj[rand]
}
function runRound(userChoice){
    console.log("Player -> "+ userChoice)
    console.log("Computer -> "+getComputerChoice())
}
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("rock"))
        runRound("rock")
    else if(e.target.classList.contains("paper"))
        runRound("paper")
    else if(e.target.classList.contains("scissors"))
        runRound("scissors") 
})