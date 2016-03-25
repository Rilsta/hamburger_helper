import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { HealthPipe } from './health.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, NewFoodComponent],
  pipes: [HealthPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Foods</option>
    <option value="healthy">Show Healthy Foods</option>
    <option value="unHealthy">Show Unhealthy Foods</option>
  </select>

  <food-display *ngFor="#currentFood of foodList | healthy:filterHealth"
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
  public filterHealth: string = "all"
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  onChange(filterOption) {
    this.filterHealth = filterOption;
  }
}
