import { resolveRoute } from 'vite-plugin-ssr/routing'

// We use a Route Function to implement advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === '/detail' || pageContext.urlPathname === '/detail/') {
    const name = 'anonymous'
    return { routeParams: { name } }
  }
  return resolveRoute('/detail/@name', pageContext.urlPathname)
}
