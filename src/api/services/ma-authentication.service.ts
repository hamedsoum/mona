import {Injectable} from '@angular/core';import {Router} from '@angular/router';import {SHttpClientService} from '@sh/base';import {SHAuthenticationBaseService, SHAuthenticationEndpoint, SHAuthenticationRoute} from '@sh/authentication';import {MA_ENDPOINTS} from '../constants/ma-endpoints.constant';import {MA_ROUT} from '../constants/ma-route.contant';@Injectable({ providedIn: 'root' })export class MAAuthenticationService extends SHAuthenticationBaseService {    constructor(protected http: SHttpClientService,protected router : Router) {        super(http,router);    }    getEndpoint(): SHAuthenticationEndpoint {        return MA_ENDPOINTS.authentication;    }    getRoute(): SHAuthenticationRoute {        return MA_ROUT.authentication;    }}