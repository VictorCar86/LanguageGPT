import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynthesisSpeakingService {

  private utteranceConfig: UtteranceConfig = {
    voice: speechSynthesis.getVoices()[0],
    text: '',
    rate: 1,
    pitch: 1,
    volume: 1,
  };

  speak(inputText?: string) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = inputText ?? this.utteranceConfig.text;
    utterance.voice = this.utteranceConfig.voice;
    utterance.rate = this.utteranceConfig.rate;
    utterance.pitch = this.utteranceConfig.pitch;
    utterance.volume = this.utteranceConfig.volume;

    speechSynthesis.speak(utterance);
  }

  voicesAvaliable() {
    return speechSynthesis.getVoices();
  }

  /* CONFIG */
  get config() {
    return this.utteranceConfig;
  }
  set config(settings) {
    this.utteranceConfig = settings;
  }

  /* VOICE */
  get voice() {
    return this.utteranceConfig.voice;
  }
  set voice(newVoice) {
    this.utteranceConfig.voice = newVoice;
  }

  /* TEXT */
  set text(newText: string) {
    this.utteranceConfig.text = newText;
  }

  /* RATE */
  get rate() {
    return this.utteranceConfig.rate;
  }
  set rate(newRate) {
    this.utteranceConfig.rate = newRate;
  }

  /* PITCH */
  get pitch() {
    return this.utteranceConfig.pitch;
  }
  set pitch(newPitch) {
    this.utteranceConfig.pitch = newPitch;
  }

  /* PITCH */
  get volume() {
    return this.utteranceConfig.pitch;
  }
  set volume(newVolume) {
    this.utteranceConfig.pitch = newVolume;
  }
}
