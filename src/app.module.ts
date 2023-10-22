import { Module } from "@nestjs/common";
import { OrderService } from "./data/services/order.service";
import { ProductService } from "./data/services/product.service";
import { PrismaService } from "./infra/prisma";
import { DbOrder } from "./infra/repository/db.order.table";
import { DbProduct } from "./infra/repository/db.product.table";
import { OrderController } from "./presentation/controllers/order.controller";
import { ProductController } from "./presentation/controllers/product.controller";

@Module({
  imports: [],
  controllers: [OrderController, ProductController],
  providers: [OrderService, PrismaService, DbOrder, ProductService, DbProduct],
})
export class AppModule {}
