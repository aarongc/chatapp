import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Messages } from '../messages';
import { Chat } from '../models/chat';
import { Direction } from '../models/enums/direction.enum';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.sass']
})
export class ChatListComponent implements OnInit {
  @ViewChild('chat', { read: ElementRef , static: true }) chatContainer: ElementRef;
  
  messages = this.getMessages(Messages);
  
  getMessages(messages) {
    return messages.map(chat => <Chat> {
      sender: chat.sender,
      message: chat.message,
      direction: chat.direction
    });
  }

  onSend(): void {
    let chat = <Chat> {
      sender: 'Anthony',
      message: 'Just got hired here. \n What\'s up?!',
      direction: Direction.Left
    };
    
    this.messages.push(chat);
    this.scrollDown();
  }

  scrollDown(): void {
    let container = this.chatContainer.nativeElement;

    container.scrollIntoView();
  }

  constructor() { }

  ngOnInit() {
   
  }
  
}
