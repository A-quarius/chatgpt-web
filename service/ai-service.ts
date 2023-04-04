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
  async queryAiModelList() {
    return await request('/api/modelList', {})
  },
  /**
   * 粘贴上传数据链接
   * @param link
   */
  async uploadUrl(link: string) {
    return await request('/api/uploadUrl', {})
  },
  /**
   * 删除已经上传的文件或链接
   * @param link
   */
  async removeUploadedFileOrLink(link: string) {
    return await request('/api/remove', {})
  },
  /**
   * 查询实时数据
   */
  async queryNowData() {
    return await request('/api/nowData', {})
  },
  /**
   * 查询模型详情数据
   */
  async queryModelDetail() {
    return await request('/api/modelDetail', {})
  },
  /**
   * 创建模型
   */
  async createModel() {
    return await request('/api/createModel', {})
  },
}

export default aiService as typeof aiService
