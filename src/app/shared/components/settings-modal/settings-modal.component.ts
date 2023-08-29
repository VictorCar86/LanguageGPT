import { Component, Output, EventEmitter } from '@angular/core';
import { SynthesisSpeakingService } from 'src/app/services/synthesis-speaking.service';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent {

  @Output() onCloseModal = new EventEmitter<boolean>();

  constructor(
    private synthesis: SynthesisSpeakingService,
  ){}

  showOptions = false;
  voiceOptions: SpeechSynthesisVoice[] | any[] = [];
  currentVoice = this.synthesis.voice;

  showVoiceOptions() {
    this.showOptions = !this.showOptions;
    this.voiceOptions = this.synthesis.voicesAvaliable;
  }

  changeLanguage(voice: SpeechSynthesisVoice) {
    this.onCloseModal.emit(false);
    this.synthesis.voice = voice;
  }

}
