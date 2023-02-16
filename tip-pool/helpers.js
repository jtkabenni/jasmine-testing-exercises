// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;
  for (let key in allPayments) {
    let payment = allPayments[key];
    total += Number(payment[type]);
  }
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerText = value;

  tr.append(newTd);
}

//create 'td' with value 'x', when clicked, delete table row it belongs to
function appendDeleteButton(tr) {
  let newBtn = document.createElement("button");
  newBtn.addEventListener("click", removeRow);
  newBtn.innerText = "X";
  tr.append(newBtn);
}

function removeRow(e) {
  let rowId = e.target.parentElement.id;
  let paymentTrows = Array.from(
    document.querySelectorAll("#paymentTable tbody tr")
  );
  for (let row of paymentTrows) {
    if (row.id == rowId) {
      row.remove();
    }
  }
  delete allPayments[rowId];
  updateSummary();
  updateServerTable();
}
