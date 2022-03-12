import { Component } from '@angular/core';
import {MfCommunicationLibService, MessageType, Message} from '@rifo/mf-communication-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = '';

  constructor(private mfCommunicationLibService: MfCommunicationLibService){
    this.mfCommunicationLibService.on(MessageType.notification).subscribe((message: Message) => {
      this.message = message.data;
      setTimeout(() => {
        this.message = '';
      }, 1000);
    })
  }
}
