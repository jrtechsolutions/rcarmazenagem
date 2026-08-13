# RC Armazenagem

Site institucional da RC Armazenagem. Site novo — não havia site próprio antes. Identidade do Brand Book + wireframes hi-fi, com hierarquia de cor invertida em relação ao site de Transportes (verde dominante).

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Mesmo setup do site de Transportes.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3001` (ou a porta que o Next indicar).

## Páginas

- `/` home
- `/estrutura` `/compliance` `/como-funciona` `/transporte`
- `/contato` `/orcamento` `/confirmacao`
- `/sitemap.xml` e `/robots.txt`

## Formulário

`POST /api/orcamento` — validação client + server (inclui CNPJ), honeypot, rate limit por IP.

Configure um canal em `.env.local` (veja `.env.example`):

- `CONTACT_WEBHOOK_URL` **ou**
- `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL`

Sem isso, o envio só funciona em desenvolvimento (log no servidor). Em produção retorna 503.

## Dados pendentes do cliente

Não inventar. Placeholders visíveis até confirmação:

- Metragem do galpão (m²)
- Posições de pallet / níveis de rack
- Climatização / controle de temperatura
- Prazo mínimo de contrato
- Seguro da carga armazenada
- Fotos reais (fachada, corredores, expedição)
- Depoimentos reais

Não fazer deploy em produção até esses dados estarem confirmados.

## Segurança / hospedagem

- Headers: CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`
- HTTPS obrigatório na frente (Cloudflare é o caminho mais simples)
