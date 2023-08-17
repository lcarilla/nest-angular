import { plainToClass } from "class-transformer";
import { ChatroomDto, ChatroomFullDto } from "./dto";
import { Chatroom } from "./chatroom.entitiy";
import { Injectable } from "@nestjs/common";
import { MessageCreateDto, MessageDto } from "src/message/dto";
import { Message } from "src/message/message.entitiy";

@Injectable()
export class ChatroomMapper {
    webToDb(dto: ChatroomDto) {
        return plainToClass(Chatroom, dto)
    }
    dbToWeb(chatroom: Chatroom) {
        return plainToClass(ChatroomDto, chatroom, { excludeExtraneousValues: true })
    }
    dbToWebFull(chatroom: Chatroom) {
        return plainToClass(ChatroomFullDto, chatroom)
    }
    msgCreateToMsgDb(message: MessageCreateDto) {
        const msg: Message = new Message()
        msg.id = undefined
        msg.content = message.content
        msg.date = new Date()
        msg.sender = message.sender
        return msg
    }
    msgDbToMsgDto(message: Message) {
        return plainToClass(MessageDto, message, { excludeExtraneousValues: true })
    }
}