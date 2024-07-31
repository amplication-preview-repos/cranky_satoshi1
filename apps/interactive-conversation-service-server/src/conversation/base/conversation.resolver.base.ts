/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Conversation } from "./Conversation";
import { ConversationCountArgs } from "./ConversationCountArgs";
import { ConversationFindManyArgs } from "./ConversationFindManyArgs";
import { ConversationFindUniqueArgs } from "./ConversationFindUniqueArgs";
import { CreateConversationArgs } from "./CreateConversationArgs";
import { UpdateConversationArgs } from "./UpdateConversationArgs";
import { DeleteConversationArgs } from "./DeleteConversationArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { User } from "../../user/base/User";
import { ConversationService } from "../conversation.service";
@graphql.Resolver(() => Conversation)
export class ConversationResolverBase {
  constructor(protected readonly service: ConversationService) {}

  async _conversationsMeta(
    @graphql.Args() args: ConversationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Conversation])
  async conversations(
    @graphql.Args() args: ConversationFindManyArgs
  ): Promise<Conversation[]> {
    return this.service.conversations(args);
  }

  @graphql.Query(() => Conversation, { nullable: true })
  async conversation(
    @graphql.Args() args: ConversationFindUniqueArgs
  ): Promise<Conversation | null> {
    const result = await this.service.conversation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Conversation)
  async createConversation(
    @graphql.Args() args: CreateConversationArgs
  ): Promise<Conversation> {
    return await this.service.createConversation({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Conversation)
  async updateConversation(
    @graphql.Args() args: UpdateConversationArgs
  ): Promise<Conversation | null> {
    try {
      return await this.service.updateConversation({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Conversation)
  async deleteConversation(
    @graphql.Args() args: DeleteConversationArgs
  ): Promise<Conversation | null> {
    try {
      return await this.service.deleteConversation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: Conversation,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Conversation): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
