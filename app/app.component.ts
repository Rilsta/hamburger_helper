import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
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
    console.log(clickedFood)
  }
}
