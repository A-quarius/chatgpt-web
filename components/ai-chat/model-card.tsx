import styled from 'styled-components'
import React from 'react'
import { FlexItem, FlexStyle, MainText } from '@/components/styled-components'
import ChatMessage from '@/assets/chat-message.svg'

const ModelCardLayout = styled.div<{ type: 'create' | 'show' }>`
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  margin: 12px;
  width: 208px;
  height: 108px;
  border-radius: 8px;
  padding: 20px;
  text-align: ${props => (props.type === 'create' ? 'center' : 'left')};
  background: ${props =>
    props.type === 'create'
      ? 'linear-gradient(360deg, #FF6011 0%, #FF843C 100%)'
      : '#2B2A2A'};
`
export interface ChatModeProps {
  type: 'create' | 'show'
  title: string
  subtitle: string
  date?: string
  icon?: React.ReactNode
  onClick: (props: ChatModeProps) => void
}
export const ModelCard: React.FC<ChatModeProps> = props => {
  return (
    <ModelCardLayout type={props.type} onClick={() => props.onClick(props)}>
      {props.type === 'show' && (
        <FlexStyle
          height={'108px'}
          justifyContent={'space-around'}
          flexDirection={'column'}
        >
          <FlexItem>
            <MainText fontSize={16} lineHeight={24}>
              {props.title}
            </MainText>
          </FlexItem>
          <FlexItem>
            <MainText
              fontSize={12}
              margin={'0 0 8px 0'}
              lineHeight={17}
              color={'rgba(255,255,255, .65)'}
            >
              {props.subtitle}
            </MainText>
            <MainText
              fontSize={12}
              lineHeight={17}
              color={'rgba(255,255,255, .65)'}
            >
              {props.date}
            </MainText>
          </FlexItem>
        </FlexStyle>
      )}
      {props.type === 'create' && (
        <>
          <ChatMessage />
          <MainText
            textAlign={'center'}
            margin={'19px 0 8px 0'}
            fontSize={16}
            lineHeight={22}
          >
            {props.title}
          </MainText>
          <MainText
            textAlign={'center'}
            fontSize={12}
            lineHeight={17}
            color={'rgba(255,255,255, .65)'}
          >
            {props.subtitle}
          </MainText>
        </>
      )}
    </ModelCardLayout>
  )
}
