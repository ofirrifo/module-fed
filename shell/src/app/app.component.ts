import { Component } from '@angular/core';
import {MfCommunicationLibService, MessageType, Message} from '@rifo/mf-communication-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private mfCommunicationLibService: MfCommunicationLibService){
    this.mfCommunicationLibService.on(MessageType.notification).subscribe((message: Message) => {
      alert(message.data);
    })
  }
}
