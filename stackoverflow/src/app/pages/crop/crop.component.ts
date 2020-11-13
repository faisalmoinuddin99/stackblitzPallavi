import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/services/crop';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})


export class CropComponent implements OnInit {
  service: any;
  crop: Crop;

  constructor() { }

  ngOnInit() {
    this.service.getCrop().subscribe((selectedCrop: Crop) => this.crop =
      selectedCrop)

  }

}
