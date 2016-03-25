import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template:`
    <h3>{{ food.name }}</h3>
    <p>{{ food.calories + " calories" }}</p>
    <p>{{ food.details }}</p>
  `
})
export class FoodComponent {
  public food: Food;
}
