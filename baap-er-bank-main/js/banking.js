// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    changeBalance('deposit');
});

// // handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    changeBalance('withdraw');

});

function changeBalance(type){
    
     // get previous total
    const previousTotal = document.getElementById(type +'-total');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    // get new total

    const newMoney = document.getElementById(type +'-input');

    const newMoneyText = newMoney.value;

    if(newMoneyText != 0){
        
    const newMoneyAmount = parseFloat(newMoneyText);


     // update total
    previousTotal.innerText = previousTotalAmount + newMoneyAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    
    const balanceTotalText = balanceTotal.innerText;
    
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    if(type == 'withdraw'){
        balanceTotal.innerText = previousBalanceTotal - newMoneyAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal + newMoneyAmount;
    }
    
    // clear the deposit input field
    newMoney.value = '';
}

else{
    alert('please enter a number');
}

    }


   
   

