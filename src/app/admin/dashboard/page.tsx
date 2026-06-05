import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default async function DashboardPage() {
  const [portfolioReq, faqReq] = await Promise.all([
    supabase.from('Portfolio').select('*', { count: 'exact', head: true }),
    supabase.from('FAQ').select('*', { count: 'exact', head: true }),
  ]);

  const portfolioCount = portfolioReq.count || 0;
  const faqCount = faqReq.count || 0;

  return (
    <div>
      <h1 className="text-4xl font-black tracking-tight text-black mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Portfolio Stats Card */}
        <div className="rounded-3xl border-[3px] border-black bg-[#6FFF9A] p-8 shadow-[8px_8px_0_#111111]">
          <h2 className="text-2xl font-black text-black mb-2">Total Portofolio</h2>
          <p className="text-6xl font-black text-black mb-6">{portfolioCount}</p>
          <Link 
            href="/admin/portfolio"
            className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-white px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
          >
            Kelola Portofolio
          </Link>
        </div>

        {/* FAQ Stats Card */}
        <div className="rounded-3xl border-[3px] border-black bg-[#FFD84D] p-8 shadow-[8px_8px_0_#111111]">
          <h2 className="text-2xl font-black text-black mb-2">Total FAQ</h2>
          <p className="text-6xl font-black text-black mb-6">{faqCount}</p>
          <Link 
            href="/admin/faq"
            className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-white px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
          >
            Kelola FAQ
          </Link>
        </div>

      </div>
    </div>
  );
}
