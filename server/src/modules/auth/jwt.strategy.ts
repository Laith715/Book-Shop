import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Constants } from 'src/constants';
import { Environment } from 'src/config/configuration.environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, Constants.DefaultStrategy) {
    constructor(private readonly configuration: Environment) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpirtaion: false,
            secretOrKey: configuration.jwtSecret,
        });
    }

    async validate(payload: any) {
        return { id: payload.id, email: payload.email, role: payload.role };
    }
}
