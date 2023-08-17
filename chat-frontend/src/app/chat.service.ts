import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, Subject, tap } from 'rxjs';
import { ChatroomDto, ChatroomFullDto, MessageCreateDto, MessageDto } from './types';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getChats(): Observable<ChatroomDto[]> {
    return this.http.get<ChatroomDto[]>(this.url + "/chats")
      .pipe(
        tap(_ => console.log('fetched chats')),
      );
  }
  getChat(id: number): Observable<ChatroomFullDto> {
    return this.http.get<ChatroomFullDto>(this.url + "/chats/" + id)
      .pipe(
        tap(_ => console.log('fetched chat yay bruh this log do be bloated')),
      );
  }
  public message$: Subject<MessageCreateDto | MessageDto> = new ReplaySubject();

  socket = io('http://localhost:3000');

  public sendMessage(message: MessageCreateDto) {
    this.socket.emit('message', message);
  }

  public getNewMessage = (chatId: string) => {
    this.socket.on(chatId, (message: MessageDto) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };
}
