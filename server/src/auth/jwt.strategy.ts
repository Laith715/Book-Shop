import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-strategy';
import { ExtractJwt } from 'passport-jwt';
import { Configuration } from 'src/constants';
import { Environment } from 'src/config/Environment';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(Configuration) private readonly configuration: Environment) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpirtaion: false,
            secretOrKey: configuration.jwtSecret,
        });
    }

    async validate(payload: UserModel) {
        return { userId: payload.id, email: payload.email };
    }
}
