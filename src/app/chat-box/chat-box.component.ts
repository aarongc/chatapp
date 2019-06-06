import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['../app.component.sass', './chat-box.component.sass']
})
export class ChatBoxComponent implements OnInit {
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
