import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalRClientComponent } from './signal-rclient/signal-rclient.component';

const routes: Routes = [
  { path: 'signalR', component: SignalRClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
