

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedData: any;

  constructor() { }

  // Method to set shared data
  setSharedData(data: any): void {
    this.sharedData = data;
  }

  // Method to get shared data
  getSharedData(): any {
    return this.sharedData;
  }
}

