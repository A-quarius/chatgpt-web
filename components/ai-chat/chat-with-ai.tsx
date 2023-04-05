import styled from 'styled-components'
import { Button, Input } from '@arco-design/web-react'
import ChatMessage from '@/assets/chat-message.svg'
import { useEffect, useRef, useState } from 'react'
import {
  ConversationList,
  ConversationMessage,
} from '@/components/ai-chat/conversation-list'
import aiService from '@/service/ai-service'
import { ScrollContainer } from '@/components/styled-components'

const ConversationLayout = styled(ScrollContainer)`
  box-sizing: border-box;
  background: #201e1d;
  padding: 34px 48px 0 48px;
`
const UserInputArea = styled.div`
  box-sizing: border-box;
  height: 168px;
  padding-top: 12px;
  background: #ccc;
`
/**
 * AI 聊天窗口
 * @constructor
 */
export const ChatWithAi = () => {
  const totalAnswer = 25
  const ref = useRef<any>()

  const [inputValue, setInputValue] = useState('')
  const [allMessage, setAllMessage] = useState<ConversationMessage[]>([])
  const [asking, setAsking] = useState(false)
  useEffect(() => {
    ;(async () => {
      await aiService.test()
      // TODO: 需要先调用接口获取一下之前的聊天记录
      // 初始化聊天信息
      // const backData = await aiService.sendMessageToAi('')
      const initMessage: ConversationMessage[] = [
        {
          type: 'reception',
          message: '你可以向我提问',
          currentAnswer: 1,
        },
      ]
      setAllMessage(initMessage)
    })()
  }, [])
  /**
   * 请求接口
   */
  const fetchRequest = async (value: string) => {
    try {
      setAsking(true)
      const backData = await aiService.sendMessageToAi(value)
      setAsking(false)
      const receptionMessage: ConversationMessage = {
        message: backData.message,
        type: 'reception',
        currentAnswer:
          allMessage?.filter(msg => msg.type === 'reception').length + 1,
        totalAnswer: backData.totalAnswer,
      }
      setAllMessage(message => [...message, receptionMessage])
    } catch (e) {
      setAsking(false)
    }
  }
  /**
   * 用户发送信息给AI
   * @param value
   */
  const handleSendMessage = async (value: string) => {
    //   是否还有咨询次数
    const noCount =
      allMessage.filter(msg => msg.type === 'reception').length === totalAnswer
    if (asking || !value || noCount) {
      return
    }
    setAllMessage(val => [...val, { message: value?.trimStart(), type: 'send' }])
    // 用户输入之后，滚动到最底部
    ref.current.scrollTop = ref.current.scrollHeight
    setInputValue('')
    await fetchRequest(value)
    // 不加计时器，AI回复消息的DOM元素还未渲染到页面
    setTimeout(() => {
      // 得到AI回复之后，继续滚动到最底部
      ref.current.scrollTop = ref.current.scrollHeight
    }, 500)
  }
  return (
    <div style={{height: '100%'}}>
      <ConversationLayout ref={ref} height={'calc(100% - 168px)'}>
        <ConversationList message={allMessage} />
      </ConversationLayout>
      <UserInputArea>
        <div>
          <Input.TextArea
              style={{ height: '148px',width: '100%' }}
              placeholder={'请输入要提问的内容'}
              value={inputValue}
              onChange={setInputValue}
              onPressEnter={async e => {
                e.preventDefault()
                const inputValue = e.target.value
                await handleSendMessage(inputValue)
              }}
          />
        </div>
      </UserInputArea>
    </div>
  )
}
