import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";

@Injectable()
export class DbOrder {
  constructor(private readonly db: PrismaService) {}
}
