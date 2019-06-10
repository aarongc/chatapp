import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Output } from '@angular/core';
import { Chat } from '../models/chat';
import { Direction } from '../models/enums/direction.enum';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['../app.component.sass', './chat-box.component.sass']
})
export class ChatBoxComponent implements OnInit {
  @ViewChild('message', { read: ElementRef, static: true }) private inputMessage: ElementRef;
  @Output() send = new EventEmitter<Chat>();

  model = this.reset();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.setFocus();
  }

  add() {
    const control = new FormControl(this.model.message, Validators.required);

    if (!control.errors) {
      this.send.emit(this.model);
      this.model = this.reset();
    }
  }

  reset(): Chat {
    return new Chat('ako', '', Direction.Right);
  }

  setFocus() {
    this.inputMessage.nativeElement.focus();
  }
}
