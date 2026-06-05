# Panduan Setup Supabase untuk Fovea Teknologi

Kita telah beralih sepenuhnya dari Prisma/Cloudflare D1 ke **Supabase** untuk stabilitas dan kompatibilitas 100% dengan Cloudflare Pages Edge Runtime.

Berikut adalah langkah-langkah yang harus Anda lakukan:

## Langkah 1: Buat Project di Supabase
1. Buka [supabase.com](https://supabase.com) dan buat project baru (gratis).
2. Tunggu beberapa menit hingga database Anda siap digunakan.

## Langkah 2: Buat Tabel SQL (Copy-Paste)
1. Di Dashboard Supabase Anda, masuk ke menu **SQL Editor** (ikon terminal/kurung kurawal di menu sebelah kiri).
2. Klik **New Query**.
3. Copy dan Paste seluruh script SQL di bawah ini, lalu klik tombol **RUN**.

```sql
-- 1. Buat tabel User (untuk Admin Login)
CREATE TABLE public."User" (
  "id" text PRIMARY KEY,
  "email" text UNIQUE NOT NULL,
  "password" text NOT NULL,
  "name" text,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 2. Buat tabel Portfolio
CREATE TABLE public."Portfolio" (
  "id" text PRIMARY KEY,
  "title_id" text NOT NULL,
  "title_en" text NOT NULL,
  "category_id" text NOT NULL,
  "category_en" text NOT NULL,
  "image" text NOT NULL,
  "desc_id" text NOT NULL,
  "desc_en" text NOT NULL,
  "client" text,
  "year" text,
  "tech" text,
  "challenge_id" text,
  "challenge_en" text,
  "solution_id" text,
  "solution_en" text,
  "results_id" text,
  "results_en" text,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 3. Buat tabel FAQ
CREATE TABLE public."FAQ" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "question_id" text NOT NULL,
  "question_en" text NOT NULL,
  "answer_id" text NOT NULL,
  "answer_en" text NOT NULL,
  "order" integer DEFAULT 0 NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 4. Matikan Row Level Security (RLS) sementara karena kita menggunakan Service Role Key
ALTER TABLE public."User" DISABLE ROW LEVEL SECURITY;
ALTER TABLE public."Portfolio" DISABLE ROW LEVEL SECURITY;
ALTER TABLE public."FAQ" DISABLE ROW LEVEL SECURITY;
```

## Langkah 3: Tambahkan User Admin Pertama
Masih di SQL Editor, jalankan script ini untuk membuat akun admin (Password: `admin123`):
```sql
INSERT INTO public."User" (id, email, password, name) 
VALUES ('admin-1', 'admin@fovea.digital', '$2a$10$wT2.6.2fT8b.h7P2YjW9G.Y/a.rI0a3d3c.QZ9C5jZ/lU0vT6Yy1u', 'Admin Fovea');
```

## Langkah 4: Sambungkan Supabase ke Cloudflare
1. Masuk ke **Project Settings** di Supabase > menu **API**.
2. Salin URL Anda (`Project URL`).
3. Salin kunci **`service_role`** Anda (TIDAK BOLEH YANG `anon public`).

Lalu, buka **Dashboard Cloudflare** > project `fovea` > **Settings** > **Environment variables**.
Tambahkan 2 variabel berikut (Pilih environment: *Production* & *Preview*):
- `NEXT_PUBLIC_SUPABASE_URL`: (Isi dengan Project URL Anda)
- `SUPABASE_SERVICE_ROLE_KEY`: (Isi dengan service_role key Anda)

## Langkah 5: Selesai!
Kembali ke menu **Deployments** di Cloudflare dan klik **Retry Deployment**. Website Anda kini menggunakan Supabase murni dan dijamin tidak akan ada error Prisma lagi!
