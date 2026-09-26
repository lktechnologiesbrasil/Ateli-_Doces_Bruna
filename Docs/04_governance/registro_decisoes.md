# Registro de Decisões

> Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

> Este registro cobre decisões de processo, governança e produto. Decisões puramente arquiteturais/técnicas têm registro dedicado em `Docs/02_architecture/decisoes_tecnicas.md` — se a decisão é sobre código/infra, prefira aquele documento; se é sobre processo, prioridade ou governança, use este.

## 1. Objetivo

Registrar decisões caras de reverter para que ninguém (humano ou agente) precise reconstruir o raciocínio por trás delas a partir de memória ou suposição.

## 2. Decisões

Uma entrada por decisão, mais recente primeiro. Nunca edite uma decisão antiga para "corrigi-la" — registre uma nova decisão que a supersede.

### RD-01 — _Título da decisão_

- **Data:** _..._
- **Contexto:** _..._
- **Decisão:** _..._
- **Alternativas consideradas:** _..._
- **Consequências:** _..._
- **Status:** Vigente / Superada por RD-_NN_

## 3. Governança para Mudanças Feitas por Agentes de IA

- [ ] Mudança de escopo durante a execução de um bloco é reportada antes de ser implementada, não decidida unilateralmente pelo agente.
- [ ] Toda decisão que um agente toma sem confirmação prévia do usuário (quando a confirmação era exigida) é registrada como pendência P1 no feedback do bloco.
- [ ] Decisões tomadas por um agente que afetam contratos (`Docs/03_contracts/`) ou design system (`Docs/07_design_system/`) são registradas aqui mesmo quando pequenas.

## 4. Perguntas Orientadoras

- Esta decisão foi tomada por uma pessoa/agente específico sob pressão de tempo? Isso deveria ser revisitado com calma depois?
- Esta decisão contradiz alguma decisão anterior (aqui ou em `decisoes_tecnicas.md`)? Se sim, a anterior foi marcada como superada?

## 5. Decisões Pendentes

_..._

## Decisões registradas — Ateliê Doces Bruna

### RD-01 — `00_CONTEXT_MASTER.md` é a fonte canônica de contexto de negócio/marca

- **Data:** 2026-09-26
- **Contexto:** o projeto tem contexto de marca/negócio extenso e o DDAE traz documentos de governança próprios; duas fontes concorrentes gerariam divergência.
- **Decisão:** `Docs/atelier-bruna/00_CONTEXT_MASTER.md` é a fonte canônica de contexto do negócio e da marca. Os documentos DDAE (`01_product`, `02_architecture`, `04_governance`, `07_design_system`) cobrem governança/processo e **referenciam** o MASTER sem copiá-lo. Toda informação nova e relevante atualiza o MASTER primeiro.
- **Alternativas consideradas:** duplicar o contexto dentro de `Docs/01_product`; usar apenas o DDAE.
- **Consequências:** leitura obrigatória do MASTER por todo agente/sessão; fatos, observações, direção e lacunas rotulados; dados voláteis com data.
- **Status:** Vigente

### RD-02 — Fase 00 sem stack e sem código de frontend

- **Data:** 2026-09-26
- **Decisão:** nenhuma stack, framework, biblioteca visual ou código de landing page até as Fases 01–04 (discovery, arquitetura, direção visual, concept). O DDAE é instalado como `devDependency`.
- **Status:** Vigente
### RD-03 — Fase 00 concluída; Fase 01 (Discovery) iniciada; implementação bloqueada

- **Data:** 2026-09-26
- **Contexto:** a fundação (Git, DDAE, contexto) foi enviada a `origin/main` (`c150756`, `aa8f082`). O próximo trabalho é coletar informação e assets reais com a Bruna.
- **Decisão:** Discovery é o trabalho atual. **Nenhum código, stack, design system ou protótipo** até os critérios de `Docs/atelier-bruna/13_DISCOVERY_DOD.md` estarem cumpridos (gaps P0 confirmados com evidência) ou o dono do projeto registrar exceção aqui.
- **Referências:** `Docs/atelier-bruna/07_DISCOVERY_GAPS.md`, `09_DISCOVERY_INTERVIEW.md`, `10_ASSET_REQUEST.md`, `11_ASSET_INVENTORY.md`, `12_CONTENT_MATRIX.md`.
- **Consequências:** requisitos funcionais (`Docs/01_product/requisitos_funcionais.md`) só serão escritos após o Discovery.
- **Status:** Vigente- **Atualização 2026-09-26:** pacote client-facing preparado (`14`, `15`, `16`). Próxima ação externa: entrevista + coleta de materiais. Fase 01 **não** concluída; segue o DoD.

### RD-04 — Mudança de estratégia: Track A (protótipo público) e Track B (validação para produção)

- **Data:** 2026-09-26
- **Contexto:** não há contato operacional com a Bruna; esperar entrevista e envio de materiais bloqueia o projeto.
- **Decisão:** a Fase 01 deixa de ser gate para o concept. **Track A** avança com fontes públicas (Instagram, Yooga, Linktree, Google) e fotos públicas selecionadas, com origem registrada. **Track B** (contatos, horários, autorização de assets, dados legais, fatos privados) é obrigatório **antes do lançamento**, não antes do protótipo. Substitui RD-03 no ponto “implementação bloqueada”; RD-03 continua valendo para o **lançamento**.
- **Regra de evidência:** proibido inventar história, datas, números, depoimentos, prêmios, receitas ou fatos pessoais. Só o que for comprovável em fonte pública, com fonte registrada.
- **Status:** Vigente

### RD-05 — Instagram (e canais públicos) como fonte primária de branding e fotografia

- **Data:** 2026-09-26
- **Decisão:** o DNA visual vem do Instagram, do logo público (Yooga), do cardápio (Yooga) e do Linktree/Google. Quando tendência e DNA da marca conflitam, vence o DNA da Bruna. Não desenhar marca nova. Ver `Docs/atelier-bruna/17_INSTAGRAM_BRAND_ATLAS.md` e `18_PUBLIC_CONTENT_INVENTORY.md`.
- **Restrições:** não remover marca d’água, não falsificar foto, não gerar produtos falsos; imagens públicas só para protótipo/pitch local, **fora do Git**; uso comercial exige autorização (Track B).
- **Status:** Vigente

### RD-06 — Ferramentas de design do projeto

- **Data:** 2026-09-26
- **Decisão:** UI/UX Pro Max (`ui-ux-pro-max-cli@2.15.0`, project-local) e Impeccable (build oficial vendored em `.claude/skills/impeccable`, skill v4.4.0, após o instalador falhar com HTTP 404) fazem parte do workflow; **img-to-html não é instalada** (regeneraria fotos com IA, exige stack sem framework, sem licença explícita); só sua metodologia de comparação é aproveitada. Detalhes, comandos e decisões aceitas/rejeitadas: `Docs/atelier-bruna/21_DESIGN_TOOLING_LOG.md`.
- **Pendências:** aprovar hooks do Impeccable; aprovar o download do binário do engine; instalar Python 3 se quiser rodar os scripts do UI/UX Pro Max.
- **Status:** Vigente

### RD-07 — Princípios de motion

- **Data:** 2026-09-26
- **Decisão:** motion serve ao storytelling; só `transform`/`opacity`/`clip-path`; scroll **nativo**, sem scroll-jacking e sem biblioteca de smooth-scroll; pin/scrub em no máximo 3 cenas; conteúdo legível sem animação; `prefers-reduced-motion` obrigatório; mobile sem pin horizontal; sem loader. Ver `Docs/atelier-bruna/20_SCROLL_STORYBOARD.md`.
- **Status:** Vigente

### RD-08 — Stack (PROPOSTA — aguardando aprovação)

- **Data:** 2026-09-26
- **Decisão proposta:** Astro (site estático) + CSS moderno + TypeScript + GSAP (core + ScrollTrigger, carregados de forma diferida) + CSS scroll-driven animations onde houver suporte. Justificativa e alternativas: `Docs/02_architecture/stack_tecnica.md`.
- **Status:** **Proposta** (não vigente até o dono do projeto aprovar; nenhum pacote instalado)