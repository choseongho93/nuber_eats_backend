import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
    CreateAccountInput,
    CreateAccountOutput,
} from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly usersService: UserService) {}

    @Query(() => Boolean)
    hi() {
        return true;
    }

    @Mutation(returns => CreateAccountOutput)
    async createAccount(
        @Args('input') createAccountInput: CreateAccountInput,
    ): Promise<CreateAccountOutput> {
        try {
            const { ok, error } = await this.usersService.createAccount(
                createAccountInput,
            ); // 계정 저장
            return {
                ok,
                error,
            };
        } catch (error) {
            // 에러 발생
            return {
                ok: false,
                error,
            };
        }
    }
}
