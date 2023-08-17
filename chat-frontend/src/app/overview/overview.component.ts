import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ChatroomDto } from '../types';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(private chatService: ChatService) { }
  chats: ChatroomDto[] = []
  ngOnInit(): void {
    this.getChatrooms()
  }
  getChatrooms() {
    this.chatService.getChats().subscribe(c => this.chats = c)
  }


}
