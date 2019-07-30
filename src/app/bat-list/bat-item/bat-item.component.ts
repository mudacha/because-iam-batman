import { Component, OnInit, Input } from '@angular/core';
import { BatMetaData } from '../../bat-meta-data';

@Component({
  selector: 'app-bat-item',
  templateUrl: './bat-item.component.html',
  styleUrls: ['./bat-item.component.scss']
})
export class BatItemComponent implements OnInit {
  @Input() batItem: any;
  assetPath: string;
  constructor() { }

  ngOnInit() {
    // Parse out the file name from the poster url
    this.batItem.parsedPosterURL = this.batItem.Poster.match(/([^\/]+$)+/g);
    this.assetPath = '../../../assets/image/' + this.batItem.parsedPosterURL;
  }

}
