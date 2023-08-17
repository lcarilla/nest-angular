
import { Message } from 'src/message/message.entitiy';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Chatroom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;

    @Column({ length: 2000 })
    description: string;

    @OneToMany(() => Message, (message: Message) => message.chatroom, { eager: true })
    messages: Message[]
}