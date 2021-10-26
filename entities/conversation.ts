interface ConversationParticipant {
    username:string;
    id: string;
}

interface ConversationAttachment {
    id: string;
    image_data?: {url: string};
    name?: string;
    video_data?: {url: string};
    file_url: string;
}

export interface ConversationMessage {
    id:string;
    created_time: string;
    from: ConversationParticipant;
    message: string;
    to: {data: Array<ConversationParticipant>};
    is_unsupported?: boolean;
    attachments: {data:Array<ConversationAttachment>}
}

export interface Conversation {
    id: string;
    messages?: Array<ConversationMessage>
    participants: {data: Array<ConversationParticipant>};
}