import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
