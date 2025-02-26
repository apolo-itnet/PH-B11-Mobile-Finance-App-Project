document.getElementById('add-money-btn').addEventListener("click",  function(event){
  event.preventDefault();
  const amount = getInputValueByID('add-money-amount');
  const pin = getInputValueByID("pin");
  const userAccount = document.getElementById('account-number').value;
  const mainBalance = getInnerTextById('main-balance');
  console.log(mainBalance);

  if (userAccount.length===11) {
    if(pin===1234){
      const addBalance = mainBalance + amount;
      setInnerTextByIDandValue('main-balance', addBalance);

    } else{
      alert("Invalid Pin");
    }
  } 
  else {
    alert('Invalid account number. It must be 11 digits.')
  }
  
})