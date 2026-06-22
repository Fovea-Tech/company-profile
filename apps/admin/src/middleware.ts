import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('admin_session')?.value;
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const protectedPaths = ['/dashboard', '/faq', '/portfolio', '/blog'];
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtected) {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const payload = await decrypt(sessionCookie);
    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect authenticated users away from the login page
  if (pathname.startsWith('/login') && sessionCookie) {
    const payload = await decrypt(sessionCookie);
    if (payload) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/faq/:path*', '/portfolio/:path*', '/blog/:path*', '/login'],
};

