import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameModeServiceBase } from "./base/gameMode.service.base";

@Injectable()
export class GameModeService extends GameModeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
