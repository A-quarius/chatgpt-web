import { FlexStyle, MainText } from '@/components/styled-components'
import LeftArrow from '@/assets/left-arrow.svg'
import React, { useMemo } from 'react'

interface Props {
  step: 'list' | 'chat' | 'form' | 'detail'
  setStep: (val: 'list' | 'chat' | 'form' | 'detail') => void
  // 如果是点击的模型详情，将模型的名字传过来作为页面的title
  detailTitle?: string
}
export const PageHeaderTitle: React.FC<Props> = props => {
  const titles = [
    { label: 'AI 咨询', value: 'list' },
    { label: '提交定制需求｜Chat With AI', value: 'chat' },
    { label: '提交定制需求｜表单填写', value: 'form' },
    { label: '医疗科普文风训练', value: 'detail' },
  ]
  const stepConfig = useMemo(() => {
    return {
      label:
        props.detailTitle ||
        titles.find(item => item.value === props.step)?.label ||
        'AI 咨询',
      backTo: 'list',
    }
  }, [props.step])

  const handleBack = () => {
    if (stepConfig.backTo) {
      props.setStep(stepConfig.backTo as any)
    }
  }
  return (
    <FlexStyle alignItem={'center'}>
      {props.step !== 'list' && <LeftArrow onClick={handleBack} />}
      <MainText fontSize={24} lineHeight={34} margin={'0 0 0 8px'}>
        {stepConfig.label}
      </MainText>
    </FlexStyle>
  )
}
