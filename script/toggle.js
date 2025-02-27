/*
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
*/

document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    "latest-transaction", "add-money-form", "cashout-form",
    "sendmoney-form", "get-bonus-form", "pay-bill-form", "transaction-history"
  ];

  // সব Box Select করা
  const boxes = document.querySelectorAll(".box"); 

  function toggleSection(activeId, sections, activeBox, allBoxes) {
    sections.forEach(id => {
      document.getElementById(id).classList.toggle("hidden", id !== activeId);
    });

    // সব box থেকে active ক্লাস সরানো
    allBoxes.forEach(box => {
      box.classList.remove("border-blue-500", "text-blue-500", "font-semibold");
      box.classList.add("border-gray-300");
    });

    // Active box highlight করা (Border + Text)
    if (activeBox) {
      activeBox.classList.remove("border-gray-300");
      activeBox.classList.add("border-blue-500", "text-blue-500", "font-semibold");
    }
  }

  function addToggleEvent(boxId, sectionId) {
    document.getElementById(boxId).addEventListener("click", function () {
      toggleSection(sectionId, sections, this, boxes);
    });
  }

  // Event Listener যোগ করা
  addToggleEvent("add-money-box", "add-money-form");
  addToggleEvent("cashout-box", "cashout-form");
  addToggleEvent("transfer-money-box", "sendmoney-form");
  addToggleEvent("get-bonus-box", "get-bonus-form");
  addToggleEvent("pay-bill-box", "pay-bill-form");
  addToggleEvent("transaction-history-box", "transaction-history");
  addToggleEvent("view-all-btn", "transaction-history");
  addToggleEvent("view-latest-btn", "latest-transaction");

  // ডিফল্টভাবে Latest Transaction দেখানো
  toggleSection("latest-transaction", sections, null, boxes);
});


// navbar - fixed postion for mobile

window.addEventListener("resize", function () {
  const navbar = document.getElementById("navbar");
  if (window.innerHeight < 500) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

// view button toggle
document.getElementById('view-all-btn').addEventListener("click", function(){
  let viewTransaction = document.getElementById('transaction-history');

  viewTransaction.scrollIntoView({behavior: 'smooth'});
})