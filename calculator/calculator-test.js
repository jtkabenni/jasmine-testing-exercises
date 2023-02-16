describe("calculate monthly rate tests", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({
        amount: "100000",
        years: "10",
        rate: "4.5",
      })
    ).toEqual("1036.38");

    expect(
      calculateMonthlyPayment({ amount: "4500", years: "20", rate: "4.5" })
    ).toEqual("28.47");
  });
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({
      amount: "100000",
      years: "10",
      rate: "4.5",
    }).split(".")[1].length
  ).toEqual(2);
});
