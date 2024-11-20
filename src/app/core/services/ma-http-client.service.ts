import {Injectable} from '@angular/core';
import {SHttpClientService} from '../../../../../sh-ng-lib/dist/sh-base';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MAHttpClientService extends SHttpClientService {

    readonly apiBaseURL = 'localhost'

    constructor(protected httpClient: HttpClient) {
        super(httpClient, 'localhost:8080');
    }

    public initialize(): void {
    }
}
