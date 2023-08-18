import { Injectable } from '@angular/core';
import { SynthesisSpeakingService } from './synthesis-speaking.service';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  chat: ChatStructure[] = [
    {
      role: 'bot',
      content: 'Hi! how can I assist you today?'
    },
  ];

  constructor(
    private synthesis: SynthesisSpeakingService,
  ) { }

  sendInput(inputValue: string) {
    this.chat.push({ role: 'user', content: inputValue });
    this.chat.push({ role: 'bot', content: '_TEST_' });
    this.synthesis.speak(inputValue);
    setTimeout(() => window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight }));
  }
}
