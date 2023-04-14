import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-signalr-chat-client',
  templateUrl: './signalr-chat-client.component.html',
  styleUrls: ['./signalr-chat-client.component.css']
})
export class SignalRChatClientComponent implements OnInit {

  @ViewChild('message') message!: ElementRef;
  
  public receivedMessages = new Array<string>();
  public receivedMessagesRepo = new Array<Message>();
  public currentChatter: string = 'ArtturoBld';
  
  // Creating connection using SignalR microsoft package
  public connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Information)  
  .withUrl('https://localhost:7187/' + 'chatHub')
  .withAutomaticReconnect()
  .build();

  constructor() { }

  ngOnInit(): void {
    // Starting connection with Server
    this.connection.start()
      .then(() => {
        console.log('SignalR Connected!');
        this.onConnected();
      }).catch(function (err) {  
      return console.error(err.toString());  
    });  
  
    // Receiving messages from Server
    // Note: This method name should be the same as declared in the SignalR Hub code.
    this.connection.on("ReceivedMessage", (senderName: string, text: string, sendAt: Date) => {
      console.info('Message Received: ' + senderName + ' | ' + text + ' | ' + sendAt);
      this.receivedMessages.push(`Message Received: ${senderName} | ${text} | ${sendAt}`);
      const MESSAGE_CONTENT = <Message>{
        name: senderName,
        messageContent: text,
        sentAt: sendAt
      };
      this.receivedMessagesRepo.push(MESSAGE_CONTENT);
    }); 
  }

  public onSendMessage(event: Event): void {
    console.log('Message Sent');
    console.log(this.message.nativeElement.value);
    this.connection.send('SendMessage', this.currentChatter, this.message.nativeElement.value)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public onConnected(): void {
    this.connection.invoke("setName", this.currentChatter);
  }

}

interface Message {
  name: string,
  messageContent: string,
  sentAt: Date
}
