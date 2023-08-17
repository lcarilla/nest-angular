import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io"
import { ChatroomService } from "src/chatroom/chatroom.service";
import { MessageCreateDto } from "src/message/dto";
@WebSocketGateway({ cors: true })
export class MessageGateway {
    constructor(private chatroomService: ChatroomService) { }

    @WebSocketServer()
    server: Server

    @SubscribeMessage('message')
    async onMessage(@MessageBody() body: MessageCreateDto) {

        this.server.emit(String(body.roomId), {
            ...await this.chatroomService.addMessage(body)
        })
    }
}