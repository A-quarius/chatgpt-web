import styled from "styled-components";

const BasicProps = styled.div<{
  margin?: string
  padding?: string
  height?: string
  width?: string
}>`
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
`
export const MainText = styled(BasicProps)<{
  fontSize: number
  lineHeight: number
  fontWeight?: number
  color?: string
  textAlign?: 'left' | 'right' | 'center'
}>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight || 600};
  line-height: ${props => props.lineHeight}px;
  letter-spacing: 0em;
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.color || 'inherit'};
`

export const FlexStyle = styled(BasicProps)<{
  alignItem?: 'center' | 'left'
  justifyContent?: 'space-around' | 'space-between' | 'center' | 'flex-end'
  flexDirection?: 'column' | 'horizontal'
}>`
  display: flex;
  align-items: ${props => props.alignItem};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
`
export const FlexItem = styled(BasicProps)<{ flex?: string }>`
  flex: ${props => props.flex};
`

export const LinearBackground = styled(BasicProps)<{
  backgroundColor?: string
}>`
  background: ${props =>
    props.backgroundColor ||
    'linear-gradient(74.7deg, rgba(255, 96, 17, 0.2) 0%, rgba(255, 96, 17, 0) 100%)'};
  border-radius: 4px;
  border: 1px solid #1a1817;
`
// 滚动滑块容器
export const ScrollContainer = styled.div<{ height: string }>`
  overflow-x: hidden;
  overflow-y: scroll;
  height: ${props => props.height};
  // IE浏览器隐藏滚动条
  -ms-overflow-style: none;
  // 火狐浏览器隐藏滚动条
  scrollbar-width: none;
  // 谷歌和safari浏览器
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
