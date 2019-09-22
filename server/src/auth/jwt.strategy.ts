import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-strategy';
import { ExtractJwt } from 'passport-jwt';
import { Configuration, DefaultStrategy } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, DefaultStrategy) {
    constructor(@Inject(Configuration) private readonly configuration: Environment) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpirtaion: false,
            secretOrKey: configuration.jwtSecret,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email };
    }
}
