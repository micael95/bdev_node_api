import { HttpResponse } from '@/presenters/protocols'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
