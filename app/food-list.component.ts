import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component'
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent], [HealthPipe],
  template: `
  <select>
    <option value="all">Show All Foods</option>
    <option value="healthy">Show Healthy Foods</option>
    <option value="unHealthy">Show Unhealthy Foods</option>
  </select>

  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>

  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
