# Bloco 02 — bootstrap stack astro gsap impeccable

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo

Instalar e configurar a stack aprovada (Astro + TypeScript + CSS moderno + GSAP/ScrollTrigger) com versões estáveis fixadas no lockfile, e ativar Impeccable com auditoria de origem.

## 2. Contexto

Aprovação explícita (2026-09-26): stack de `Docs/02_architecture/stack_tecnica.md` aprovada sem React/Next/Lenis. Impeccable aprovado com auditoria prévia (launcher/VERSION/hook do repositório oficial).

## 3. Problema que Este Bloco Resolve

Não há projeto executável ainda — só documentação (Fase 00/01). Sem o scaffold, os blocos 03/04 não têm onde rodar.

## 4. Escopo

- Rodar `npm create astro@latest` (ou equivalente) confirmando a versão estável atual no registry antes de instalar — não assumir `7.3.5` só porque está em `stack_tecnica.md`.
- Adicionar TypeScript (Astro já inclui suporte nativo), sem framework de UI (`--no-install` de React/Vue/Svelte).
- Instalar GSAP (core + ScrollTrigger) confirmando versão estável atual.
- Auditar o Impeccable já vendorizado em `.claude/skills/impeccable/` (registrado em `21_DESIGN_TOOLING_LOG.md`): confirmar origem do launcher/VERSION/hook antes de rodar o binário do engine pela primeira vez.
- Registrar hash/origem do binário do engine quando baixado.
- Confirmar hook do Claude Code como project-local (não mover para `~/.claude/`).
- Atualizar `Docs/02_architecture/stack_tecnica.md` com as versões efetivamente instaladas.

## 5. Fora de Escopo

- Deploy/hospedagem (bloqueado explicitamente nesta fase).
- CMS, backend, autenticação.
- Fontes definitivas (decisão de tipografia acontece no bloco 03, mas o carregamento técnico de fonte é preparado aqui).

## 6. Arquivos e Pastas Envolvidos

- Raiz do projeto: `astro.config.mjs`, `tsconfig.json`, `package.json`, `package-lock.json`, `src/`, `public/`.
- `.claude/skills/impeccable/` (já existe; auditar, não recriar).
- `Docs/02_architecture/stack_tecnica.md`, `Docs/atelier-bruna/21_DESIGN_TOOLING_LOG.md`.

## 7. Dependências

- Nenhuma dependência bloqueante do bloco 01 (pode rodar em paralelo), mas o bloco 03 depende deste.

## 8. Plano de Implementação

1. Consultar npm registry para versões estáveis atuais de `astro` e `gsap` (não assumir números da pesquisa anterior).
2. Rodar o scaffold do Astro na raiz do projeto (sem sobrescrever `Docs/`, `PRODUCT.md`, `.claude/`).
3. Instalar `gsap` como dependência.
4. Configurar `tsconfig.json` estrito o suficiente para o projeto (sem exagero de regras).
5. Auditar Impeccable: ler `VERSION`/launcher, confirmar fonte oficial, decidir sobre hooks (project-local, opt-in).
6. Rodar Impeccable uma vez para confirmar operacional; registrar em `21_DESIGN_TOOLING_LOG.md`.
7. Atualizar `stack_tecnica.md` com números reais instalados (via `package-lock.json`).

## 9. Critérios de Aceite

- [x] Projeto Astro roda localmente (`npm run build` sem erro; `npm run dev` a validar no bloco 03 durante o QA visual).
- [x] Nenhuma dependência de React/Next/Lenis presente em `package.json`.
- [x] Versões fixadas em `package-lock.json` batem com o que está documentado em `stack_tecnica.md` (astro 7.3.5, gsap 3.15.0).
- [x] Impeccable operacional (`impeccable context` executado com sucesso, leu `PRODUCT.md`).
- [x] Hook do Claude Code é project-local (`.claude/settings.local.json`, gitignorado).

## 10. Validações Obrigatórias

- [x] `npm run build` sem erro.
- [ ] `ddae-engine validate` — rodar ao final da sessão (bloco 04), depois de todas as mudanças em `Docs/`.

## 11. Segurança

Não baixar/executar binário do Impeccable engine sem confirmar que corresponde ao mecanismo oficial pinned; registrar hash quando obtido.

## 12. Performance

Orçamento de performance de `stack_tecnica.md` (LCP ≤2.5s, JS crítico ≤120KB gzip, GSAP ≤60KB gzip carregado após LCP) é a meta para os blocos seguintes; este bloco só garante que a stack permite atingi-la (imports dinâmicos, pipeline de imagem do Astro).

## 13. Design System / UX

Foundations mínimas de `Docs/07_design_system/tokens_design.md` são criadas aqui como CSS custom properties (cores, tipografia, spacing, motion tokens) — sem sistema corporativo grande.

## 14. Riscos

- Versão do Astro/GSAP pesquisada anteriormente pode estar desatualizada até a execução deste bloco — sempre reconferir no registry.
- Download do binário do Impeccable engine é rede externa; se falhar, seguir caminho manual já documentado em `21`.

## 15. Pendências Esperadas

- P4: hooks do Impeccable ficam opt-in; se não ativados agora, registrar como pendência para decisão futura.

## 16. Feedback Obrigatório

_Lembrete: ao final deste bloco, gerar e preencher o feedback via `ddae-engine feedback create --block bloco_02_bootstrap_stack_astro_gsap_impeccable --session session_01_concept_01_experience_foundation`. Sem feedback preenchido, o bloco não está concluído._

## 17. Commit Semântico Sugerido

_Sugestão de commit no padrão de `Docs/04_governance/convencoes_commits.md`. Nunca executado automaticamente — exige confirmação explícita do usuário._

```
feat(bootstrap_stack_astro_gsap_impeccable): _..._
```
