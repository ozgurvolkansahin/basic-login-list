import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardData } from '../data/dashboard.data';
import { UserPreview } from '../interface/userPreview';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dashboardData: DashboardData) {
    this.getUsers(this.limit);
  }
  limit = 10;
  userList: UserPreview[] = [];
  ngOnInit(): void {
  }

  getUsers(limit: number): void {
    this.dashboardData.userPreviewList(limit).subscribe(result => {
      this.userList = result.data;
    });
  }
}
