import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chatroom } from './chatroom.entitiy';
import { Repository } from 'typeorm';
import { ChatroomDto } from './dto';
import { ChatroomMapper } from './chatroom.mapper';
import { Message } from 'src/message/message.entitiy';
import { MessageCreateDto } from 'src/message/dto';

@Injectable()
export class ChatroomService {
    constructor(
        @InjectRepository(Chatroom)
        private chatroomRepository: Repository<Chatroom>,
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        private readonly chatroomMapper: ChatroomMapper
    ) { }
    async createChatroom(chatroomDto: ChatroomDto) {
        return this.chatroomMapper.dbToWeb(
            await this.chatroomRepository.save(
                this.chatroomMapper.webToDb(chatroomDto)
            )
        )
    }
    async getChatrooms() {
        return (await this.chatroomRepository.find({ loadEagerRelations: false })).map(
            c => this.chatroomMapper.dbToWeb(c)
        )
    }

    async getChatroom(id: number) {
        return this.chatroomMapper.dbToWebFull(
            await this.chatroomRepository.findOne({ where: { id: id } })
        )
    }
    async addMessage(message: MessageCreateDto) {
        const c = await this.chatroomRepository.findOne({
            where: { id: message.roomId },
            loadEagerRelations: false
        })
        const msgDb = this.chatroomMapper.msgCreateToMsgDb(message)
        msgDb.chatroom = c
        return this.chatroomMapper.msgDbToMsgDto(
            await this.messageRepository.save(msgDb)
        )
    }
}
