// =============== Dom part start ===============
  // player one dom ---------------
let playerOne           = document.querySelector('.playerOne')
let playerOneInput      = document.querySelector('.playerOneInput')
let playerOneButton     = document.querySelector('.playerOneButton')

  // player two dom ---------------
let playerTwo           = document.querySelector('.playerTwo')
let playerTwoInput    = document.querySelector('.playerTwoInput')
let playerTwoButton     = document.querySelector('.playerTwoButton')

  // player three dom -------------
let playerThree         = document.querySelector('.playerThree')
let playerThreeInput    = document.querySelector('.playerThreeInput')
let playerThreeButton   = document.querySelector('.playerThreeButton')

  // other dom --------------------
let error               = document.querySelector('.error')
let winner              = document.querySelector('.winner')
let result              = document.querySelector('.result')
// chance dom for player -2 -------
let chanceCountTwo      = document.querySelector('.chanceCountTwo')
let chanceTwo           = 5
// chance dom for player -3 -------
let chanceCountThree      = document.querySelector('.chanceCountThree')
let chanceThree           = 5

// =============== Dom part end   ===============

// =============== function part start ===============
  //  chance function ------------------
chanceCountTwo.innerHTML = chanceTwo
  //   player one function --------------
  playerOneButton.addEventListener('click',()=>{
    if(playerOneInput.value        == ''){
       error.innerHTML              = 'ফাকা রাখা যাবে না'
    }else{
        if(playerOneInput.value <= -5 || playerOneInput.value >=5){
            error.innerHTML         = " সংখ্যা অবশ্যই -৫ থেকে ৫ এর মধ্যে নিতে হবে"

        }else{
            playerOne.style         = "display:none"
            error.innerHTML         = ""
            playerTwo.style         = "display:block"
            playerTwoInput.value    = ""
        }
    }
    // player two function -----------------------------------------
    playerTwoButton.addEventListener('click', ()=>{
        if(playerTwoInput.value    == ''){
       error.innerHTML              = 'ফাকা রাখা যাবে না'
        }else{
           if(playerTwoInput.value <-5 || playerTwoInput.value >5){
            error.innerHTML         = "সংখ্যা অবশ্যই -৫ থেকে ৫ এর মধ্যে নিতে হবে"
           }else{
            if(playerOneInput.value == playerTwoInput.value){
                winner.style        = 'display:block'
                result.innerHTML    = 'Winner is Player - 2'
                playerTwo.style     = 'display:none'
                error.innerHTML     = ""
            }else{
                  chanceTwo--
                  chanceCountTwo.innerHTML= chanceTwo
                  playerTwoInput.value    = ""
                  error.innerHTML         = ""
                  if(chanceTwo == 0){
                  playerTwo.style         = "display:none"
                  error.innerHTML         = ""
                  playerThree.style       = "display:block"
                  playerThreeInput.value  = ""
                  chanceCountThree.innerHTML = chanceThree
                  }
                  
        }
        }
        }
  //  player three function ---------------------------------------
    playerThreeButton.addEventListener('click', ()=>{
          if(playerThreeInput.value     == ""){
           error.innerHTML               = 'ফাকা রাখা যাবে না'
          }else{
             if(playerThreeInput.value < -5 || playerThreeInput.value >5){
              error.innerHTML            = "সংখ্যা অবশ্যই -৫ থেকে ৫ এর মধ্যে নিতে হবে"
             }else{
              if(playerOneInput.value   == playerThreeInput.value){
                  winner.style           = 'display:block'
                  result.innerHTML       = 'Winner is Player - 3'
                  playerThree.style      = 'display:none'
                  error.innerHTML        = ""
              }else{
                    chanceThree--
                    chanceCountThree.innerHTML = chanceThree
                    playerThreeInput.value     = ""
                    error.innerHTML            = ""
                    if(chanceThree            == 0){
                      playerThree.style        = "display:none"
                      error.innerHTML          = ""
                      winner.style             = 'display:block'
                      result.innerHTML         = 'Winner is Player - 1'
                    }
                    
          }
          }
          } 
      })



    })
  })



// =============== function part end   ===============

// =============== Dom part start ===============
// =============== Dom part end   ===============