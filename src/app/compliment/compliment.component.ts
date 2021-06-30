import { Component, OnInit } from '@angular/core';
import {ComplimentService} from "../../@core/services/compliment.service";
import {ComplimentModel} from "../../@core/models/compliment.model";

@Component({
  selector: 'app-compliment',
  templateUrl: './compliment.component.html',
  styleUrls: ['./compliment.component.css']
})
export class ComplimentComponent implements OnInit {

  public complimentText!: string;

  constructor(private complimentService: ComplimentService) { }

  ngOnInit(): void {
    this.updateCompliment();
  }

  private updateCompliment(): void{
    this.complimentService.getCompliment().subscribe(compliment => {
      this.complimentText = compliment.compliment;
    });
  }

  public onUpdateComplimentClick(): void{
    this.updateCompliment();
  }
}
