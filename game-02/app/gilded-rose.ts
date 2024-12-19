export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // Sulfuras never decreases in quality or has to be sold
          break;
        case "Conjured":
          this.updateConjuredItem(item);
          break;
        default:
          this.updateNormalItem(item);
      }
    });
    return this.items;
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality++;

      if (item.sellIn <= 10) {
        item.quality++;
      }

      if (item.sellIn <= 5) {
        item.quality++;
      }

      item.sellIn--;

      if (item.sellIn < 0) {
        item.quality = 0;
      }
    }
  }

  private updateConjuredItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 2;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 2;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
  }
}
