import { Login } from "../interface/Login";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
        this.userAuthenticated.next(false);
    }

    informationMessage = new BehaviorSubject<string>('Google Maps’e Hosgeldiniz.');
    userAuthenticated = new BehaviorSubject<boolean>(false);

    updateInformationMessage(message: string) {
        this.informationMessage.next(message);
    }

    login(login: Login) {
        return this.http.post<Observable<Login>>('', login);
    }

    updateAuthenticatedStatus(status: boolean) {
        this.userAuthenticated.next(status)
        ;
    }

    isAuthenticated(): boolean {
        return this.userAuthenticated.getValue();
    }
}
