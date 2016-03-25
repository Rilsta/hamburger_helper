import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives:[FoodListComponent],
  template: `
  <div class="container">
    <h1>Hamburger Helpr</h1>
    <food-list
      [foodList]="foods"
      (onFoodSelect)="foodSelected($event)">
    </food-list>
  </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Jose Burger", 1200, "Killer burger with peppahs"),
      new Food("Beefy Five", 965, "Taco Bell Burrito"),
      new Food("Basil Leaf", 5, "A single basil leaf")
    ];
  }
  foodSelected(clickedFood: Food): void{
    console.log([clickedFood.details, clickedFood.calories])
  }
}
