import '@/../styles/globals.css'
import { Layout } from '@arco-design/web-react'
import type { AppProps } from 'next/app'
import React, {useEffect, useRef} from "react";
import {useRouter} from "next/router";
import {Header} from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const ref = useRef<any>()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = window.innerHeight + 'px'
    }
  }, [Component])
  return(
      <Layout style={{ padding: '0 64px' }} ref={ref}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content style={{ height: 'calc(100% - 108px)' }}>
          <Component {...pageProps} />
        </Layout.Content>
      </Layout>
  )

}
