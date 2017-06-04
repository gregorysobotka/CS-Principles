describe("Currying function", function() {

  it("(add) should be a function", function() {
    expect(typeof add).toEqual('function')
  });

  it("add(5) should return a function", function() {
    expect(typeof add(5)).toEqual('function')
  });

  it("add(5)(5) should return int", function() {
    expect(Number.isInteger(add(5)(5))).toBe(true)
  });

  it("add(5)(5) should return Number(int) 10", function() {
    expect(typeof add(5)(5)).toEqual('number')
    expect(add(5)(5)).toBe(10)
  });

  var addFiveTo = add(5);

  it("var addFiveTo = add(5) should be a re-usable function that returns n + 5 when called", function() {
    expect(addFiveTo(5)).toBe(10)
    expect(addFiveTo(10)).toBe(15)
    expect(addFiveTo(15)).toBe(20)
  });

});
