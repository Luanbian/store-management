interface ProductEntityProps {
  id: string;
  name: string;
  type: string;
}
export class ProductEntity {
  readonly id: string;
  readonly name: string;
  readonly type: string;

  constructor(props: ProductEntityProps) {
    this.id = props.id;
    this.name = props.name;
    this.type = props.type;
  }

  public static create(input: ProductEntityProps) {
    return new ProductEntity(input);
  }
}
