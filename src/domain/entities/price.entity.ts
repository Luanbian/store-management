export interface PriceEntityProps {
  id: string;
  value: number;
}
export class PriceEntity {
  readonly id: string;
  readonly value: number;

  private constructor(props: PriceEntityProps) {
    this.id = props.id;
    this.value = props.value;
  }

  public static create(input: PriceEntityProps) {
    return new PriceEntity(input);
  }
}
