import { expect } from "chai";
import { GildedRose, Item } from "../app/gilded-rose";

describe("Gilded Rose", () => {
  it("It should diminish sellIn and quality at the end of the day for a normal item ", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });

  it("It should increase the quality of Aged Brie while days pass", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(1);
  });

  it("It should handle correctly Backstage passes", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);

    items = gildedRose.updateQuality(); // Now sellIn is 10
    expect(items[0].quality).to.equal(13);

    items = gildedRose.updateQuality(); // Now sellIn is 9
    expect(items[0].quality).to.equal(15);
  });

  it("An item would never have a negative quality value", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("Should handle Conjured items correctly", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(2);
    expect(items[0].quality).to.equal(4); // Quality decreases twice as fast
  });
});
