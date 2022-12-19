import { Component } from '@angular/core';
import {Food} from "../../../shared/models/Food";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log("params", params)
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        console.log(this.foods = this.foodService.getAllFoodsByTag(params.tag))
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else  {
        this.foods = foodService.getAll();
      }
    })
  }
}
