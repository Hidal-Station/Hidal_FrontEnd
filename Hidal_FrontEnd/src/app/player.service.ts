import { Injectable } from '@angular/core';
import { PerformanceMusics } from './performanceMusic';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  

  audioObj = new Audio();


  play() {

  }

  pause(){

  }

  stop(){

  }

  constructor() { 
    
  }
}
