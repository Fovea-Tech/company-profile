import Link from 'next/link';
import { logout } from '@/app/actions/auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F7F7F4] flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black bg-[#E2EEFF] flex flex-col">
        <div className="p-6 border-b-[3px] border-black">
          <Link href="/admin/dashboard" className="text-2xl font-black tracking-tight text-black flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FFD84D] border-2 border-black rounded-full" />
            Fovea Admin
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-4 font-black">
          <Link 
            href="/admin/dashboard" 
            className="block w-full rounded-xl border-[3px] border-transparent px-4 py-3 text-black transition-all hover:border-black hover:bg-white hover:shadow-[4px_4px_0_#111111]"
          >
            Dashboard
          </Link>
          <Link 
            href="/admin/portfolio" 
            className="block w-full rounded-xl border-[3px] border-transparent px-4 py-3 text-black transition-all hover:border-black hover:bg-white hover:shadow-[4px_4px_0_#111111]"
          >
            Portofolio
          </Link>
          <Link 
            href="/admin/faq" 
            className="block w-full rounded-xl border-[3px] border-transparent px-4 py-3 text-black transition-all hover:border-black hover:bg-white hover:shadow-[4px_4px_0_#111111]"
          >
            FAQ
          </Link>
        </nav>

        <div className="p-6 border-t-[3px] border-black mt-auto">
          <form action={logout}>
            <button 
              type="submit"
              className="w-full rounded-xl border-[3px] border-black bg-[#FF8E8B] px-4 py-3 font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
            >
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
  );
}
