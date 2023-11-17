import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

const users: User[] = [
  {
    name: 'Mátyás',
    gender: 'Férfi',
    date: '1983.04.30',
    balence: 55000,
    active: true,
  },
  {
    name: 'Bea',
    gender: 'Nő',
    date: '1995.08.12',
    balence: 85000,
    active: true,
  },
  {
    name: 'Jakab',
    gender: 'Férfi',
    date: '1980.2.29',
    balence: 35000,
    active: false,
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Render('user')
  getfelhasznalok() {
    const user = users[0];

    return {
      name: user.name,
      gender: user.gender,
      date: user.date,
      balance: user.balence,
      active: user.active,
    };
  }

  @Get('profi')
  @Render('user')
  getfelhasznalo() {
    return {
      users: users,
    };
  }
}
