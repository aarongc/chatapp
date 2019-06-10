import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Chat } from '../models/chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['../app.component.sass', './message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() chat: Chat;

  constructor() { }

  ngOnInit() {
  }

}
