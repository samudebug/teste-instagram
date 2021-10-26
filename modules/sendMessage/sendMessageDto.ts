interface AttachmentDTO {
    type?: string;
    payload?: {url: string}
}
interface MessageDTO {
    text?: string;
    attachment?: AttachmentDTO
}
export interface SendMessageDTO {
    recipient?: {id: string};
    message: MessageDTO;
}