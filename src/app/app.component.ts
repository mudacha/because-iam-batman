import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatMetaData } from './bat-meta-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  baseUrl = 'http://www.omdbapi.com/?';
  apiKey = '&apikey=2e6affb2';
  batMetaDataList: BatMetaData[] = [];
  // would replace with type BatDetails[] to optimize this.
  batDetailsList: any[] = [];


  constructor(private http: HttpClient) {}

// This method makes an http request to retrive the high level data about ten batman movies.
  private getBatmanMetaData() {
    this.http.get<BatMetaData[]>(this.baseUrl + 's=Batman' + this.apiKey)
    .pipe(
      map(response => {
      const tempBatArray: any[] = [];
      for (const key in response) {
        if (key === 'Search') {
        tempBatArray.push(response[key]);
        }
      }
      return tempBatArray;
    })
  )
    .subscribe(batData => {
      this.batMetaDataList = batData[0];
      this.getBatManDetailData();
    });
  }

// This method is for making the 10 calls that are required to get the details of the batman movies.
   public getBatManDetailData() {
    const observables = [];
    // loop over the list of meta data we got from our first call, grab the imdbID from each meta data object and build up a list of observables.
    for (const data of this.batMetaDataList) {
      observables.push(this.http.get<any[]>(this.baseUrl + 'i=' + data.imdbID + this.apiKey));
    }
    // join all the output from resulting calls and subscribe. This will result in batDetailsList being an array made for details on batman movies. 
    forkJoin(observables).subscribe(
       data => {
        this.batDetailsList = data;
       }
     );
   }

  ngOnInit() {
   this.getBatmanMetaData();
  }

}
