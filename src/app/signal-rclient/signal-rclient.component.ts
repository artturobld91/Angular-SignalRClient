import { Component, OnDestroy, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';  

@Component({
  selector: 'app-signal-rclient',
  templateUrl: './signal-rclient.component.html',
  styleUrls: ['./signal-rclient.component.css']
})

//TODO: Log messages received from server into UI 

export class SignalRClientComponent implements OnInit {

  receivedMessages = new Array<string>();

  constructor() { }
  
  ngOnInit(): void {
    //Creating connection using SignalR microsoft package
    const connection = new signalR.HubConnectionBuilder()  
      .configureLogging(signalR.LogLevel.Information)  
      .withUrl('https://localhost:7118/' + 'Hub')  
      .build();  
  
    //Starting connection with Server
    connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  
  
    //Receiving messages from Server
    connection.on("BroadcastMessage", (username: string, message: string) => {
      console.info('Message Received: ' + username + ' | ' + message);
      this.receivedMessages.push(`Message Received: ${username} | ${message}`);
    }); 
  }

}
