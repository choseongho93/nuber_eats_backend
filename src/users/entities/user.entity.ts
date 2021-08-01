import {
    Field,
    InputType,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsEnum } from 'class-validator';

enum UserRole {
    Client,
    Owner,
    Delivery,
} // enum 사용 ([0]=Client,[1]=Owner,[2]=Delivery)

registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true }) // GraphQL 데코레이션
@ObjectType() // GraphQL 데코레이션
@Entity() // DB 데코레이션
export class User extends CoreEntity {
    @Column() // GraphQL 데코레이션
    @Field(type => String) // DB 데코레이션
    @IsEmail()
    email: string;

    @Column({ select: false }) // GraphQL 데코레이션
    @Field(type => String) // DB 데코레이션
    password: string;

    @Column({ type: 'enum', enum: UserRole }) // GraphQL 데코레이션
    @Field(type => UserRole) // DB 데코레이션
    @IsEnum(UserRole)
    role: UserRole;

    @Column({ default: false })
    @Field(type => Boolean)
    verified: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        if(this.password){
            try {
                this.password = await bcrypt.hash(this.password, 10);
            } catch (e) {
                console.log(e);
                throw new InternalServerErrorException();
            }
        }
    }
    
    async checkPassword(aPassword: string): Promise<boolean> {
        try {
            const ok = await bcrypt.compare(aPassword, this.password);
            return ok;
        } catch (e) {
            console.log(e);
            throw new InternalServerErrorException();
        }
    }
}
