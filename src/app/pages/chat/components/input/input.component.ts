import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  isRecording = false;

  constructor(
    private renderer: Renderer2,
    private chatApiService: ChatApiService,
  ) {}

  ngOnInit() {
    this.isAvaliableBrowser();
    this.initialConfigSpeechRecognition();
  }

  private alertCompatibility() {
    alert('Your browser is not compatible with this application.');
  }

  private isAvaliableBrowser() {
    const currentBrowser = window.navigator.userAgent;
    const disabledBrowsers = ['OPR', 'Firefox'];
    this.isUnavaliableBrowser = disabledBrowsers.some(b => currentBrowser.includes(b)) || (window as any).brave;
    if (this.isUnavaliableBrowser){
      console.log("🚀 ~ file: chat.component.ts:32 ~ ChatComponent ~ isAvaliableBrowser ~ this.isUnavaliableBrowser:", this.isUnavaliableBrowser)
      this.alertCompatibility();
    }
  }

  private initialConfigSpeechRecognition() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'en-EN';
    this.recognition.interimResults = false;

    this.recognition.onresult = (event) => {
      console.log("🚀 ~ file: app.component.ts:20 ~ AppComponent ~ ngOnInit ~ event:", event);
      const result = Array.from(event.results).at(-1);
      if (result){
        this.renderer.setProperty(this.textArea.nativeElement, 'value', result[0].transcript);
      }
    };

    this.recognition.onerror = (e) => {
      console.log(e);
      this.isRecording = false;
    }
  }

  sendToChat() {
    this.chatApiService.sendInput(this.textArea.nativeElement.value);
    this.textArea.nativeElement.value = "";
  }

  Record_Stop() {
    if (this.isUnavaliableBrowser) {
      this.alertCompatibility();
      return;
    }
    if (this.isRecording) {
      this.recognition.abort();
    }
    else {
      this.recognition.start();
    }
    this.isRecording = !this.isRecording;
  }

  changeHeightTextarea() {
    const textareaElem = this.textArea.nativeElement;
    textareaElem.style.height = "5px";
    textareaElem.style.height = (textareaElem.scrollHeight - 27) + "px";
  }

}
