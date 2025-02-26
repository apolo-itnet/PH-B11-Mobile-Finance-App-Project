document.getElementById('add-money-btn').addEventListener("click",  function(event){
  event.preventDefault();
  const amount = getInputValueByID('add-money-amount');
  const pin = getInputValueByID("pin");
  console.log(amount, pin)
  
})