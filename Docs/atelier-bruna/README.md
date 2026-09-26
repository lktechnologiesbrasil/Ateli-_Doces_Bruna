# Base documental — Ateliê Doces Bruna

Documentação de **contexto do negócio e da marca** do projeto da landing page/site institucional do Ateliê Doces Bruna.

> Nota de caminho: o DDAE Engine usa a pasta `Docs/` (D maiúsculo). Como `docs/` e `Docs/` colidem no Windows, esta base vive em `Docs/atelier-bruna/`, dentro da estrutura do DDAE.

## Como navegar

| Arquivo | Conteúdo |
|---|---|
| [`00_CONTEXT_MASTER.md`](./00_CONTEXT_MASTER.md) | **Fonte canônica.** Leitura rápida de todo o contexto. |
| [`01_BRAND_IDENTITY.md`](./01_BRAND_IDENTITY.md) | Logo, paleta, tipografia, tom, fotografia, anti-padrões visuais. |
| [`02_BUSINESS_AND_OPERATION.md`](./02_BUSINESS_AND_OPERATION.md) | Negócio, produtos, operação, dados públicos, jornadas de conversão. |
| [`03_DIGITAL_ECOSYSTEM.md`](./03_DIGITAL_ECOSYSTEM.md) | Instagram, Linktree, Yooga, WhatsApp, Google; papel de cada um. |
| [`04_WEBSITE_STRATEGY.md`](./04_WEBSITE_STRATEGY.md) | Objetivos, SEO local, princípios de UX, anti-padrões. |
| [`05_LANDING_PAGE_ARCHITECTURE.md`](./05_LANDING_PAGE_ARCHITECTURE.md) | Estrutura inicial das seções da landing page. |
| [`06_CONTENT_AND_ASSETS.md`](./06_CONTENT_AND_ASSETS.md) | Fotografia, inventário de assets necessários. |
| [`07_DISCOVERY_GAPS.md`](./07_DISCOVERY_GAPS.md) | Checklist do que falta confirmar com a Bruna. |
| [`08_SOURCES_AND_EVIDENCE.md`](./08_SOURCES_AND_EVIDENCE.md) | Fontes e evidências, com data de observação. |

## Regras

1. **Todo novo agente ou sessão lê primeiro o `00_CONTEXT_MASTER.md`.**
2. O MASTER é a fonte canônica: resume; os demais arquivos aprofundam. Informação nova e relevante atualiza o MASTER primeiro.
3. **Separe fatos de hipóteses.** Toda afirmação carrega um destes rótulos:
   - **CONFIRMADO** — informado diretamente pelo dono do projeto/Bruna;
   - **OBSERVADO** — visto em fonte pública, em data registrada; pode ter mudado;
   - **DIREÇÃO** — hipótese ou decisão criativa/estratégica, ainda não validada;
   - **A CONFIRMAR** — lacuna a ser resolvida com a Bruna (ver `07`).
4. **Informações voláteis** (seguidores, posts, avaliações, horários, telefone, catálogo) devem sempre trazer a data da observação e ser revalidadas antes da produção. Nunca hardcodar no produto final.
5. Não inventar história, números, avaliações, prêmios, produtos ou endereço.

## Relação com o DDAE Engine

O DDAE (`Docs/00_…09_`, `CLAUDE.md`, `AGENTS.md`) é a camada de governança (visão, arquitetura, decisões, sessões, gates). Ele **referencia** esta pasta em vez de duplicá-la. Ver a seção “Relação com o DDAE” no MASTER.
