import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DialogComponent,
    SettingsModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    DialogComponent,
    SettingsModalComponent,
  ]
})
export class SharedModule { }
