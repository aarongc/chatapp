import { Component, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Output } from '@angular/core';
import { Chat } from '../models/chat';
import { Direction } from '../models/enums/direction.enum';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['../app.component.sass', './chat-box.component.sass']
})
export class ChatBoxComponent {
  model = this.reset();

  @ViewChild('message', { read: ElementRef, static: true }) private inputMessage: ElementRef;
  @Output() send = new EventEmitter<Chat>();

  ngAfterViewChecked() {
    this.setFocus();
  }

  add() {
    if (this.model.message) {
      this.send.emit(this.model);
      this.model = this.reset();
    }
  }

  getUserName(): string {
    return localStorage.getItem("currentUser") || 'ako';
  }

  reset(): Chat {
    return new Chat(this.getUserName(), '', Direction.Right);
  }

  setFocus() {
    this.inputMessage.nativeElement.focus();
  }
}
