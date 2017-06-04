describe("Factory function W/ Currying", function() {

  it("(createElC) should exist", function() {
    expect(typeof createElC).toEqual('function');
  });

  it("createElC() should return a function", function() {
    let c1 = createElC();
    expect(typeof c1).toEqual('function')
  });

  it("createElC('slider') should return a function", function() {
    let c1 = createElC('slider');
    expect(typeof c1).toEqual('function')
  });

  it("createElC('card') should return a function", function() {
    let c1 = createElC('slider');
    expect(typeof c1).toEqual('function')
  });

  it("createElC('slider')([1,2,3]) should return instance of imageSlide object", function() {
    let c1 = createElC('slider')([1,2,3]);
    expect(c1 instanceof imageSlider).toBe(true)
    expect(c1 instanceof offerCard).toBe(false)
  });

  it("createElC('card')([1,2,3]) should return instance of offerCard object", function() {
    let c1 = createElC('card')([1,2,3]);
    expect(c1 instanceof imageSlider).toBe(false)
    expect(c1 instanceof offerCard).toBe(true)
  });

  it("createElC should return new objects when called", function() {

    /*
      This would not be a valid test for code deployed to production
      environment given its lack of specificity.
      It is being used for examples at a very high level.  */

    var c1Data = [1,2,3];
    var c2Data = [1,2];

    let c1 = createElC('card')(c1Data);
    let c2 = createElC('card')(c2Data);

    expect(c1.data.length).toEqual(c1Data.length);
    expect(c2.data.length).toEqual(c2Data.length);
    expect(c2.data.length).not.toEqual(c1.data.length);

  });

});
