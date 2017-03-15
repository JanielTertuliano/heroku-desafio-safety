import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceProvider {
  url:string;
  url2:string;
  constructor(public http: Http) {
    this.url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    this.url2 = '%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  }
  getSearchCity(value: string) {
    return this.http.get(this.url+ value +this.url2)
    .map(res => res.json())
  }
}
