import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = '26cfecc45c1e2e60';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  }

  fetchWeather(city, state) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

}
