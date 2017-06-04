describe("Factory function", function() {

  it("(createEl) should exist", function() {
    expect(typeof createEl).toEqual('function');
  });

  it("createEl([1,2,3]) should return a string", function() {
    let c1 = createEl([1,2,3]);
    expect(typeof c1).toEqual('string')
  });

  it("createEl([1,2,3], 'slider') should return instance of imageSlide object", function() {
    let c1 = createEl([1,2,3], 'slider');
    expect(c1 instanceof imageSlider).toBe(true)
    expect(c1 instanceof offerCard).toBe(false)
  });

  it("createEl([1,2,3], 'card') should return instance of offerCard object", function() {
    let c1 = createEl([1,2,3], 'card');
    expect(c1 instanceof imageSlider).toBe(false)
    expect(c1 instanceof offerCard).toBe(true)
  });

  it("createEl should return new objects when called", function() {

    /*
      This would not be a valid test for code deployed to production
      environment given the tests lack of specificity.

      It is being used for examples at a very high level.  */

    var c1Data = [1,2,3];
    var c2Data = [1,2];

    let c1 = createEl(c1Data, 'card');
    let c2 = createEl(c2Data, 'card');

    expect(c1.data.length).toEqual(c1Data.length);
    expect(c2.data.length).toEqual(c2Data.length);
    expect(c2.data.length).not.toEqual(c1.data.length);

  });

});
