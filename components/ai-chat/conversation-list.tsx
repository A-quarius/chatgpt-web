import React from 'react'
import { MessageItem } from '@/components/ai-chat/message-item'
import { FlexStyle, MainText } from '@/components/styled-components'
import GreenChecked from '@/assets/green-checed.svg'
import { Link } from '@arco-design/web-react'

export interface ConversationMessage {
  type: 'reception' | 'send'
  message: string
  // 当前ai回复了几次
  currentAnswer?: number
  // 一共可以咨询多少次
  totalAnswer?: number
}

/**
 * AI 的聊天记录展示组件
 * @param props
 * @constructor
 */
export const ConversationList: React.FC<{
  message: ConversationMessage[]
}> = props => {
  return (
    <>
      {props.message?.map((message, index) => {
        if (message.type === 'send') {
          return (
            <React.Fragment key={index}>
              <MessageItem {...message} />
              <FlexStyle>
                <GreenChecked />
                <MainText
                  fontSize={12}
                  lineHeight={17}
                  margin={'0 0 15px 8px'}
                  color={'rgba(255, 255, 255, 0.65)'}
                >
                  查询中，请稍等
                </MainText>
              </FlexStyle>
            </React.Fragment>
          )
        }
        return (
          <React.Fragment key={index}>
            <MessageItem {...message} />
          </React.Fragment>
        )
      })}
    </>
  )
}
