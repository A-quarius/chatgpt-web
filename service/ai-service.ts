import { request } from '@/service/service.config'

const aiService = {
  /**
   * 发消息给 AI
   * @param msg
   */
  async sendMessageToAi(msg: string) {
    return await request('/api/chat-context', {method: 'POST', body: JSON.stringify({message: msg})})
  },
  /**
   * 查询已创建的 AI 模型
   */
  async test() {
    return await request('/api/foo', {})
  },
}

export default aiService as typeof aiService
