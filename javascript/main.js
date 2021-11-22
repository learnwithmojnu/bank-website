/************************************************************************/
// Get Current Balance from LocalStorage
var finalBalance = localStorage.getItem("totalAmount");
if(finalBalance === null){
    document.getElementById('current-balance').innerText = '0.00';
}
else{
    document.getElementById('current-balance').innerText = finalBalance;
}
/************************************************************************/

/************************************************************************/
//Hide Login Area and Show Transaction Area
const LoginBtn = document.getElementById('login');
const loginArea = document.getElementById('login-area');
const showTransaction = document.getElementById('transaction-area');
LoginBtn.addEventListener('click', function() {
    loginArea.style.display = 'none';
    showTransaction.style.display = 'block';
})
/************************************************************************/

/************************************************************************/
// Grab the User Input
//>>>>>>>>>>>>>>>>
//1. For Deposit button
document.querySelector('#deposit-btn').addEventListener('click', function(){
    var deposit = document.querySelector('#deposit-amount').value;
    if(deposit < 0 || !(deposit > 48 || deposit < 57)){
        alert('Wrong Value');
    }
    else{
        userTypeInDeposit(deposit);
    }
});
//2. For Withdraw button
//>>>>>>>>>>>>>>>>>>>>>>
document.querySelector('#withdraw-btn').addEventListener('click', function(){
    var withdraw = document.querySelector('#withdraw-amount').value;
    if(withdraw < 0 || !(withdraw > 48 || withdraw < 57)){
        alert('Invalid Amount');
    }
    else{
        userTypeInWithdraw(withdraw);
    }
});
/************************************************************************/

/************************************************************************/
var totalBalance = '0';
var totalAmount = 0;
/* Deposit and Current Balance Update Area*/
function userTypeInDeposit(input){
    var depositBalance = document.getElementById('deposit-balance');
    totalBalance = document.getElementById('current-balance').innerText;
    depositBalance.innerHTML = input;
    var totalAmount = (+input) + (+totalBalance);
    localStorage.setItem("totalAmount", totalAmount);
    document.getElementById('current-balance').innerText = totalAmount;
}


/* Withdraw and Current Balance Update Area*/
function userTypeInWithdraw(input){
    var withdrawBalance = document.getElementById('withdraw-balance');
    totalBalance = document.getElementById('current-balance').innerText;
    withdrawBalance.innerHTML = input;
    totalAmount = (+totalBalance) - input;
    localStorage.setItem("totalAmount", totalAmount);
    document.getElementById('current-balance').innerText = totalAmount;
}
/************************************************************************/