import { Message } from '@arco-design/web-react'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export const request = async (url: string, options: RequestInit) => {
  try {
    // const formData = new FormData()
    // formData.append('name', 'slr')
    const rs = await fetch(url, {
      ...options,
      headers: {
        "Content-type": "application/json"
      },
      'credentials': 'include',
    })
    const data = await rs.json()
    if (data.code !== '0000') {
      Message.error(data.message || '系统异常')
      return null
    }
    return data?.data || data
  } catch (e) {
    throw new Error('系统异常，请稍后再试')
  }
}
