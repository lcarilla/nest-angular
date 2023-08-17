import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Message } from "src/message/message.entitiy";

export class ChatroomDto {
    @ApiProperty()
    @Expose()
    id: number;
    @ApiProperty()
    @Expose()
    date: Date;
    @ApiProperty()
    @Expose()
    name: string;
    @ApiProperty()
    @Expose()
    description: string;
}
export class ChatroomFullDto extends ChatroomDto {
    @ApiProperty()
    @Expose()
    messages: Message[]
}