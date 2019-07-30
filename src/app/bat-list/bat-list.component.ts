import { Component, OnInit, Input } from '@angular/core';
import { BatMetaData } from '../bat-meta-data';

@Component({
  selector: 'app-bat-list',
  templateUrl: './bat-list.component.html',
  styleUrls: ['./bat-list.component.scss']
})
export class BatListComponent implements OnInit {
  @Input() batListData: any[];
  constructor() { }

  ngOnInit() {
  }

}
