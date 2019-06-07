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
    return messages.map((chat: Chat) => new Chat (
      chat.sender,
      chat.message,
      chat.direction
    ));
  }

  onSend(): void {
    let chat = new Chat (
      'Anthony',
      'Just got hired here. \n What\'s up?!',
      Direction.Left
    );
    
    this.messages.push(chat);
  }

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.scrollDown();
  }

  scrollDown(): void {
    let container = this.chatContainer.nativeElement;

    container.scrollTop = container.scrollTop + container.scrollHeight;
  }
}
