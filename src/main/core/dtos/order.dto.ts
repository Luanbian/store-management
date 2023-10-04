import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class NewOrderDto {
  @MinLength(3, {
    message: "Nome muito curto, minimo de 3 letras",
  })
  @MaxLength(20, {
    message: "Nome muito longo, máximo de 20 letras",
  })
  @IsString()
  @IsNotEmpty({
    message: "Nome não pode ser vazio",
  })
  ClientName: string;

  @IsNotEmpty({
    message: "Quantidade não pode ser vazio",
  })
  @IsNumber()
  Quantity: number;

  @IsString()
  @IsNotEmpty({})
  ProductType: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  paymentStatus: string;
}
