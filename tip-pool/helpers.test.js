describe("helpers testing", function () {
  beforeEach(function () {
    billAmtInput.value = 300;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("should add new bill amount to total", function () {
    billAmtInput.value = 200;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(500);
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
  });

  it("should calculate tip percent", function () {
    expect(calculateTipPercent(200, 10)).toEqual(5);
  });

  it("should add row to bill table", function () {
    let paymentTable = document.querySelectorAll("#paymentTable tbody tr");
    expect(paymentTable.length).toEqual(1);
  });

  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
  });
});

describe("testing delete feature", function () {
  beforeEach(function () {
    billAmtInput.value = 300;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });
  it("should append delete button to table row", function () {
    let tr = document.createElement("tr");
    appendDeleteButton(tr);
    expect(tr.children[0].innerHTML).toEqual("X");
  });

  // it("should remove row when delete button is clicked", function () {
  //   let deleteButton = document.querySelectorAll(
  //     "#paymentTable tbody tr button"
  //   );
  //   //need to simulate a click
  // });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
  });
});
