import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @ViewChild('textarea') textArea!: ElementRef<HTMLTextAreaElement>;
  private recognition!: SpeechRecognition;
  private isUnavaliableBrowser = true;
  private soundsUrl = '../../../../../assets/sounds';

  isRecording = false;

  constructor(
    private zone: NgZone,
    private chatApiService: ChatApiService,
  ) {}

  ngOnInit() {
    this.isAvaliableBrowser();
    if (!this.isUnavaliableBrowser){
      this.initialConfigSpeechRecognition();
    }
  }

  private alertCompatibility() {
    alert('Your browser is not compatible with this application.');
  }

  private isAvaliableBrowser() {
    const currentBrowser = window.navigator.userAgent;
    const disabledBrowsers = ['OPR', 'Firefox'];
    const avaliable = disabledBrowsers.some(b => currentBrowser.includes(b)) || (navigator as any).brave;
    this.isUnavaliableBrowser = avaliable;
  }

  private initialConfigSpeechRecognition() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'en-EN';
    this.recognition.interimResults = false;

    this.recognition.onresult = (event) => {
      const result = Array.from(event.results).at(-1);
      if (result) {
        new Audio(`${this.soundsUrl}/sent.mp3`).play();
        this.chatApiService.sendInput(result[0].transcript);
        this.zone.run(() => this.closeRecording());
      }
    };

    this.recognition.onerror = (e) => {
      console.error(e);
      this.zone.run(() => this.closeRecording());
    }
  }

  private closeRecording() {
    this.isRecording = false;
    this.recognition.stop();
  }

  sendTextareaValue(event?: Event) {
    event?.preventDefault();
    const value = this.textArea.nativeElement.value;
    if (!value) return;
    this.chatApiService.sendInput(value);
    this.textArea.nativeElement.value = "";
    this.changeHeightTextarea();
  }

  Record_Stop() {
    if (this.isUnavaliableBrowser) {
      this.alertCompatibility();
      return;
    }
    if (!this.isRecording) {
      new Audio(`${this.soundsUrl}/record.mp3`).play();
      this.recognition.start();
    }
    else {
      new Audio(`${this.soundsUrl}/aborted.mp3`).play();
      this.recognition.stop();
    }
    this.isRecording = !this.isRecording;
  }

  changeHeightTextarea() {
    const textareaElem = this.textArea.nativeElement;
    textareaElem.style.height = "5px";
    textareaElem.style.height = (textareaElem.scrollHeight - 27) + "px";
  }

}
