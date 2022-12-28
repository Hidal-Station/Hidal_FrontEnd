import { Injectable } from '@angular/core';
import { PerformanceMusic } from './performanceMusic';
import { APerformanceMusic } from './performanceMusic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import * as global from './/host-link';
@Injectable({
  providedIn: 'root'
})
export class PerformMucsicService{
  constructor(private SongsListData: HttpClient) { }

  rawData: any;

  getData() {
    let url = global.host_link + '/api/app/performance-music/music';
    return this.SongsListData.post(url, { observe: 'body', responseType: 'json'});
  }

  fetch() {
    this.getData().subscribe(_data => {
      this.SongList = _data as PerformanceMusic[];
      // console.log(this.SongList);
    });
  }
  SongList: PerformanceMusic[] = [];
  
  getAllItems() {
    console.warn(this.SongList);
    return this.SongList;
  }
  // getItemById(_id: any){
  //   return this.SongItems[_id];
  // }
  addItem(item: any){
    this.SongList.push(item);
  }

  deleteItemsById(item: any) {
    let index = this.SongList.findIndex(i => i == item);
    this.SongList.splice(index, 1);
    //proper delete in data
    // let dataIndex = this.data.findIndex(i => i.id == item.id);
    // this.data.splice(dataIndex,1);
  }
  UploadMusic(data: any, image: any = null) {
    const formData: FormData = new FormData();

    formData.append('music',data);
    formData.append('image',image);
  
    let url = global.host_link + '/api/app/performance-music/upload-performance-music-main-file';
    return this.SongsListData.post(url,formData);
  }
}
