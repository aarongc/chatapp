import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MessageComponent } from './message/message.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
