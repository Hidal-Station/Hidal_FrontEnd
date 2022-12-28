import { Injectable, OnInit } from '@angular/core';
import * as global from 'src/app/host-link';
import { PerformanceMusic } from './performanceMusic';
import { APerformanceMusic } from './performanceMusic'
import { MusicPlayerComponent } from './music-player/music-player.component';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() {

  }


  private Player = new Audio();
  currentSong: PerformanceMusic = APerformanceMusic;
  isLoaded = false;

  isPlaying() {
    return !this.Player.paused && this.Player.currentTime > 0 && !this.Player.ended;
  }

  isStop() {
    return this.Player.currentTime == 0;
  }


  toggle() {
    if (this.isStop()) {
      this.Player.src = this.currentSong.musicFile;
      this.Player.load();
      this.Player.volume = 0.6;
      this.Player.play();
    }
    else {
      if (!this.isPlaying()) {
        this.Player.play();
      }
      else {
        this.Player.pause();
      }
    }

  }

  load(data: PerformanceMusic) {
    if (data) {
      this.pause();
      this.Player.currentTime = 0;
      this.currentSong.musicFile = data.musicFile;
      console.log('load', this.currentSong);
    }
  }

  pause() {
    this.Player.pause();
  }
  next() {

  }
  back() {

  }
}
