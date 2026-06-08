import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get('admin_session')?.value;

  // Protect all /admin routes except /admin/login
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const payload = await decrypt(sessionCookie);
    if (!payload) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect logged in users away from login page
  if (request.nextUrl.pathname.startsWith('/admin/login') && sessionCookie) {
    const payload = await decrypt(sessionCookie);
    if (payload) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
