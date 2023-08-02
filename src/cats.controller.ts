import { Body, Controller, Get, Header, HttpCode, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./create-cat.dto";

@Controller('cats')
export class CatsController {

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This should return all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This should return the cat related to the id ${id}`;
  }
}