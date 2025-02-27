document.getElementById('pay-now-btn').addEventListener('click', function(event) {
  event.preventDefault();

  const userAccount = document.getElementById('organization-number').value;
  const userPin = getInputValueByID('pay-bill-pin');
  const billAmount = getInputValueByID('pay-bill-amount');
  const mainBalance = getInnerTextById('main-balance');

  if (userAccount.length !== 11 || isNaN(userAccount)){
    return alert('❌ Invalid account number. It must be 11 digits.');
  }
  if(userPin !== 1234){
    return alert('❌ Invalid PIN. Input must be 4 digt pin');

  }
  if(isNaN(billAmount) || billAmount <= 0){
    return alert("⚠️ Warning: Amount field cannot be empty or negative!");
  }

  const newBalance = mainBalance - billAmount;
  setInnerTextByIDandValue('main-balance', newBalance);
  alert(`✅ Successfully Pay Bills ${billAmount} ৳ your new balance is ${newBalance} ৳`);

  clearInputFieldByID('pay-bill-org');
  clearInputFieldByID('organization-number');
  clearInputFieldByID('pay-bill-pin');
  clearInputFieldByID('pay-bill-amount');

})