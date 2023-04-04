import { FlexStyle, MainText } from '@/components/styled-components'
import ChatMessage from '@/assets/chat-message.svg'
import Doc from '@/assets/doc.svg'
import { Button, Input, Modal } from '@arco-design/web-react'
import React, { useMemo, useState } from 'react'
import Email from '@/assets/email.svg'
import { IconCloseCircle } from '@arco-design/web-react/icon'
import { ChooseStartMode } from '@/components/ai-chat/choose-start-mode'

interface Props {
  step: 'chat' | 'form' | 'list' | 'detail'
  setStep: (val: 'chat' | 'form' | 'list' | 'detail') => void
}
export const ExtraButton: React.FC<Props> = ({ step, setStep }) => {
  const [showModel, setShowModel] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const buttonText = useMemo(() => {
    if (step === 'form') {
      return 'Chat With AI'
    } else if (step === 'chat') {
      return '填写需求单'
    } else if (step === 'detail') {
      return '联系我们'
    }
    return null
  }, [step])
  return (
    <Button
      style={{
        height: 46,
        width: step === 'detail' ? 128 : 158,
        background: step === 'form' ? '#7075FF' : '#FF6011',
      }}
      onClick={() => {
        if (step === 'chat') {
          setStep('form')
        } else if (step === 'form') {
          setStep('chat')
        } else if (step === 'detail') {
          setShowModel(true)
        }
      }}
    >
      <FlexStyle alignItem={'center'} height={'34px'}>
        {step === 'chat' && <ChatMessage style={{ scale: '0.6' }} />}
        {step === 'form' && <Doc style={{ scale: '0.9' }} />}
        {step === 'detail' && <Email />}

        <MainText
          fontSize={14}
          color={'#fff'}
          lineHeight={28}
          margin={'0 0 0 8px'}
        >
          {buttonText}
        </MainText>
      </FlexStyle>
      <Modal
        visible={showModel}
        style={{ width: '472px', position: 'relative', padding: '12px 24px' }}
        closeIcon={null}
        autoFocus={false}
        focusLock={true}
        footer={null}
      >
        <IconCloseCircle
          fontSize={20}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '16px',
            top: '16px',
            zIndex: 999,
          }}
          onClick={e => {
            e.stopPropagation()
            setShowModel(false)
          }}
        />
        <MainText fontSize={24} lineHeight={34} margin={'0 0 16px 0'}>
          联系我们
        </MainText>
        <MainText fontSize={14} lineHeight={21} width={'371px'}>
          如果您觉得 AI 咨询效果不错，欢迎留下您的联系方式。
          或者您也可以添加我的微信
          <span style={{ color: '#FF6011' }}>15067883190</span>
          ，继续深入交流。
        </MainText>
        <FlexStyle margin={'30px 0 0 0'}>
          <Input
            value={phoneNumber}
            onChange={setPhoneNumber}
            style={{
              height: '48px',
              width: '368px',
              borderRadius: '4px',
              marginRight: '20px',
            }}
          />
          <Button
            type={'primary'}
            style={{ height: '48px', width: '93px' }}
            onClick={() => {
              setShowModel(false)
            }}
          >
            提交
          </Button>
        </FlexStyle>
      </Modal>
    </Button>
  )
}
