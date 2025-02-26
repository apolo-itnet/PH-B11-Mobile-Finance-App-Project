document.getElementById('login-btn').addEventListener("click", function(event){

  event.preventDefault();
  const accountNumber = document.getElementById('acc-number').value;
  const pinNumber = document.getElementById('pin').value;
  const convertedPin = parseInt(pinNumber)
  
  if (accountNumber.length === 11) {
    if(convertedPin===1234){
      window.location.href="main-dashboard.html"
      // redirectToPage('main-dashboard.html')
    } 
      else {
        alert('Pin Number is not correct')
      }
  }
      else{
      alert('Phone number is not correct')
      }
})

