// import { Component } from '@angular/core';
// import { DataSharingService } from '../data-sharing.service';
//
// @Component({
//   selector: 'app-output-page',
//   templateUrl: './output-page.component.html',
//   styleUrls: ['./output-page.component.css']
// })
// export class OutputPageComponent {
//   processorInfo: any;
//
//   constructor(private dataSharingService: DataSharingService) {
//     this.processorInfo = this.dataSharingService.processorInfo;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {
  sharedData: any;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.sharedData = this.dataSharingService.getSharedData();
  }
}

