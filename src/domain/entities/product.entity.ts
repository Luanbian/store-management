import { ItemEntity } from "./item.entity";

export class ProductEntity {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly items: ItemEntity[];
}
