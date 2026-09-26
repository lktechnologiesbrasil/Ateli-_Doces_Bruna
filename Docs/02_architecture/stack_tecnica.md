# Stack Técnica

> Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

> Liste o que é usado de fato no projeto, com versão quando relevante — não um catálogo de tudo que poderia ser usado.

## 1. Linguagens

| Linguagem | Onde é usada | Versão |
|---|---|---|
| _..._ | _..._ | _..._ |

## 2. Frameworks e Bibliotecas Principais

| Framework / Lib | Propósito | Versão |
|---|---|---|
| _..._ | _..._ | _..._ |

## 3. Banco de Dados

Tipo (relacional/não relacional), motor, estratégia de migração.

_..._

## 4. Infraestrutura

Onde a aplicação roda (cloud, on-premise, serverless), provedor, regiões.

_..._

## 5. CI/CD

Ferramenta de pipeline, etapas (build, teste, deploy), gatilhos.

_..._

## 6. Ferramentas de Suporte

Observabilidade, logging, monitoramento, gestão de erros — nome da ferramenta, não necessariamente como configurá-la (isso vai em `Docs/09_observability/`).

_..._

## 7. Perguntas Orientadoras

- Cada item desta lista está realmente em uso, ou é aspiracional ("vamos usar X eventualmente")?
- Existe alguma dependência crítica sem alternativa conhecida caso pare de ser mantida?
- A escolha de cada peça da stack está justificada em `decisoes_tecnicas.md`, ou foi uma escolha implícita?

## 8. Critérios de Aceite

- [ ] Toda tecnologia listada está realmente em uso no código, não é aspiracional.
- [ ] Versões relevantes (major, no mínimo) estão registradas para dependências críticas.

## 9. Riscos

Dependências descontinuadas, versões desatualizadas com vulnerabilidades conhecidas, vendor lock-in.

_..._

## 10. Decisões Pendentes

_..._

## Estado atual (Fase 00)

**Stack não decidida.** Único pacote presente: `ddae-engine` (devDependency, ferramenta de governança — não é runtime do site). Ver RD-02 em `Docs/04_governance/registro_decisoes.md`. Contexto: `Docs/atelier-bruna/00_CONTEXT_MASTER.md`.
---

## Recomendação de stack (2026-09-26) — PROPOSTA, aguardando aprovação (RD-08)

Nada foi instalado. Versões consultadas no npm em 2026-09-26.

### Requisitos que decidem
Scroll storytelling (pin, scrub, máscara, horizontal), imagens grandes e otimizadas, SEO local (HTML estático, JSON-LD), performance móvel (LCP/CLS/INP), acessibilidade (`prefers-reduced-motion`, teclado), deploy simples, uma única página sem backend/CMS/autenticação.

### Recomendação
| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Astro** (7.3.5, MIT, Node ≥ 22.12 — temos Node 24) | HTML estático com **zero JS por padrão**; pipeline de imagens (AVIF/WebP, `srcset`, via sharp) nativo; ideal para SEO e Core Web Vitals; sem hidratação de React que a página não usa |
| Linguagem | TypeScript + módulos vanilla | Sem framework de UI: a página é conteúdo + animação |
| Estilo | **CSS moderno** (custom properties, `clamp()`, container queries, `@layer`); sem Tailwind por padrão | Tokens da marca em `:root`; menos abstração; combina com Impeccable/UIPM |
| Motion (narrativa) | **GSAP 3.15.0 core + ScrollTrigger**, importados **dinamicamente após o LCP** | Único conjunto que resolve com robustez pin + scrub + horizontal + `matchMedia` (mobile/reduced-motion). Licença “Standard no charge” (não é OSS; confirmar termos antes de produção comercial) |
| Motion (simples) | **CSS scroll-driven animations** / `IntersectionObserver` para reveals | Sem JS quando suportado; fallback estático |
| Smooth scroll | **Nenhum** (não usar Lenis) | Sem justificativa; quebra comportamento nativo/acessibilidade |
| Motion (React) | Não usar | Sem React não há motivo |
| View Transitions | Não agora | Página única |
| Imagens | Astro assets + sharp; AVIF/WebP; hero com `fetchpriority=high`; abaixo da dobra `loading=lazy` | Orçamento abaixo |
| SEO | `<title>`, description, canonical, Open Graph, JSON-LD `Bakery`/`LocalBusiness`, sitemap, robots | Somente com dados **validados** (Track B) |
| Deploy | Estático (Cloudflare Pages, Vercel ou Netlify) — **decisão futura** | Sem servidor |

### Alternativas avaliadas
- **Next.js 16.3.6 + React + GSAP/Motion:** viável, porém traz runtime React e hidratação sem necessidade; só compensa se surgirem CMS, pedidos próprios ou área logada. **Rejeitada por ora.**
- **HTML/CSS/JS puro (sem build):** mais leve ainda, mas sem pipeline de imagens/SEO automatizado; pior manutenção. **Rejeitada.**
- **Motion (framer) 13.4.4:** excelente em React; para pin/scrub é menos direto que ScrollTrigger. **Rejeitada.**
- **Lenis 1.3.26:** **rejeitada** (ver acima).

### Orçamento de performance (metas para mobile, 4G simulado)
- **LCP** ≤ 2,5 s (meta interna ≤ 2,0 s); **CLS** ≤ 0,05; **INP** ≤ 200 ms (meta ≤ 150 ms).
- **HTML + CSS + JS críticos** ≤ 120 KB gzip; **JS de animação** (GSAP + ScrollTrigger) ≤ 60 KB gzip, carregado após o LCP.
- **Imagem do hero** ≤ 150 KB (mobile) / ≤ 250 KB (desktop); demais imagens ≤ 120 KB cada, `lazy`, dimensões reservadas (sem CLS).
- **Peso inicial** (primeira dobra) ≤ 500 KB; **página inteira** ≤ 3 MB após rolar tudo.
- `prefers-reduced-motion` respeitado; sem long tasks > 50 ms causadas por animação.