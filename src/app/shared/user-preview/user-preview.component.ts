import { Component, Input, OnInit } from '@angular/core';
import { UserPreview } from 'src/app/pages/dashboard/interface/userPreview';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  constructor() { }

  @Input() user: UserPreview;
  ngOnInit(): void {
    console.log(this.user);
  }

}
