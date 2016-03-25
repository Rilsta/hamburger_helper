import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template:`
    <h3>Edit Food:</h3>
    <input [(ngModel)]="food.name"/>
    <input [(ngModel)]="food.calories"/>
    <input [(ngModel)]="food.details"/>
  `
})
export class EditFoodComponent {
  public food: Food;
}
