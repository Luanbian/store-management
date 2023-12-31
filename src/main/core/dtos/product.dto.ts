import { IsNotEmpty, IsString } from "class-validator";

export class NewProductDto {
  @IsString()
  @IsNotEmpty({
    message: "O produto tem que ter um nome",
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: "O Produto tem que ser de algum tipo",
  })
  type: string;
}
