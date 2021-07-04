import { HttpResponse } from '@/presenters/protocols'

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
