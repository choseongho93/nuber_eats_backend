import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtService {
    constructor(
        @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
    ) {
      console.log(options);
    }

    // key 암호화 
    sign(userId: number): string {
       return jwt.sign({ id: userId }, this.options.privateKey);
    }

    // key 복호화 
    verify(token: string) {
      return jwt.verify(token, this.options.privateKey);
    }
}