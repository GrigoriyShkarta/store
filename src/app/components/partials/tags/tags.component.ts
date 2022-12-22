import { Component } from '@angular/core';
import {Tag} from "../../../shared/models/Tag";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(sererTags => {
      this.tags = sererTags;
    });
  }
}
