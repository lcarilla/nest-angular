
import { Chatroom } from 'src/chatroom/chatroom.entitiy';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sender: string;

    @Column()
    date: Date;

    @Column({ length: 2000 })
    content: string;

    @ManyToOne(() => Chatroom, (chatroom: Chatroom) => chatroom.messages)
    chatroom: Chatroom
}