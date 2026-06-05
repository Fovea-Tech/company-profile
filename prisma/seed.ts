import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@fovea.digital' },
    update: {},
    create: {
      email: 'admin@fovea.digital',
      password: hashedPassword,
      name: 'Admin Fovea',
    },
  });

  console.log('Admin seeded:', admin.email, '(password: admin123)');

  // Seed Portfolio
  await prisma.portfolio.upsert({
    where: { id: 'ecommerce-dashboard-pro' },
    update: {},
    create: {
      id: 'ecommerce-dashboard-pro',
      title_id: 'E-Commerce Dashboard Pro',
      title_en: 'E-Commerce Dashboard Pro',
      category_id: 'SaaS Project',
      category_en: 'SaaS Project',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      desc_id: 'Dashboard analitik komprehensif untuk melacak penjualan, inventaris, dan perilaku pelanggan.',
      desc_en: 'Comprehensive analytics dashboard to track sales, inventory, and customer behavior.',
      client: 'RetailMax Global',
      year: '2025',
      tech: 'Next.js, Tailwind CSS, PostgreSQL, Prisma, Chart.js',
      challenge_id: 'Sistem lama berjalan sangat lambat, tidak responsif, dan pelaporan penjualannya harus ditarik secara manual.',
      challenge_en: 'The old system was very slow, unresponsive, and sales reports had to be pulled manually.',
      solution_id: 'Dashboard analitik kustom berbasis Next.js dengan koneksi database real-time.',
      solution_en: 'Custom analytics dashboard based on Next.js with real-time database connection.',
      results_id: 'Efisiensi pelaporan meningkat hingga 300%.',
      results_en: 'Reporting efficiency increased by up to 300%.',
    },
  });

  // Seed FAQ
  await prisma.faq.upsert({
    where: { id: 'faq-1' },
    update: {},
    create: {
      id: 'faq-1',
      question_id: 'Berapa lama waktu pembuatan website custom?',
      question_en: 'How long does it take to build a custom website?',
      answer_id: 'Tergantung kompleksitas. Company profile biasa memakan waktu 2-3 minggu, sedangkan web app kompleks bisa memakan waktu 1-3 bulan.',
      answer_en: 'Depending on complexity. A typical company profile takes 2-3 weeks, while a complex web app can take 1-3 months.',
      order: 1,
    },
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
