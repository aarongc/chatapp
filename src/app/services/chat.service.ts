import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message: Chat) {
      this.socket.emit('new-message', message);
    }

    public getMessages = () => {
      return Observable.create((observer) => {
          this.socket.on('new-message', (message: Chat) => {
              observer.next(message);
          });
      });
  }
}