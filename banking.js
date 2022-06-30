document.getElementById("depositButton").addEventListener('click', function () {
    const depositField = document.getElementById
        ("deposit-amount");
    const depositValue2 = depositField.value;
    const depositValue = parseFloat(depositValue2);
    const totalAmount = document.getElementById("total-amount");
    const amount = totalAmount.innerText;
    const Amount = parseFloat(amount);
    const totalDepositValue = depositValue + Amount;
    totalAmount.innerText = totalDepositValue;

    // updated account balance

    const balanceTotal = document.getElementById("balance-total");
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const updatedBlance = previousBalance + depositValue;
    balanceTotal.innerText = updatedBlance;
    depositField.value = '';

})

document.getElementById("withdrawButton").addEventListener('click', function () {
    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawText = withdrawAmount.value;
    const withdrawPreviousValue = parseFloat(withdrawText);
    const withderawBlance = document.getElementById("withdraw-blance");
    const withdrawText2 = withderawBlance.innerText;
    const withdarwNewAmount2 = parseFloat(withdrawText2);
    const newWithdrawBlance = withdrawPreviousValue + withdarwNewAmount2;
    withderawBlance.innerText = newWithdrawBlance;
    const balance = document.getElementById("balance-total");
    const balanceText = balance.innerText;
    const totalBlance = parseFloat(balanceText);
    const newBlance = totalBlance - newWithdrawBlance;
    balance.innerText = newBlance;
    withdrawAmount.value = '';
    
    

    

})