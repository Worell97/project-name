import { Controller, Get, Header, HostParam, HttpCode, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller({ host: ':account.example.com' })
export class AccountController {

  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}