import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurants.entities';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(retrurns=> [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[]{
    console.log(veganOnly);
    return [];
  }

  @Mutation(returns => Boolean)
  createRestaurant(
    @Args() createRestaurantDto: createRestaurantDto,
  ): Boolean{
    return true;
  }
}