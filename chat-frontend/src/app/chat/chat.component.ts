import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatroomFullDto, MessageCreateDto, MessageDto } from '../types';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService,
    private route: ActivatedRoute) { }
  id: string | undefined | number;
  chat: ChatroomFullDto | undefined
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.listenToChat()
    this.loadChat()
  }
  listenToChat() {
    this.chatService.getNewMessage(this.id as string).subscribe((m) => {
      this.chat?.messages.push(m as MessageDto)
    })
  }
  loadChat() {
    this.chatService.getChat(this.id as number).subscribe(
      c => this.chat = c
    )
  }
  onEnter(e: Event) {
    const message: MessageCreateDto = {
      roomId: this.id as number,
      sender: "bruh",
      content: (e.target as HTMLInputElement).value
    }
    this.chatService.sendMessage(message)
  }
}
