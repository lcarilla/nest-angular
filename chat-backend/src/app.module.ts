import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DataBaseModule } from './database.module';
import { MessageModule } from './message/message.module';
import { ChatroomModule } from './chatroom/chatroom.module';

@Module({
  imports: [DataBaseModule, MessageModule, ChatroomModule],
  providers: [AppService],
})
export class AppModule { }
