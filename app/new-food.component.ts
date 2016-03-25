import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template:`
    <h3>Add a Food</h3>
    <input placeholder="Food Name" #newFood />
    <input placeholder="Calories" #newCalories />
    <input placeholder="Details" #newDetails />

    <button
    (click)="addFood(newFood, newCalories, newDetails)">
    Add
    </button>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userFood: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement){
    this.onSubmitNewFood.emit([userFood.value, userCalories.value, userDetails.value]);
    userFood.value = "";
    userCalories.value = "";
    userDetails.value = "";
  }
}
