import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerformMucsicService } from '../perform-mucsic.service';
import { APerformanceMusic } from '../performanceMusic';
import { PerformanceMusic } from '../performanceMusic';
import { FileUploader, FileItem } from 'ng2-file-upload';
import * as global from '../host-link';
import { MusicPlayerComponent } from '../music-player/music-player.component';
import { PlayerService } from '../player.service';
import { CurrentTrackService } from '../current-track.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  constructor(private PerformanceService: PerformMucsicService) { 
    
  }
  shared: CurrentTrackService = new CurrentTrackService;
  performanceSongs = this.PerformanceService.getAllItems();
  private player: PlayerService = new PlayerService;
  currentSong = APerformanceMusic;
  ngOnInit(): void {

    let link = global.host_link;
    this.PerformanceService.fetch();
    if (this.performanceSongs.length > 0){
      this.performanceSongs.forEach(e => {
        if(e.image != null){
          e.image = link + e.image;
        }
        e.musicFile = link + e.musicFile;
        console.log(e);
      });
    }
  }

  setCurrentSongData(data: PerformanceMusic){
      this.shared.setMessage(data);
  }

  selectToLoad(data: PerformanceMusic){
    this.player.load(data);
  }
  

  delete(item: any){
    this.PerformanceService.deleteItemsById(item);
    window.alert("Deleted!");
  }

  upload(){
    let a = document.getElementById('input');
    a?.click();
  }


  ChangeUpload(data:any){

    this.PerformanceService.UploadMusic(data.files[0],data.files[1]).subscribe(data=>{

      console.log(data);

    });

  }
}
