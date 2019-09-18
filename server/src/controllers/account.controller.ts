import { Controller, Post, Body, Req } from '@nestjs/common';
import { RegisterModel } from 'src/models/register.model';
import { AccountService } from 'src/services/account.service';

@Controller('Account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post('Register')
    async register(@Body() model: RegisterModel): Promise<object> {
        await this.accountService.register(model);
        return {};
    }
}
