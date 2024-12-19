import { GildedRose, Item } from "./gilded-rose";

const items = [
  new Item("Aged Brie", 10, 20),
  new Item("Normal Item", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
];

const gildedRose = new GildedRose(items);
console.log("Before update:", items);
gildedRose.updateQuality();
console.log("After update:", items);
