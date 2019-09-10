import {
    Controller,
    Get,
} from '@nestjs/common';
import { AccountService } from 'src/services/account.service';

@Controller()
export class AppController {
    constructor(private readonly accountService: AccountService) { }

}
