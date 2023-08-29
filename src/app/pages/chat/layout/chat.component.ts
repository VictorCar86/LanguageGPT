import { Component } from '@angular/core';
import { SynthesisSpeakingService } from 'src/app/services/synthesis-speaking.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  constructor(
    private synthesis: SynthesisSpeakingService,
  ){}

  configModal = false;
  languageOptions = this.synthesis.voicesAvaliable();

}