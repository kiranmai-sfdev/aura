// Measure the cost of rendering components.

function renderJQueryTableComponentTest(count, validate) {
  var descriptor = this.api.isLockerEnabled
    ? "markup://lockerPerformance:testJQueryTableSecure"
    : "markup://lockerPerformance:testJQueryTable";

  var config = { descriptor: descriptor };

  var cmp = this.api.create(config);

  var els;
  while (count--) {
    els = this.api.render(cmp);
  }

  if (validate) {
    var expected = 120;
    var table = els[0];
    var actual = table.querySelectorAll("td").length;
    this.api.assert(actual === expected, expected, actual);
  }

  cmp.destroy();
}
