import { Module } from "@nestjs/common";
import { OrderService } from "./data/services/new.order.service";
import { ProductService } from "./data/services/new.product.service";
import { PrismaService } from "./infra/prisma";
import { DbOrder } from "./infra/repository/db.order.table";
import { DbProduct } from "./infra/repository/db.product.table";
import { AppController } from "./presentation/controllers/app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [OrderService, PrismaService, DbOrder, ProductService, DbProduct],
})
export class AppModule {}
