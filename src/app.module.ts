import { Module } from "@nestjs/common";
import { AppService } from "./data/services/app.service";
import { PrismaService } from "./infra/prisma";
import { AppController } from "./presentation/controllers/app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
