import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { deleteFaq } from '@/app/actions/faq';

export default async function AdminFaqPage() {
  const faqs = await prisma.faq.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl font-black tracking-tight text-black">Kelola FAQ</h1>
        <Link 
          href="/admin/faq/create"
          className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
        >
          + Tambah FAQ Baru
        </Link>
      </div>

      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#111111] flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <div className="inline-flex rounded-full border-2 border-black bg-[#E2EEFF] px-3 py-1 text-xs font-black mb-3">
                Urutan: {faq.order}
              </div>
              <h3 className="text-xl font-black text-black mb-2">{faq.question_id}</h3>
              <p className="text-base font-medium text-[#2C2C2C]">{faq.answer_id}</p>
            </div>
            <div>
              <form action={async () => {
                'use server';
                await deleteFaq(faq.id);
              }}>
                <button 
                  type="submit"
                  className="rounded-xl border-[3px] border-black bg-[#FF8E8B] px-5 py-2 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                >
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}
        {faqs.length === 0 && (
          <div className="p-8 text-center border-[3px] border-black rounded-2xl bg-white shadow-[8px_8px_0_#111111]">
            Belum ada data FAQ.
          </div>
        )}
      </div>
    </div>
  );
}
