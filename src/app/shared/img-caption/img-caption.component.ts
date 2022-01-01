import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-caption',
  templateUrl: './img-caption.component.html',
  styleUrls: ['./img-caption.component.css']
})
export class ImgCaptionComponent implements OnInit {

  constructor() { }

  @Input() src: string;
  @Input() caption: string;
  ngOnInit(): void {
  }

}
