import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { HttpResponse } from "src/@types/http";
import { ProductService } from "src/data/services/new.product.service";
import { NewOrderDto } from "src/main/core/dtos/order.dto";
import { NewProductDto } from "src/main/core/dtos/product.dto";
import { OrderService } from "../../data/services/new.order.service";
import { noContent, ok, serverError } from "../helper/http.helper";

@Controller()
export class AppController {
  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

  @Post("/order")
  async order(@Body(new ValidationPipe()) orderDto: NewOrderDto): Promise<HttpResponse> {
    try {
      const res = await this.orderService.perform(orderDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }

  @Post("/product")
  async product(@Body(new ValidationPipe()) productDto: NewProductDto): Promise<HttpResponse> {
    try {
      const res = await this.productService.perform(productDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
