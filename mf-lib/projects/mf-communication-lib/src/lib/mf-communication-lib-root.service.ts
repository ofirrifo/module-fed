import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';

export enum RootMessageType {
  "notification" = "notification"
}

export interface RootMessage<T = any> {
  type: RootMessageType;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class RootMfCommunicationLibService {
  private readonly _mssage = new Subject<any>();
  public readonly message = this._mssage.asObservable().pipe(shareReplay());

  emit(message: RootMessage): void {
    this._mssage.next(message);
  }

  on(messageType: RootMessageType): Observable<RootMessage> {
    return this.message.pipe(filter((message) => message.type === messageType));
  }
}
