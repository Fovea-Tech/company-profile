# Panduan Setup Supabase untuk Fovea Teknologi (v2)

Kita menggunakan **Supabase** untuk database dan media storage, sepenuhnya kompatibel dengan Cloudflare Pages Edge Runtime.

Berikut adalah langkah-langkah setup database dan storage:

## Langkah 1: Buat Project di Supabase
1. Buka [supabase.com](https://supabase.com) dan buat project baru (gratis).
2. Tunggu beberapa menit hingga database Anda siap digunakan.

## Langkah 2: Buat Tabel SQL
1. Di Dashboard Supabase Anda, masuk ke menu **SQL Editor** (ikon terminal/kurung kurawal di menu sebelah kiri).
2. Klik **New Query**.
3. Copy dan Paste seluruh script SQL berikut dari [schema.sql](file:///home/ifand/Projects/Web/company-profile/schema.sql), lalu klik tombol **RUN**:

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
  "title" text NOT NULL,
  "category" text NOT NULL,
  "image" text NOT NULL,
  "description" text NOT NULL,
  "client" text,
  "year" text,
  "tech" text,
  "challenge" text,
  "solution" text,
  "results" text,
  "link" text,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 3. Buat tabel FAQ
CREATE TABLE public."FAQ" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "question" text NOT NULL,
  "answer" text NOT NULL,
  "order" integer DEFAULT 0 NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 4. Buat tabel Blog
CREATE TABLE public."Blog" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "title" text NOT NULL,
  "slug" text UNIQUE NOT NULL,
  "content" text NOT NULL,
  "image" text NOT NULL,
  "category" text NOT NULL,
  "status" text DEFAULT 'draft' NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- 5. Matikan Row Level Security (RLS) sementara karena kita menggunakan Service Role Key
ALTER TABLE public."User" DISABLE ROW LEVEL SECURITY;
ALTER TABLE public."Portfolio" DISABLE ROW LEVEL SECURITY;
ALTER TABLE public."FAQ" DISABLE ROW LEVEL SECURITY;
ALTER TABLE public."Blog" DISABLE ROW LEVEL SECURITY;

-- 6. Tambahkan User Admin Pertama (Password: admin123)
INSERT INTO public."User" (id, email, password, name) 
VALUES ('admin-1', 'admin@fovea.digital', '$2a$10$wT2.6.2fT8b.h7P2YjW9G.Y/a.rI0a3d3c.QZ9C5jZ/lU0vT6Yy1u', 'Admin Fovea')
ON CONFLICT (email) DO NOTHING;
```

## Langkah 3: Setup Storage untuk Gambar Portfolio & Blog
Kita memerlukan bucket untuk mengunggah gambar portofolio dan blog dari dashboard admin:
1. Buka menu **Storage** di dashboard sebelah kiri Supabase Anda.
2. Klik **New Bucket**.
3. Isi Name dengan **`media`**.
4. Aktifkan toggle **Public** (agar gambar dapat diakses secara publik oleh pengunjung website).
5. Klik **Create Bucket**.

## Langkah 4: Hubungkan ke Cloudflare Pages (Enviroment Variables)
Dapatkan API Key dari **Project Settings > API**:
1. Salin **Project URL**.
2. Salin kunci **`service_role`** (jangan gunakan anon public).

Buka dashboard Cloudflare Anda > masuk ke Pages project Anda > **Settings** > **Environment variables**.
Tambahkan 2 variabel berikut di environment *Production* dan *Preview*:
- `NEXT_PUBLIC_SUPABASE_URL`: (Isi dengan Project URL Supabase)
- `SUPABASE_SERVICE_ROLE_KEY`: (Isi dengan service_role key Supabase)
- `JWT_SECRET`: (Isi dengan secret key acak Anda untuk JWT Session)

## Langkah 5: Selesai!
Re-run deployment di Cloudflare Pages untuk mengaplikasikan konfigurasi monorepo baru.
