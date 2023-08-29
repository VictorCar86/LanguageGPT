import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynthesisSpeakingService {

  text = '';
  rate = 1;
  pitch = 1;
  volume = 1;
  voice = speechSynthesis.getVoices()[0];
  voicesAvaliable!: SpeechSynthesisVoice[];

  constructor(){
    speechSynthesis.onvoiceschanged = () => {
      this.voicesAvaliable = speechSynthesis.getVoices();
      console.log(this.voicesAvaliable);
    };
  }

  speak(inputText?: string) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = inputText ?? this.text;
    utterance.voice = this.voice;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.volume = this.volume;

    speechSynthesis.speak(utterance);
    speechSynthesis.onvoiceschanged
  }

}
