import { getRequestHeaders, getRequestProtocol } from 'h3'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')

  return {
    date: new Date(),
    headers: getRequestHeaders(event),
    proxyHeaders: getProxyRequestHeaders(event),
    remoteIp: event.node.req.socket.remoteAddress || getRequestHeader(event, 'x-forwarded-for'),
    protocol: getRequestProtocol(event)
  }
})
