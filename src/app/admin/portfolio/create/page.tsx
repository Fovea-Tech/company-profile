import Link from 'next/link';
import CreatePortfolioForm from './CreatePortfolioForm';

export default function CreatePortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/portfolio" className="rounded-full border-[3px] border-black bg-white p-2 hover:bg-[#E2EEFF] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>
        <h1 className="text-4xl font-black tracking-tight text-black">Tambah Portofolio</h1>
      </div>

      <div className="rounded-3xl border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#111111]">
        <CreatePortfolioForm />
      </div>
    </div>
  );
}
