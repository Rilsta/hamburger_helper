import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy"
})

export class HealthPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredHealthState = args[0];
    if(desiredHealthState === input.calories <= 300) {
      return input.filter(function(food) {
        return food.healthy;
      });
    } else if (desiredHealthState === "unHealthy") {
      return input.filter(function(food){
        return !food.healthy;
      });
    } else {
      return input;
    }
  }
}
