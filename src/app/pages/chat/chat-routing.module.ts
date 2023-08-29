import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './layout/chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/chat',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
