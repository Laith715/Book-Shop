import { Controller, Post, Body, UseGuards, Req, Get, BadRequestException } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { AccountService } from 'src/modules/auth/account.service';
import { AuthGuard } from '@nestjs/passport';
import { DefaultStrategy } from 'src/constants';
import { UserLoginModel } from 'src/models/userLogin.model';
import { request } from 'express';
import { TokenModel } from 'src/models/token.model';
import { User } from 'src/database/entities/user.entity';

@Controller('Account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post('Register')
    async register(@Body() model: UserModel): Promise<object> {
        return await this.accountService.register(model);
    }

    @Post('Login')
    async login(@Body() req: UserLoginModel): Promise<TokenModel> {
        if (!req && !(request instanceof UserLoginModel)) {
            throw new BadRequestException('Something went wrong');
        }
        const user: User = await this.accountService.validateUser(req);
        const tokenModel: TokenModel = await this.accountService.login(user);
        return tokenModel;
    }

    @Get('CurrentUser')
    @UseGuards(AuthGuard(DefaultStrategy))
    async currentUser(@Req() req): Promise<UserModel> {
        return req.user;
    }

    @Post('Token')
    async token(@Req() req): Promise<TokenModel> {
        return await this.accountService.refreshToken(req.body.refreshToken);
    }
}
