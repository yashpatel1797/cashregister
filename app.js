const amountInput = document.querySelector(".input-amount");
const cashInput = document.querySelector(".input-cash");
const btnCheck = document.querySelector(".btn-check");
const message = document.querySelector(".err-message");
const noOfCoins = document.querySelectorAll(".no-of-coins");
const btnNext = document.querySelector(".btn-next");
const details = document.querySelector(".details");
const changeTable = document.querySelector(".change-table");

const coins = [2000, 500, 100, 20, 10, 5, 1];
details.style.display="none";
changeTable.style.display="none";


function checkCash(){
    message.style.display="none";
    let amountInputValue = Number(amountInput.value);
    let cashInputValue = Number(cashInput.value);
    const amountTobeGiven = cashInputValue - amountInputValue;
    if(amountInputValue > 0 && cashInputValue > 0){
        if(amountInputValue <= cashInputValue){
            changeTable.style.display="block";
            
            calculateChange(amountTobeGiven);
            
        } else {
            showMessage("Please wash dish!");
            changeTable.style.display="none";
        }
    } else {
        showMessage("Enter Positive value");
            changeTable.style.display="none";
    }
        
    }  
function addGivenCash(){
    message.style.display="none";
    if(amountInput.value > 0){
        details.style.display="block";
    } else {
        showMessage("Enter Positive value");
    }
}
btnNext.addEventListener("click", addGivenCash);
btnCheck.addEventListener("click", checkCash);

function calculateChange(amountTobeGiven){
    
    for(let i = 0; i < coins.length; i++){
        const ans = Math.trunc(amountTobeGiven/coins[i]);
        amountTobeGiven %= coins[i];
        noOfCoins[i].innerText = ans;
    }
}
function showMessage(msg){
    message.style.display="block";
    message.innerHTML = msg;
}