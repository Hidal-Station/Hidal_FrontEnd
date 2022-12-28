import { Component } from '@angular/core';
import {PerformMucsicService} from './perform-mucsic.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hidal';
  constructor(private music:PerformMucsicService){
    this.music.getData().subscribe(data =>{
      console.log(data);
    })
  }
}
