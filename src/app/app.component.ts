import { Component } from '@angular/core';
import { ServiceProvider } from '../providers/service-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  climate:any;
  bg:string;
  icon:string;

  constructor(public service: ServiceProvider) {
    this.searchCity('Maceió');
  }

  searchCity(value: string) {
    this.service.getSearchCity(value).subscribe(data => {
          this.climate = [data];
          this.toChange(data.query.results.channel.item.condition.text);
      }, error => {
          console.error(error);
      });
  }

   generateArray(obj){
   return Object.keys(obj).map((key)=>{
     return obj[key]
    });
  }

   converter(f){
     let c = ((f - 32) / 18000) * 10000;
     return c;
   }

  toChange(icon: string){
   if(icon == 'Cloudy'){
      icon = 'wi wi-cloud';
      this.bg = 'assets/img/bg-cloudy.jpg';
   }
   if(icon == 'Mostly Cloudy'){
      icon = 'wi wi-cloudy';
      this.bg = 'assets/img/bg-mostly-cloudy.jpg';
   }
   if(icon == "Partly Cloudy"){
      icon = 'wi wi-night-partly-cloudy';
      this.bg = 'assets/img/bg-partly-cloudy.jpg';
   }
   if(icon == 'Thunderstorms'){
      icon = 'wi wi-lightning';
      this.bg = 'assets/img/bg-thunderstorms.jpg';
    }
   if(icon == 'Scattered Thunderstorms'){
      icon = 'wi wi-lightning';
      this.bg = 'assets/img/bg-scattered-thunderstorms.jpg';
   }
   if(icon == 'Rain'){
      icon = 'wi wi-rain';
      this.bg = 'assets/img/bg-rain.jpg';
   }
   if(icon == 'Sunny'){
      icon = 'wi wi-day-sunny';
      this.bg = 'assets/img/bg-sunny.jpg';
   }
   if(icon == 'Mostly Sunny'){
      icon = 'wi wi-day-cloudy';
      this.bg = 'assets/img/bg-mostly-sunny.jpg';
   }
   if(icon == 'Snow'){
      icon = 'wi wi-snow';
      this.bg = 'assets/img/bg-snow.jpg';
   }
   if(icon == 'Snow Showers'){
      icon = 'wi wi-snow';
      this.bg = 'assets/img/bg-snow-showers.jpg';
   }
   if(icon == 'Windy'){
      icon = 'wi wi-windy';
      this.bg = 'assets/img/bg-windy.jpg';
   }
   if(icon == 'Showers' || icon == 'Scattered Showers'){
      icon = 'wi wi-night-showers';
      this.bg = 'assets/img/bg-shower.jpg';
   }
   if(icon == 'Mostly Clear'){
      icon = 'wi wi-moon-new';
      this.bg = 'assets/img/bg-mostly-clear.jpg';
   }
   if(icon == 'Clear'){
      icon = 'wi wi-moon-new';
      this.bg ='assets/img/bg-clear.jpg';
   }
   if(icon == 'Breezy'){
      icon = 'wi wi-windy';
      this.bg ='assets/img/bg-breezy.jpg';
   }
   if(icon == 'Blowing Snow'){
      icon = 'wi wi-night-snow';
      icon = 'assets/img/bg-breezbg-blowing-snow.png'
   }
   return icon;
  }

}
