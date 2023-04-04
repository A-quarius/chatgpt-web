import React, { useEffect, useState } from 'react'
import { ChatWithAi } from '@/components/ai-chat/chat-with-ai'
import { ChatModeProps, ModelCard } from '@/components/ai-chat/model-card'
import {FlexStyle} from "@/components/styled-components";

export default function AiChat() {
    return (
        <ChatWithAi />
    )
}
