import { Component } from '@angular/core';
import {MfCommunicationLibService, MessageType, RootMfCommunicationLibService, RootMessageType} from '@rifo/mf-communication-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-a';

  
  constructor(private mfCommunicationLibService: MfCommunicationLibService, private rootMfCommunicationLibService: RootMfCommunicationLibService){

  }

  sendMessageViaPlatform(): void{
    this.mfCommunicationLibService.emit({type: MessageType.notification, data: 'message from remote-a'});
  }

  sendMessageViaRoot(): void{
    this.rootMfCommunicationLibService.emit({type: RootMessageType.notification, data: 'message from remote-a'});
  }
}
