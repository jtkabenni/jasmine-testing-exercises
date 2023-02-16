window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: document.getElementById("loan-amount").value,
    years: document.getElementById("loan-years").value,
    rate: document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountField = document.getElementById("loan-amount");
  const yearsField = document.getElementById("loan-years");
  const rateField = document.getElementById("loan-rate");
  amountField.value = 100000;
  yearsField.value = 10;
  rateField.value = 4.5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
  console.log("monthyl", calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
  const principal = values.amount;
  const monthlyRate = values.rate / 100 / 12;
  const totalPayments = Math.floor(values.years * 12);
  return (
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerHTML = monthly;
}
