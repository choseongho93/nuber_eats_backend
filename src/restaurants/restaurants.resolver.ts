import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entities';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(retrurns=> [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[]{
    console.log(veganOnly);
    return [];
  }
}