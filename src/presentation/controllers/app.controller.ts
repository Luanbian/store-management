import { Controller, Get } from "@nestjs/common";
import { type Order } from "@prisma/client";
import { AppService } from "../../data/services/app.service";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/order")
  getHello(): Promise<Order[]> {
    return this.appService.getOder();
  }
}
