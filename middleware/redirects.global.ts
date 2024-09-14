const redirects: { [key: string]: string } = {
  '/home': '/',
}

export default defineNuxtRouteMiddleware((to) => {
  if (redirects[to.path] && !to.query._storyblok) {
    return navigateTo(redirects[to.path])
  }
})
