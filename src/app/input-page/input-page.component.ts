

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  personalInfo: any = {};

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService
  ) {}

  submitForm() {
    if (!this.personalInfo.firstName || !this.personalInfo.lastName || !this.personalInfo.employmentTerm) {
      alert('Please fill out all required fields.');
      return;
    }
    // Share data with service
    this.dataSharingService.setSharedData(this.personalInfo);
    // Navigate to output page
    this.router.navigate(['/output']);
  }
}

