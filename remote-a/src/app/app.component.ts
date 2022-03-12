import { Component } from '@angular/core';
import {MfCommunicationLibService, MessageType, Message} from '@rifo/mf-communication-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-a';

  
  constructor(private mfCommunicationLibService: MfCommunicationLibService){

  }

  sendMessage(){
    debugger
    this.mfCommunicationLibService.emit({type: MessageType.notification, data: 'remote-a'});
  }
}
