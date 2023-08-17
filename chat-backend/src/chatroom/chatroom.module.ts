import { Module } from '@nestjs/common';
import { ChatroomController } from './chatroom.controller';
import { ChatroomService } from './chatroom.service';
import { Chatroom } from './chatroom.entitiy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatroomMapper } from './chatroom.mapper';
import { MessageGateway } from './chatroom.gateway';
import { MessageModule } from 'src/message/message.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chatroom]), MessageModule],
  controllers: [ChatroomController],
  providers: [ChatroomService, ChatroomMapper, MessageGateway]
})
export class ChatroomModule { }
