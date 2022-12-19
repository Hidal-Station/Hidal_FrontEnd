import { Component, OnInit } from '@angular/core';
import { PerformMucsicService } from '../perform-mucsic.service';
import { PerformanceMusics } from '../performanceMusic';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  
  ngOnInit(): void {
    let link = "https://7199-2402-800-6294-ccf2-8954-de15-c0f4-fa21.ap.ngrok.io";
    this.PerformanceService.fetch();
    this.performanceSongs.forEach(element => {
      element.url = link + element.url;
    });
  }
  SONGS = PerformanceMusics;

  
  
  performanceSongs = this.PerformanceService.getAllItems();

  constructor(private PerformanceService: PerformMucsicService) { }


  delete(item: any){
    this.PerformanceService.deleteItemsById(item);
    window.alert("Deleted!");
  }

  fakeUpload(){
    this.PerformanceService.fakeUpload();
    window.alert("fake uploaded");
  }
}
