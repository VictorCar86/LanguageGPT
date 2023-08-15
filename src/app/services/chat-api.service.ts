import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  chat: ChatStructure[] = [
    {
      role: 'bot',
      content: 'Hi! how can I assist you today?'
    },
    {
      role: 'user',
      content: 'Pichi perro'
    },
  ];

  constructor() { }
}
