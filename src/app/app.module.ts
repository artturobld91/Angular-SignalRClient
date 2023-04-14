import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalRClientComponent } from './signalr-client/signalr-client.component';
import { SignalRChatClientComponent } from './signalr-chat-client/signalr-chat-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalRClientComponent,
    SignalRChatClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
