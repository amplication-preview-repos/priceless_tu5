import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "name";

export const CardTitle = (record: TCard): string => {
  return record.name?.toString() || String(record.id);
};
