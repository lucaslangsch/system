import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && (request.nextUrl.pathname === '/')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (currentUser && request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentUser && (request.nextUrl.pathname !== '/') && !request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/', request.url))
  }

}
 
export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|.*\\.png$).*)'],
}