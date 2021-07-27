const {Shop, Item} = require("../src/gilded_rose");

// describe("Gilded Rose", function() {
//   it("should foo", function() {
//     const gildedRose = new Shop([new Item("foo", 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toBe("fixme");
//   });
// });


describe("Normal Item", () => {
  it("should decrease it's Quality by 1 each day", () => {
    const gildedRose = new Shop([new Item("normal", 10, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(9);
  });
});
