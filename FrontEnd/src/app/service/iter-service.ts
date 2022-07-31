import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { TokenService } from "./token.service";
@Injectable({
    providedIn: 'root'
})
export class IterceptorService {
    constructor(private tokenService: TokenService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intRequest = request;
        const token = this.tokenService.getToken();
        if (token != null) {
            intRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(intRequest);
    }
}
export const interceptProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: IterceptorService,
    multi: true
}];
