import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['../app.component.sass', './message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() chat;

  constructor() { }

  ngOnInit() {
  }

}
