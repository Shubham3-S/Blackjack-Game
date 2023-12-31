//creating a object it is similar to Dictionaries  in phython
let player={
    name:"abhi",chips:200
}
let cards=[]//array
let sum= 0
let hasblackJack=false
let isAlive= false
let message=""
let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum")
let cardEl=document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent=player.name +": $"+player.chips


function getRandomCard(){
    let randomNum= Math.floor(Math.random()*13)+1

    if(randomNum===1){
        return 11
    }
    else if (randomNum>10){
        return 10
    }
    else{
        return randomNum
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}


function renderGame(){

    sumEl.textContent="Sum: "+sum
    cardEl.textContent="Cards: "

     for(let i=0;i<cards.length;i++){
         cardEl.textContent +=cards[i]+" "
     }

    if(sum<=20){
        message="Do you want to pick another card?"
    }
    else if(sum===21){
        message="Wohoo, you got the BlackJack"
        hasblackJack=true
    }
    else{
        message="Sorry you are out of game"
        isAlive=false
    }

    messageEl.textContent=message
    // cash out
    // console.log(hasblackJack)
    // console.log("isAlive: "+isAlive)
    
    // logout
    // console.log(message)
}



function newCard(){
    if(hasblackJack===false && isAlive===true){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}