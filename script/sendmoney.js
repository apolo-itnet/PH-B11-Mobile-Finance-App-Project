document.getElementById('sendmoney-btn').addEventListener("click", function(event) {
  event.preventDefault();

  const userAccount = document.getElementById('personal-number').value;
  const pin = getInputValueByID("sendmoney-pin");
  const amount = getInputValueByID('add-sendmoney-amount');
  const mainBalance = getInnerTextById('main-balance');

  // Validate input
  if (userAccount.length !== 11 || isNaN(userAccount)) {
    return alert('❌ Invalid account number. It must be 11 digits.');
  }
  if (pin !== 1234) {
    return alert("❌ Invalid Pin!");
  }
  if ( isNaN(amount)) {
    return alert("⚠️ Warning: Amount field cannot be empty or negative!");
  }
  if (amount > mainBalance) {
    return alert("⚠️ Warning: Insufficient balance");
  }

  // Update balance
  const newBalance = mainBalance - amount;
  setInnerTextByIDandValue('main-balance', newBalance);
  alert(`✅ Successfully send ${amount} ৳`);

    // Clear input fields after successful operation
    clearInputFieldByID('personal-number');
    clearInputFieldByID('sendmoney-pin');
    clearInputFieldByID('add-sendmoney-amount');

  });
  
  // Restrict input fields to only allow numbers (no letters, no special characters except space)
  document.getElementById('agent-number').addEventListener('keypress', restrictToNumbers);
  console.log('kaj hocche ki?')
  document.getElementById('pin').addEventListener('keypress', restrictToNumbers);
  document.getElementById('add-cashout-amount').addEventListener('keypress', restrictToNumbers);
