import { requestInstance as request } from '@/axios'
import type { BizResponse } from '#/axios'


export const dictTypeTree: () => Promise<BizResponse<any>> = () => {
  return request.post('/dictionary/tree')
}