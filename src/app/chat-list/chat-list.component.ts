import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Messages } from '../messages';
import { Chat } from '../models/chat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.sass']
})
export class ChatListComponent implements OnInit {
  @ViewChild('chat', { read: ElementRef , static: true }) private chatContainer: ElementRef;
  
  messages: Chat[] = [];

  constructor(private chatService: ChatService) {
    this.messages = this.getMessages(Messages);
  }

  getMessages(messages: any) {
    return messages.map((chat: Chat) => new Chat (
      chat.sender,
      chat.message,
      chat.direction
    ));
  }

  onSend(model: Chat) {
    this.chatService.sendMessage(model);
  }

  ngAfterViewChecked() {
    this.scrollDown();
  }

  ngOnInit() {
    this.subscribeToMessages();
  }

  subscribeToMessages() {
    this.chatService.getMessages().subscribe((message: Chat) => {
      this.messages.push(message);
    });
  }

  scrollDown() {
    let container = this.chatContainer.nativeElement;

    container.scrollTop = container.scrollTop + container.scrollHeight;
  }
}
