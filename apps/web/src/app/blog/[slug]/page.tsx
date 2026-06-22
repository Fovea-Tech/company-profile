import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('Blog').select('slug');
  return (posts || []).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const { data: post } = await supabase
    .from('Blog')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan | Fovea Technology',
    };
  }

  return {
    title: `${post.title} | Fovea Technology`,
    description: post.content.slice(0, 150).replace(/[#*`_]/g, ''),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 150).replace(/[#*`_]/g, ''),
      images: post.image ? [{ url: post.image }] : [],
    }
  };
}

export default async function PublicBlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('Blog')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!post) {
    notFound();
  }

  const formatDate = (dateStr: string | Date | undefined) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return String(dateStr);
    }
  };

  const getReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} menit baca`;
  };

  // Improved Markdown Parser for editorial feel
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    let isFirstParagraph = true;

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('# ')) {
        return <h1 key={idx} className="text-xl sm:text-2xl font-extrabold mt-10 mb-5 text-slate-900 tracking-tight">{trimmed.slice(2)}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="text-lg sm:text-xl font-bold mt-8 mb-4 text-slate-900 tracking-tight">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-base sm:text-lg font-bold mt-6 mb-3 text-slate-900 tracking-tight">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return <li key={idx} className="list-none relative pl-6 text-base text-slate-700 my-2 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">{trimmed.slice(2)}</li>;
      }
      if (trimmed.startsWith('> ')) {
        return <blockquote key={idx} className="border-l-4 border-blue-500 bg-slate-50 p-5 italic text-slate-700 text-base sm:text-lg my-6 rounded-r-xl font-medium">{trimmed.slice(2)}</blockquote>;
      }
      if (trimmed === '') {
        return <div key={idx} className="h-2" />;
      }

      // Drop cap for the first paragraph
      if (isFirstParagraph && trimmed.length > 10) {
        isFirstParagraph = false;
        return (
          <p key={idx} className="text-base text-slate-700 leading-[1.8] my-5">
            <span className="float-left text-4xl font-extrabold text-slate-900 mr-2.5 mt-1 leading-none">
              {trimmed.charAt(0)}
            </span>
            {trimmed.slice(1)}
          </p>
        );
      }

      return <p key={idx} className="text-base text-slate-700 leading-[1.8] my-5">{trimmed}</p>;
    });
  };

  return (
    <main className="pb-24 pt-32 bg-white">
      <div className="page-shell">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-10 cursor-pointer uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Kembali ke Jurnal
        </Link>

        {/* ── Editorial Header ── */}
        <header className="mb-10 max-w-4xl">
          <h1 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-5">
            {post.title}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-3xl">
            {post.content.split('\n').find((l: string) => l.trim().length > 20 && !l.startsWith('#'))?.slice(0, 120)}...
          </p>
        </header>

        {/* ── Editorial Featured Image ── */}
        {post.image && (
          <div className="relative aspect-[21/9] w-full rounded-[2rem] bg-slate-100 overflow-hidden mb-16 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {/* ── Split Layout for Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Sidebar: Metadata */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-32 space-y-8 border-l-2 border-slate-100 pl-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Kategori</p>
                <p className="text-sm font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded-md">{post.category}</p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Calendar size={12} /> Tanggal Publikasi
                </p>
                <p className="text-sm font-semibold text-slate-800">{formatDate(post.createdAt)}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Clock size={12} /> Waktu Baca
                </p>
                <p className="text-sm font-semibold text-slate-800">{getReadingTime(post.content)}</p>
              </div>
            </div>
          </aside>

          {/* Right Main Column: Prose */}
          <article className="lg:col-span-8 order-1 lg:order-2">
            <div className="max-w-3xl">
              {renderContent(post.content)}
            </div>

            {/* Divider */}
            <hr className="my-16 border-slate-200" />

            {/* CTA Banner integrated subtly */}
            <section className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 flex flex-col items-start max-w-3xl">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mb-6">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                Siap untuk transformasi digital?
              </h2>
              <p className="text-slate-600 text-base max-w-lg mb-8 leading-relaxed">
                Jadikan Fovea partner teknis untuk digitalisasi sekolah atau proyek agensi Anda. Kami siap memberikan konsultasi gratis.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Mulai Kolaborasi
              </Link>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
