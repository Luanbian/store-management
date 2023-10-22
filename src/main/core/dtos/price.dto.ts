import { IsNotEmpty, IsNumber } from "class-validator";

export class NewPriceDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;
}
