import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { FolderKanban, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const [portfolioReq, faqReq, blogReq] = await Promise.all([
    supabase.from('Portfolio').select('*', { count: 'exact', head: true }),
    supabase.from('FAQ').select('*', { count: 'exact', head: true }),
    supabase.from('Blog').select('*', { count: 'exact', head: true }),
  ]);

  const portfolioCount = portfolioReq.count || 0;
  const faqCount = faqReq.count || 0;
  const blogCount = blogReq.count || 0;

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Selamat datang di panel administrasi Fovea Technology.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Portfolio Stats Card */}
        <div className="card-clean p-6 flex flex-col justify-between h-48">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Total Portofolio</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <FolderKanban size={18} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 mt-4">{portfolioCount}</p>
          </div>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-4 group cursor-pointer"
          >
            Kelola Portofolio
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Blog Stats Card */}
        <div className="card-clean p-6 flex flex-col justify-between h-48">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Total Artikel Blog</span>
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                <FileText size={18} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 mt-4">{blogCount}</p>
          </div>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 mt-4 group cursor-pointer"
          >
            Kelola Blog
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* FAQ Stats Card */}
        <div className="card-clean p-6 flex flex-col justify-between h-48">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Total FAQ</span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                <HelpCircle size={18} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 mt-4">{faqCount}</p>
          </div>
          <Link 
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-700 mt-4 group cursor-pointer"
          >
            Kelola FAQ
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
