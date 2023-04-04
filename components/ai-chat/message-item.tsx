import styled from 'styled-components'
import React from 'react'
import { FlexStyle, MainText } from '@/components/styled-components'
import { Divider } from '@arco-design/web-react'
import { ConversationMessage } from '@/components/ai-chat/conversation-list'

const SendOrReceptionLayout = styled.div<{ type: 'reception' | 'send' }>`
  text-align: ${props => (props.type === 'reception' ? 'left' : 'right')};
  margin-bottom: 32px;
`
const MessageWrapper = styled.div<{ type: 'reception' | 'send' }>`
  box-sizing: border-box;
  display: inline-block;
  max-width: 599px;
  min-height: 46px;
  padding: 14px 16px 12px 16px;
  background: ${props => (props.type === 'reception' ? '#353535' : '#FF6011')};
  border-radius: ${props =>
    props.type === 'reception' ? '12px 12px 12px 0px' : '12px 12px 0px 12px;'};
`
const Dot = styled.div<{
  hasMore: boolean
}>`
  width: 8px;
  height: 8px;
  background: ${props => (props.hasMore ? '#38FFAC' : '#E23434')};
  border-radius: 50%;
`
/**
 * 每一条信息的聊天框组件
 * @param props
 * @constructor
 */
export const MessageItem: React.FC<ConversationMessage> = props => {
  return (
    <SendOrReceptionLayout type={props.type}>
      <MessageWrapper type={props.type}>
        <MainText fontSize={14} lineHeight={20}>
          {props.message}
        </MainText>
        {props.type === 'reception' && (
          <>
            <Divider
              style={{ margin: '8px 0', color: 'rgba(255, 255, 255, 0.12)' }}
            />
          </>
        )}
      </MessageWrapper>
    </SendOrReceptionLayout>
  )
}
