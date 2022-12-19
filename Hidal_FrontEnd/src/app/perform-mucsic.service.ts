import { Injectable } from '@angular/core';
import { PerformanceMusic } from './performanceMusic';
import { PerformanceMusics } from './performanceMusic';

@Injectable({
  providedIn: 'root'
})
export class PerformMucsicService {
  data = PerformanceMusics;
  constructor() { }
  

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
