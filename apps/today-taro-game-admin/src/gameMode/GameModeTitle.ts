import { GameMode as TGameMode } from "../api/gameMode/GameMode";

export const GAMEMODE_TITLE_FIELD = "name";

export const GameModeTitle = (record: TGameMode): string => {
  return record.name?.toString() || String(record.id);
};
