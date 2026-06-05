import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { deletePortfolio } from '@/app/actions/portfolio';
import Image from 'next/image';

export default async function AdminPortfolioPage() {
  const { data: portfolios = [] } = await supabase
    .from('Portfolio')
    .select('*')
    .order('createdAt', { ascending: false });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl font-black tracking-tight text-black">Kelola Portofolio</h1>
        <Link 
          href="/admin/portfolio/create"
          className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
        >
          + Tambah Proyek Baru
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(portfolios || []).map(project => (
          <div key={project.id} className="rounded-2xl border-[3px] border-black bg-white overflow-hidden shadow-[8px_8px_0_#111111] flex flex-col">
            <div className="relative aspect-16/10 w-full border-b-[3px] border-black bg-[#E2EEFF]">
              <Image src={project.image} alt={project.title_id} fill className="object-cover" sizes="33vw" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs font-black uppercase text-[#2C2C2C] mb-2">{project.category_id}</div>
              <h3 className="text-xl font-black text-black mb-4 line-clamp-2">{project.title_id}</h3>
              
              <div className="mt-auto">
                <form action={async () => {
                  'use server';
                  await deletePortfolio(project.id);
                }}>
                  <button 
                    type="submit"
                    className="w-full rounded-xl border-[3px] border-black bg-[#FF8E8B] px-4 py-2 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                  >
                    Hapus
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
