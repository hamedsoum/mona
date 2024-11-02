import {Injectable} from '@angular/core';
import {SHttpClientService} from '@sh/base';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MAHttpClientService extends SHttpClientService {

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public initialize(): void {
    }
}
