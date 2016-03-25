import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template:`
    <h1>{{ food.name }}</h1>
  `
})
export class FoodComponent {
  public food: Food;
}
