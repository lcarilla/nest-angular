import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: "chats", component: OverviewComponent },
  { path: "chats/:id", component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
