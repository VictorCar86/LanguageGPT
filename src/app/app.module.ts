import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './pages/chat/chat.component';
import { InputComponent } from './pages/chat/components/input/input.component';
import { ConversationComponent } from './pages/chat/components/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    InputComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
