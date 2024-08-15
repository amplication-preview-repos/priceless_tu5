import { GameModeWhereInput } from "./GameModeWhereInput";
import { GameModeOrderByInput } from "./GameModeOrderByInput";

export type GameModeFindManyArgs = {
  where?: GameModeWhereInput;
  orderBy?: Array<GameModeOrderByInput>;
  skip?: number;
  take?: number;
};
