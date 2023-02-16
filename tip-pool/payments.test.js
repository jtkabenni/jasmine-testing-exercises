describe("payments testing", function () {
  beforeEach(function () {
    billAmtInput.value = 300;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("should add payment object to allPayments", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(2);
  });

  it("will return undefined with negative or empty input", function () {
    billAmtInput.value = -300;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(createCurPayment()).toBeUndefined();
    billAmtInput.value = "";
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(createCurPayment()).toBeUndefined();
  });

  it("will append new row to payment table", function () {
    billAmtInput.value = 300;
    tipAmtInput.value = 5;
    let curPayment = createCurPayment();

    appendPaymentTable(curPayment);

    let paymentTable = document.querySelectorAll("#paymentTable tbody tr");
    expect(paymentTable.length).toEqual(2);
  });

  it("will update row in summary table", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    let summaryTable = document.querySelectorAll("#summaryTable tbody tr");
    expect(summaryTable.length).toEqual(1);

    expect(summaryTable[0].children[0].innerHTML).toEqual("$400");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    console.log(summaryTds);
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
