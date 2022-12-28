import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';
import { style } from '@angular/animations';
import { APerformanceMusic, PerformanceMusic } from '../performanceMusic';
import * as $ from "jquery";
import { CurrentTrackService } from '../current-track.service';
@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  constructor(private PlayerService: PlayerService) {}

  shared: CurrentTrackService = new CurrentTrackService;
  currentSong!: PerformanceMusic;
  

  play(){
    this.PlayerService.toggle();
    console.log('click from player component');
    this.loadSongData();
  }


  loadSongData(){
    const img =  document.querySelector(".song-img") as HTMLImageElement;
    this.currentSong = this.shared.getMessage();
    console.log(this.currentSong);
    // img.src = this.currentSong.image;
  }

  next(){
    this.PlayerService.next();
  }
  back(){
    this.PlayerService.back();
  }

}
