import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entitiy';


@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    exports: [TypeOrmModule.forFeature([Message])]
})
export class MessageModule { }