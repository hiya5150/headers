import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeTellerService {

  constructor(private http: HttpClient) {
  }

  // get a dad joke
  tellJoke(): Observable<any> {
    const url = 'https://icanhazdadjoke.com';
    return this.http.get<any>(url, {
      headers: new HttpHeaders({Accept: 'application/json'})
    });
  }
}
