import styled from 'styled-components'
import React from 'react'
import { MainText } from '@/components/styled-components'
import { Divider } from '@arco-design/web-react'
import { ConversationMessage } from '@/components/ai-chat/conversation-list'
import {marked} from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css';


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

/**
 * 每一条信息的聊天框组件
 * @param props
 * @constructor
 */
export const MessageItem: React.FC<ConversationMessage> = props => {
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => highlight.highlightAuto(code).value,
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });

    const html = marked.parse(props.message)
  return (
    <SendOrReceptionLayout type={props.type}>
      <MessageWrapper type={props.type}>
        <MainText fontSize={14} lineHeight={20} dangerouslySetInnerHTML={{__html: html}} />
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
