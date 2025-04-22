import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/bookings(.*)',
  '/checkout(.*)',
  '/favorites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
// This middleware is used to protect the routes that require authentication. It uses the Clerk library to check if the user is authenticated and redirects them to the sign-in page if they are not. The `isProtectedRoute` function checks if the requested route matches any of the protected routes defined in the array. If it does, the `auth().protect()` method is called to protect the route. The `config` object defines the matcher for the middleware, which includes all routes except for those that contain a dot (.) or start with `_next`.
// The `api` and `trpc` routes are also included in the matcher to ensure that they are protected as well. This middleware is used to ensure that only authenticated users can access certain routes in the application.
