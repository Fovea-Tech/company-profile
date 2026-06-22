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
