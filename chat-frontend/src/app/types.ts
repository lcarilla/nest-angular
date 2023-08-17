export interface ChatroomDto {
    id: number
    date: Date
    description: string
    name: string
}
export interface ChatroomFullDto extends ChatroomDto {
    messages: MessageDto[]
}
export interface MessageCreateDto {
    sender: string
    content: string
    roomId: number
}
export interface MessageDto {
    id: number
    sender: string
    date: Date
    content: string
}