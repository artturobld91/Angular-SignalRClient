import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalRClientComponent } from './signalr-client/signalr-client.component';
import { SignalRChatClientComponent } from './signalr-chat-client/signalr-chat-client.component';

const routes: Routes = [
  { path: '', component: SignalRChatClientComponent},
  { path: 'signalR', component: SignalRClientComponent },
  { path: 'signalRChat', component: SignalRChatClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
