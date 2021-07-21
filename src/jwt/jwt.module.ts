import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/users/users.service';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import { JwtMiddleware } from './jwt.middleware';
import { JwtService } from './jwt.service';

@Module({
  providers: []
})
@Global()
export class JwtModule {
    static forRoot(options: JwtModuleOptions): DynamicModule {
        return{
            module: JwtModule,
            providers: [
                {
                    provide: CONFIG_OPTIONS, //provide 변수 이름 
                    useValue: options, // PRIVATE_KEY 값
                },
                JwtService,
            ],
            exports: [JwtService]
        }
    }
}
