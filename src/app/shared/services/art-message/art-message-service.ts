import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArtMessageService {
    private subject = new Subject<any>();

    sendMessage(message: any) {
        this.subject.next(message);
    }

    receiveMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
