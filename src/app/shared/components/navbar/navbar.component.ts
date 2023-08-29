import { Component, EventEmitter, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onShowModal = new EventEmitter<boolean>();

  showModal() {
    this.onShowModal.emit(true);
  }

}
