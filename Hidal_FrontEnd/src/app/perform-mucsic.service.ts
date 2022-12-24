import { Injectable } from '@angular/core';
import { PerformanceMusic } from './performanceMusic';
import { PerformanceMusics } from './performanceMusic';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerformMucsicService {
  data = PerformanceMusics;
  constructor(private http:HttpClient) { }
  getData(){
    let url ="https://localhost:44375/api/app/performance-music/music";
    return this.http.get(url,{observe:'body',responseType:'json'});
  }


  SongItems: PerformanceMusic[] = [];


  fetch(){
    if (this.SongItems.length == 0){
      this.SongItems = this.data;
    }
  }

  getAllItems(){
    return this.SongItems;
  }
  // getItemById(_id: any){
  //   return this.SongItems[_id];
  // }

  deleteItemsById(item: any){
    let index = this.SongItems.findIndex(i => i == item);
    this.SongItems.splice(index,1);
    //proper delete in data
    // let dataIndex = this.data.findIndex(i => i.id == item.id);
    // this.data.splice(dataIndex,1);
  }
  fakeUpload(){
  }
}
