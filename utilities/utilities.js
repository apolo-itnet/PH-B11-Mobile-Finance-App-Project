// Get input value by ID and parse to float
function getInputValueByID(id) {
  const inputField = document.getElementById(id);
  const value = inputField.value.trim();
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// Get inner text value by ID and parse to float
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// Set inner text by ID and Value
function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}

function clearInputFieldByID(id) {
  const inputField = document.getElementById(id);

  if (inputField.tagName === "SELECT") {
    // if dropdown filed default option set
    inputField.selectedIndex = 0;
  } else {
    // if other input field clear the value
    inputField.value = "";
  }
}

// Restrict input field to only numbers
function restrictToNumbers(event) {
  const key = event.key;
  if (!/[\d]/.test(key) && key !== "Backspace" && key !== "Enter") {
    event.preventDefault();
  }
}


//
function toggleHandleSection(id, status){
  document.getElementById(id).style.display =status; 
}
