import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
