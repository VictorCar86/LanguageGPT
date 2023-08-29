import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './layout/chat.component';
import { InputComponent } from './components/input/input.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [
    ChatComponent,
    InputComponent,
    ConversationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule,
  ],
})
export class ChatModule { }
