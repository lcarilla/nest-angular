import { Expose } from "class-transformer";

export class MessageCreateDto {
    sender: string
    content: string
    roomId: number
}
export class MessageDto {
    @Expose()
    id: number;
    @Expose()
    sender: string;
    @Expose()
    date: Date;
    @Expose()
    content: string;
}