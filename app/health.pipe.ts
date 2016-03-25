import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredHealthState = args[0];
    if(desiredHealthState === "healthy") {
      return input.filter(function(food) {
        return (food.calories <= 300);
      });
    } else if (desiredHealthState === "unHealthy") {
      return input.filter(function(food){
        return (food.calories > 300);
      });
    } else if (desiredHealthState === "all") {
      return input.filter(function(food){
        return (food.calories > 0);
      });
    }
  }
}
