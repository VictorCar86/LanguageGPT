import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    DialogComponent,
  ]
})
export class SharedModule { }
