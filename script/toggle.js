document.getElementById('latest-transaction').style.display='block';
document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='none';

document.getElementById('add-money-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='block';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='none';
  document.getElementById('latest-transaction').style.display='none';

})

document.getElementById('cashout-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='block';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='none';
  document.getElementById('latest-transaction').style.display='none';


})

document.getElementById('transfer-money-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='block';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='none';
  document.getElementById('latest-transaction').style.display='none';


})

document.getElementById('get-bonus-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='block';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='none';
  document.getElementById('latest-transaction').style.display='none';


})

document.getElementById('pay-bill-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='block';
  document.getElementById('transaction-history').style.display='none';
  document.getElementById('latest-transaction').style.display='none';


})

document.getElementById('transaction-history-box').addEventListener("click", function(){
  document.getElementById('add-money-form').style.display='none';
  document.getElementById('cashout-form').style.display='none';
  document.getElementById('transfer-from').style.display='none';
  document.getElementById('get-bonus-form').style.display='none';
  document.getElementById('pay-bill-form').style.display='none';
  document.getElementById('transaction-history').style.display='block';
  document.getElementById('latest-transaction').style.display='none';


})
