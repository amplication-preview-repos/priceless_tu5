import { JsonValue } from "type-fest";

export type Card = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  updatedAt: Date;
};
