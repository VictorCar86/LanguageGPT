import { Component, AfterViewChecked } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements AfterViewChecked {

  conversation = this.chatApiService.chat;

  constructor(
    private chatApiService: ChatApiService,
  ) {}

  ngAfterViewChecked() {
    console.log(this.conversation);
  }
}
