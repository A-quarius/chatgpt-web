import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/chat')

    // const authKey = window.sessionStorage.getItem('auth-key')
    // if (authKey) {
    //   router.replace('/chat')
    // } else {
    //   router.replace('/login')
    // }
  }, [])
  return null
}
