import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { AccountService } from 'src/auth/account.service';
import { AuthGuard } from '@nestjs/passport';
import { DefaultStrategy } from 'src/constants';

@Controller('Account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post('Register')
    async register(@Body() model: UserModel): Promise<object> {
        return await this.accountService.register(model);
    }

    @Post('Login')
    async login(@Body() request: any): Promise<object> {
        return await this.accountService.login(request);
    }

    @Get('CurrentUser')
    @UseGuards(AuthGuard(DefaultStrategy))
    async CurrentUser(@Req() request): Promise<UserModel> {
        return request.user;
    }
}
