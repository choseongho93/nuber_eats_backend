import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entities';

@Resolver()
export class RestaurantResolver {
  @Query(retrurns=> Restaurant)
  myRestaurant(){
    return true;
  }
}