import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HTTPStatus {
    
    private requestInFlight$: BehaviorSubject<boolean>;
    private statusProgress$: BehaviorSubject<boolean>;
    private statusProgressUpload$: BehaviorSubject<boolean>;
    
    constructor() {
        this.requestInFlight$ = new BehaviorSubject(false);
        this.statusProgress$ = new BehaviorSubject(false);
        this.statusProgressUpload$ = new BehaviorSubject(false);
    }

    setProgressBarUpload(statusProgressUpload: boolean) {
        this.statusProgressUpload$.next(statusProgressUpload);
    }

    getProgressBarUpload(): Observable<boolean> {
        return this.statusProgressUpload$.asObservable();
    }
    
    setProgressBar(statusProgress: boolean) {
        this.statusProgress$.next(statusProgress);
    }

    getProgressBar(): Observable<boolean> {
        return this.statusProgress$.asObservable();
    }
    
    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }

    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}