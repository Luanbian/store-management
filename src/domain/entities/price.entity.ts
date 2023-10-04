import { ItemEntity } from "./item.entity";

export class PriceEntity {
  readonly id: number;
  readonly value: number;
  readonly items: ItemEntity[];
}
