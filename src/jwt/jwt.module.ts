import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import { JwtService } from './jwt.service';

@Module({
  providers: []
})
@Global()
export class JwtModule {
    static forRoot(options: JwtModuleOptions): DynamicModule {
        return{
            module:JwtModule,
            exports: [JwtService],
            providers: [
                {
                    provide: CONFIG_OPTIONS, //provide 변수 이름 
                    useValue: options, // PRIVATE_KEY 값
                },
                JwtService,
            ]
        }
    }
}
