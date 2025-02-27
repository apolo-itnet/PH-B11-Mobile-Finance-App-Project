document.getElementById('add-money-btn').addEventListener("click", function(event) {
  event.preventDefault();

  const amount = getInputValueByID('add-money-amount');
  const pin = getInputValueByID("pin");
  const userAccount = document.getElementById('account-number').value.trim();
  let mainBalance = getInnerTextById('main-balance');

  // Validate input
  if (userAccount.length !== 11 || isNaN(userAccount)) {
    return alert('❌ Invalid account number. It must be 11 digits.');
  }
  if (pin !== 1234) {
    return alert("❌ Invalid Pin!");
  }
  if (isNaN(amount) || amount <= 0) {
    return alert("⚠️ Warning: Amount field cannot be empty or negative!");
  }

  // Update balance
  const newBalance = mainBalance + amount;
  setInnerTextByIDandValue('main-balance', newBalance);
  alert(`✅ Successfully added ${amount} ৳`);

    // Clear input fields after successful operation
    clearInputFieldByID('bank-select');
    clearInputFieldByID('account-number');
    clearInputFieldByID('pin');
    clearInputFieldByID('add-money-amount');
  });
  
  // Restrict input fields to only allow numbers (no letters, no special characters except space)
  document.getElementById('add-money-amount').addEventListener('keypress', restrictToNumbers);
  document.getElementById('pin').addEventListener('keypress', restrictToNumbers);
  document.getElementById('account-number').addEventListener('keypress', restrictToNumbers);
