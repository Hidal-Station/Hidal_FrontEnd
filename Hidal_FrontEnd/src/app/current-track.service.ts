import { Injectable } from '@angular/core';
import { PerformanceMusic } from './performanceMusic';
@Injectable({
  providedIn: 'root'
})
export class CurrentTrackService {
  message!: PerformanceMusic;
  constructor() { }
  setMessage(data: PerformanceMusic){
    this.message = data;
  }
  getMessage(){
    return this.message;
  }
}
