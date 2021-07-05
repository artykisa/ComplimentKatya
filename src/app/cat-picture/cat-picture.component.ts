import { Component, OnInit } from '@angular/core';
import {ComplimentService} from "../../@core/services/compliment.service";
import {CatPictureService} from "../../@core/services/cat-picture.service";

@Component({
  selector: 'app-cat-picture',
  templateUrl: './cat-picture.component.html',
  styleUrls: ['./cat-picture.component.css']
})
export class CatPictureComponent implements OnInit {

  public catPictureUrl!: string;

  constructor(private catPictureService: CatPictureService) { }

  ngOnInit(): void {
    this.updateCatPicture();
  }

  private updateCatPicture(): void{
    this.catPictureService.getCatPicture().subscribe(catPicture => {
      this.catPictureUrl = catPicture.url;
    });
  }

  public onUpdateCatPictureClick(): void{
    this.updateCatPicture();
  }

}
