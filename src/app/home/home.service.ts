import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getItem() {
    return this.http.get('/app/mock/data.json');
  }

}
