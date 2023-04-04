import { request } from '@/service/service.config'

const InfoCollectionService = {
  /**
   * 查询行业列表
   */
  async queryIndustry() {
    return request('/api/industry', {})
  },
  /**
   * 获取用户角色
   */
  async queryPosition() {
    return request('/api/position', {})
  },
  /**
   * 在 FCS 上最希望使用的功能
   */
  async queryFCSFeature() {
    return request('/api/feature', {})
  },
  /**
   * 提交收集的信息
   */
  async submit() {
    return request('/api/submit', {})
  },
}

export default InfoCollectionService as typeof InfoCollectionService
