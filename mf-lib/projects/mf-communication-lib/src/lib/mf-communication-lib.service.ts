import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export enum MessageType {
  "notification" = "notification"
}

export interface Message<T = any> {
  type: MessageType;
  data?: T;
}

@Injectable({
  providedIn: 'platform'
})
export class MfCommunicationLibService {
  private readonly _mssage = new Subject<any>();
  public readonly message = this._mssage.asObservable();

  emit(message: Message): void {
    this._mssage.next(message);
  }

  on(messageType: MessageType): Observable<Message> {
    return this.message.pipe(filter((message) => message.type === messageType));
  }
}
