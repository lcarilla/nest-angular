import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ChatroomDto, ChatroomFullDto } from './dto';
import { ChatroomService } from './chatroom.service';
import { ApiResponse } from '@nestjs/swagger';


@Controller('chats')
export class ChatroomController {
    constructor(private chatroomService: ChatroomService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ type: ChatroomDto })
    postChat(@Body() chatroomDto: ChatroomDto) {
        return this.chatroomService.createChatroom(chatroomDto)
    }
    @Get()
    @ApiResponse({ type: [ChatroomDto], status: HttpStatus.OK })
    getChats(): Promise<ChatroomDto[]> {
        return this.chatroomService.getChatrooms()
    }
    @Get(':id')
    @ApiResponse({ type: ChatroomFullDto, status: HttpStatus.OK })
    getChat(@Param('id') id: number) {
        return this.chatroomService.getChatroom(id)
    }
}
