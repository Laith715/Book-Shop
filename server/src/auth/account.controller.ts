import { Controller, Post, Body } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { AccountService } from 'src/auth/account.service';

@Controller('Account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post('Register')
    async register(@Body() model: UserModel): Promise<object> {
        return await this.accountService.register(model);
    }
}
