import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getObras() {
    // return this.http.get('http://www.adelmoral.com.br/data/obras.json');
    return this.http.get('/assets/data/obras.json');
  }
  getHome() {
    // return this.http.get('http://www.adelmoral.com.br/data/obras.json');
    return this.http.get('/assets/data/home.json');
  }
}
