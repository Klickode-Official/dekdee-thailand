-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create schools table
create table public.schools (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  location text not null,
  city text not null,
  lat double precision not null,
  lng double precision not null,
  curriculum text[] default '{}',
  fee_min integer,
  fee_max integer,
  fee_currency text default 'THB',
  rating double precision default 0,
  review_count integer default 0,
  image text,
  description text,
  facilities text[] default '{}',
  featured boolean default false,
  promoted boolean default false,
  type text not null check (type in ('international', 'private', 'islamic', 'public')),
  students integer,
  established integer,
  admission_open boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create reviews table
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  school_id uuid references public.schools(id) on delete cascade,
  author text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  title text not null,
  content text not null,
  helpful integer default 0,
  avatar text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create blog_posts table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text,
  image text,
  author text not null,
  category text,
  read_time integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Setup Row Level Security (RLS)
alter table public.schools enable row level security;
alter table public.reviews enable row level security;
alter table public.blog_posts enable row level security;

-- Create policies for public access (Read-only)
create policy "Schools are viewable by everyone." on public.schools for select using (true);
create policy "Reviews are viewable by everyone." on public.reviews for select using (true);
create policy "Blog posts are viewable by everyone." on public.blog_posts for select using (true);

-- Insert some dummy data matching the mock data structure for testing
insert into public.schools (id, name, slug, location, city, lat, lng, curriculum, fee_min, fee_max, fee_currency, rating, review_count, image, description, facilities, featured, promoted, type, students, established, admission_open)
values 
  ('11111111-1111-1111-1111-111111111111', 'Bangkok International School', 'bangkok-international-school', 'Sukhumvit Soi 15, Bangkok', 'Bangkok', 13.7383, 100.5585, '{"International (American)", "IB (International Baccalaureate)"}', 650000, 850000, 'THB', 4.8, 234, 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop', 'Parents love this school for its warm community feel and rigorous academics. Kids here genuinely enjoy learning, and the teachers know every student by name.', '{"Olympic Pool", "Sports Complex", "Science Labs", "Arts Center", "Library", "Cafeteria", "Music Room", "Tennis Courts"}', true, true, 'international', 2100, 1992, true),
  ('22222222-2222-2222-2222-222222222222', 'Al-Furqan Islamic School', 'al-furqan-islamic-school', 'Sathorn, Bangkok', 'Bangkok', 13.7208, 100.5322, '{"Islamic", "Thai National"}', 85000, 120000, 'THB', 4.5, 98, 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop', 'A school where faith and education go hand in hand. Families here appreciate the strong moral foundation while their children excel in academics and build lifelong friendships.', '{"Mosque", "Library", "Computer Lab", "Sports Field", "Cafeteria", "Science Lab"}', false, false, 'islamic', 650, 1998, true);

