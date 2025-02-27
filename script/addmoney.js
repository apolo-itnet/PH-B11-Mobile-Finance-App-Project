document.getElementById('add-money-btn').addEventListener("click", function(event) {
  event.preventDefault();

  const amount = getInputValueByID('add-money-amount');
  const pin = getInputValueByID("pin");
  const userAccount = document.getElementById('account-number').value.trim();
  const mainBalance = getInnerTextById('main-balance');
  const selectSource = document.getElementById('bank-select').value;

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

  //dynamic transaction add
  const addTransaction = document.getElementById('transaction-history');

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="flex items-center justify-between px-4 py-3 my-3 bg-white rounded-md">
    <div class="flex items-center gap-4">
      <div class="flex justify-center items-center w-16 h-16 bg-gray-300 rounded-full">
        <img class="w-8" src="assets/add-money.png" alt="Wallet">
      </div>
      <div>
        <h1 class="text-base font-semibold">Add Money ${amount} ৳ form this number ${userAccount} </h1>
        <p class="text-sm text-gray-600">Today 01:44 PM</p>
      </div>
    </div>
    <button>
      <img class="w-6" src="assets/option.png" alt="Options">
      </button>
  </div>
  `
  addTransaction.appendChild(div);

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
