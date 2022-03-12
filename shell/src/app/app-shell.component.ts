import { Component } from '@angular/core';
import {MfCommunicationLibService, MessageType, Message, RootMfCommunicationLibService, RootMessageType, RootMessage} from '@rifo/mf-communication-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentShell {
  message = '';

  constructor(private mfCommunicationLibService: MfCommunicationLibService, private rootMfCommunicationLibService: RootMfCommunicationLibService){
    
    this.mfCommunicationLibService.on(MessageType.notification).subscribe((message: Message) => {
      this.message = message.data;
      debugger
      setTimeout(() => {
        this.message = '';
      }, 1500);
    });

    this.rootMfCommunicationLibService.on(RootMessageType.notification).subscribe((message: RootMessage) => {
      this.message = message.data;
      debugger
      setTimeout(() => {
        this.message = '';
      }, 1500);
    });
  }
}
