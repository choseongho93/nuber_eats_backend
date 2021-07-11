import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

enum UserRole { Client, Owner, Delivery } // enum 사용 ([1]=Client,[2]=Owner,[3]=Delivery)

registerEnumType(UserRole, {name: 'UserRole'});

@InputType({ isAbstract:true })// GraphQL 데코레이션
@ObjectType()// GraphQL 데코레이션
@Entity()// DB 데코레이션
export class User extends CoreEntity {

  @Column()// GraphQL 데코레이션
  @Field(type=>String)// DB 데코레이션
  email: string;

  @Column()// GraphQL 데코레이션
  @Field(type=>String)// DB 데코레이션
  password: string;

  @Column({ type: 'enum', enum: UserRole }) // GraphQL 데코레이션
  @Field(type=>UserRole) // DB 데코레이션
  role: UserRole;
}