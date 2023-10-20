import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
}

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
  clientName: string;

  @IsNotEmpty({
    message: "Quantidade não pode ser vazio",
  })
  @IsNumber()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  product: string;

  @IsString()
  @IsNotEmpty()
  value: string;

  @IsNotEmpty({
    message: "Selecione a situação do pagamento",
  })
  paymentStatus: PaymentStatus;

  @IsString()
  clientPhone: string;
  paymentVoucher: string;
  paymentMethod: string;

  paidAt: Date;
}
