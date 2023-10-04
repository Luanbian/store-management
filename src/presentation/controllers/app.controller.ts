import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { type Order } from "@prisma/client";
import { HttpResponse } from "src/@types/http";
import { NewOrderDto } from "src/main/core/dtos/order.dto";
import { OrderService } from "../../data/services/new.order.service";
import { noContent, ok, serverError } from "../helper/http.helper";
@Controller()
export class AppController {
  constructor(private readonly orderService: OrderService) {}

  @Get("/order")
  getHello(): Promise<Order[]> {
    return this.orderService.getOder();
  }

  @Post("/order")
  async order(@Body(new ValidationPipe()) orderDto: NewOrderDto): Promise<HttpResponse> {
    try {
      const res = await this.orderService.createOrder(orderDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
