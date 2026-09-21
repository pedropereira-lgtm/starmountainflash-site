-- Tabela dos pedidos vindos do site.
-- Correr no Supabase: SQL Editor → New query → Run.

create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  nome        text not null,
  email       text not null,
  empresa     text,
  telefone    text,
  servico     text,
  mensagem    text,
  origem      text,
  -- Hash com sal do IP. Serve só para limitar pedidos repetidos;
  -- não permite reconstruir o endereço de quem enviou.
  ip_hash     text
);

-- O site consulta os pedidos recentes do mesmo IP para aplicar o limite.
create index if not exists leads_ip_hash_created_at_idx
  on public.leads (ip_hash, created_at desc);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

-- Row Level Security ligada e sem políticas: nenhuma chave pública
-- (anon) consegue ler ou escrever. Só a chave de serviço, usada no
-- servidor pela rota /api/lead, ignora o RLS.
alter table public.leads enable row level security;

revoke all on public.leads from anon, authenticated;

-- ---------------------------------------------------------------------------
-- Apagar o hash do IP ao fim de 30 dias.
-- A política de privacidade promete este prazo, por isso este bloco não é
-- opcional. Requer a extensão pg_cron (Database → Extensions → pg_cron).
-- ---------------------------------------------------------------------------

create extension if not exists pg_cron with schema extensions;

create or replace function public.limpar_ip_hash()
returns void
language sql
security definer
set search_path = public
as $$
  update public.leads
     set ip_hash = null
   where ip_hash is not null
     and created_at < now() - interval '30 days';
$$;

-- Todos os dias às 04:00 UTC.
select cron.schedule(
  'limpar-ip-hash-leads',
  '0 4 * * *',
  $$select public.limpar_ip_hash()$$
);

-- Para confirmar que ficou agendado:
--   select jobname, schedule, active from cron.job;
