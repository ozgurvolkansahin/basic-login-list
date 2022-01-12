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
    this.getUsers(this.page, this.limit);
  }
  page = 0;
  limit = 10;
  userList: UserPreview[] = [];
  ngOnInit(): void {
  }

  getUsers(page: number, limit: number): void {
    this.dashboardData.userPreviewListv2(page, limit).subscribe(result => {
      this.userList = this.userList.concat(result.data);
    });
  }
}
