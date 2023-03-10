describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should add a new row to servers table", function () {
    submitServerInfo();
    updateServerTable();
    let serverTable = document.querySelectorAll("#serverTable tbody tr");

    expect(serverTable.length).toEqual(1);
    expect(serverTable[0].childNodes[0].innerText).toEqual("Alice");
  });

  afterEach(function () {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
