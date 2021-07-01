import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService){}

  @Query(retrurns=> [Restaurant])
  restaurants(): Promise<Restaurant[]>{
    return this.restaurantService.getAll();
  }
  
  @Mutation(returns => Boolean)
  createRestaurant(
    @Args() createRestaurantDto: createRestaurantDto,
  ): Boolean{
    return true;
  }
}