//get the deposit Button here
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit input field and it's value
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    //get the previous deposit amount and it's innerText
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalPrevious = depositTotalElement.innerText;

    //add Total current deposit amount here
    const depositTotalNow = parseFloat(depositAmount) + parseFloat(depositTotalPrevious);

    //set total current deposit amount here
    depositTotalElement.innerText=depositTotalNow;
    
    //get previous balance and it's innerText 
    const balanceTotalElement =document.getElementById('Balance-total');
    const previousBalance = balanceTotalElement.innerText;

    //add current total balance here
    const totalBalanceNow = parseFloat(previousBalance) + parseFloat(depositAmount);
    
    //set total balance
    balanceTotalElement.innerText = totalBalanceNow;
    
    //clear deposit field
    depositField.value = '';
})