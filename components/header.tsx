import { Avatar, Space } from '@arco-design/web-react'
import { IconPoweroff } from '@arco-design/web-react/icon'
import { FC } from 'react'
import styled from 'styled-components'
import DotsSVG from '../assets/dots.svg'
import { useRouter } from 'next/router'

const Empty = styled.div`
  flex: auto;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 36px 0;
  > * {
    flex: none;
  }
  > ${Empty} {
    flex: auto;
  }
`

interface Props {}
export const Header: FC<Props> = props => {
  const router = useRouter()
  const handleLogOut = async () => {
    window.sessionStorage.removeItem('auth-key')
    await router.replace('/login')
  }
  return (
    <Container>
      <Empty />
    </Container>
  )
}
