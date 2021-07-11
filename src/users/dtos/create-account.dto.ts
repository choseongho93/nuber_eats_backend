import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User,[ // PickType은 User Entity에서 원하는 컬럼만 뽑은것
    'email',
    'password',
    'role',
]){}

@ObjectType()
export class CreateAccountOutput extends MutationOutput{}