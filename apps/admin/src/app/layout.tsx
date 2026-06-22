'use client';

import { Geist, Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/actions/auth';
import { LayoutDashboard, FolderKanban, HelpCircle, FileText, LogOut } from 'lucide-react';
import React from 'react';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="id" className={`${geist.variable} ${inter.variable}`}>
      <body className="bg-bg text-primary antialiased font-sans">
        {isLoginPage ? (
          <main>{children}</main>
        ) : (
          <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 border-b border-border md:border-b-0 md:border-r bg-surface flex flex-col">
              <div className="p-6 border-b border-border">
                <Link href="/dashboard" className="text-xl font-bold tracking-tight text-primary flex items-center gap-2">
                  <div className="w-6 h-6 bg-secondary rounded-full" />
                  Fovea Admin
                </Link>
              </div>
              
              <nav className="flex-1 p-6 space-y-1">
                <Link 
                  href="/dashboard" 
                  className={`flex items-center gap-3 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === '/dashboard' 
                      ? 'bg-slate-100 text-primary' 
                      : 'text-muted hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
                <Link 
                  href="/portfolio" 
                  className={`flex items-center gap-3 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname.startsWith('/portfolio') 
                      ? 'bg-slate-100 text-primary' 
                      : 'text-muted hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <FolderKanban size={18} />
                  Portofolio
                </Link>
                <Link 
                  href="/blog" 
                  className={`flex items-center gap-3 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname.startsWith('/blog') 
                      ? 'bg-slate-100 text-primary' 
                      : 'text-muted hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <FileText size={18} />
                  Blog
                </Link>
                <Link 
                  href="/faq" 
                  className={`flex items-center gap-3 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname.startsWith('/faq') 
                      ? 'bg-slate-100 text-primary' 
                      : 'text-muted hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <HelpCircle size={18} />
                  FAQ
                </Link>
              </nav>

              <div className="p-6 border-t border-border mt-auto">
                <form action={logout}>
                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2.5 text-sm font-semibold transition-all cursor-pointer"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </form>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
              {children}
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
