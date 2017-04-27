import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  env = environment;

  constructor(private http: Http) { }

  getItem() {
    return this.http.get(this.env.assetsPath + '/assets/mock/data.json');
  }

}
