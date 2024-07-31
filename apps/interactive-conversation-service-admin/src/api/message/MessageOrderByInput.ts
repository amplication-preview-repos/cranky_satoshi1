import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
