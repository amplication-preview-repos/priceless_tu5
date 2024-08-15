import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
