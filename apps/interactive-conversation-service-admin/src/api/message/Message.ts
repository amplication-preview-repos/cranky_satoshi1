import { Conversation } from "../conversation/Conversation";

export type Message = {
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
};
