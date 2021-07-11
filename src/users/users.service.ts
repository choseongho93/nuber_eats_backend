import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {}

    async createAccount({
        email,
        password,
        role,
    }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
        try {
            const exists = await this.users.findOne({ email }); // email 존재 여부 조회

            if (exists) {
                return {
                    ok: false,
                    error: 'There is a user with that email already',
                }; // 계정 존재
            }
            await this.users.save(this.users.create({ email, password, role }));
            return { ok: true };
        } catch (e) {
            // 에러 발생
            return { ok: false, error: "Couldn't create account" };
        }
    }
}
