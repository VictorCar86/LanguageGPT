import { Component, ElementRef, ViewChild, AfterContentChecked, Output, EventEmitter, NgZone, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewChecked {

  @Input() title = 'lorem ipsum';
  @Output() onCloseModal = new EventEmitter<boolean>();
  @ViewChild('dialog') dialogElem!: ElementRef<HTMLDialogElement>;

  ngAfterViewChecked() {
    const dialog = this.dialogElem;
    if (dialog){
      dialog.nativeElement.showModal();
    }
  }

  closeModal() {
    this.onCloseModal.emit(false);
  }

}
