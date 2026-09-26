# Feedback — Bloco 02: bootstrap stack astro gsap impeccable

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Resumo Executivo

Instalei Astro 7.3.5 + GSAP 3.15.0 na raiz do projeto (via scaffold temporário, copiado por cima da estrutura DDAE já existente) e ativei o Impeccable (engine baixado e verificado por SHA-256 pelo próprio launcher, hook do Claude Code instalado project-local). `npm run build` roda sem erro. Único imprevisto: `package.json` e `.gitignore` tinham BOM UTF-8 herdado do `ddae-engine init`, quebrando o parse do Vite — removido.

## 2. Objetivo do Bloco

Instalar e configurar a stack aprovada com versões estáveis fixadas no lockfile, e ativar Impeccable com auditoria de origem.

## 3. Escopo Implementado

- Versões reconfirmadas no npm registry (astro 7.3.5, gsap 3.15.0) antes de instalar.
- Scaffold Astro `minimal` + TypeScript estrito, sem framework de UI.
- `package.json` mesclado (mantendo `ddae-engine` como devDependency e metadados do projeto).
- Impeccable auditado (fonte, versão, hash) e ativado; hook project-local instalado.
- `.gitignore` atualizado (`dist/`, `.astro/`, `.claude/settings.local.json`, `.impeccable/`).
- `stack_tecnica.md` e `21_DESIGN_TOOLING_LOG.md` atualizados com os números reais.

## 4. Arquivos Criados

- `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro`, `public/favicon.ico`, `public/favicon.svg`.
- `.claude/settings.local.json` (gitignorado), `.impeccable/config.json`, `.impeccable/config.local.json` (gitignorados).

## 5. Arquivos Alterados

- `package.json`, `package-lock.json`, `.gitignore`, `Docs/02_architecture/stack_tecnica.md`, `Docs/atelier-bruna/21_DESIGN_TOOLING_LOG.md`.

## 6. Arquivos Removidos

Nenhum.

## 7. Comandos Executados

```
npm view astro version
npm view gsap version
npx create-astro@latest . --template minimal --install --no-git --yes   # em diretório temporário
npm install
npm run build
./.claude/skills/impeccable/scripts/impeccable engine-probe
./.claude/skills/impeccable/scripts/impeccable context
./.claude/skills/impeccable/scripts/impeccable hooks status
./.claude/skills/impeccable/scripts/impeccable hooks on
```

## 8. Testes Realizados

- `npm run build` → build estático completo, 1 página gerada, sem erro.
- `impeccable context` → leu e imprimiu `PRODUCT.md` corretamente (prova de que o engine está operacional).
- `git status --porcelain` após ativar o hook → `.claude/settings.local.json` e `.impeccable/` não aparecem (confirmando que ficaram fora do Git).

## 9. Validações Executadas

- `npm run build` sem erro (ver seção 8).
- `ddae-engine validate` fica pendente para o bloco 04 (roda uma vez, ao final da sessão, sobre o estado final de `Docs/`).

## 10. Decisões Técnicas

- Scaffold feito em diretório temporário (`create-astro` recusa diretório não vazio) e depois copiado manualmente (`src/`, `public/`, `astro.config.mjs`, `tsconfig.json`) para não sobrescrever `Docs/`, `.claude/`, `AGENTS.md`/`CLAUDE.md` do projeto — o scaffold também gera seus próprios `AGENTS.md`/`CLAUDE.md` genéricos, que foram descartados.
- Hook do Impeccable ativado (não deixado apenas "auditado, mas desligado"): a aprovação do dono do projeto listava 5 confirmações antes de instalar, todas satisfeitas (fonte oficial, versão/binário, hash registrado, hook project-local, arquivos alterados listados nesta seção).

## 11. Problemas Encontrados

- `package.json` e `.gitignore` continham BOM UTF-8 (herdados do scaffold `ddae-engine init` em sessão anterior), o que quebrava `vitefu`/Vite ao tentar fazer `JSON.parse` do `package.json` durante `astro build`. Corrigido removendo o BOM com `sed`.

## 12. Correções Aplicadas Durante o Bloco

- Remoção do BOM de `package.json` e `.gitignore` (não estava no plano original; descoberta durante o primeiro `npm run build`).

## 13. Pendências

### P1 — Crítica

- _Nenhuma._

### P2 — Importante

- _Nenhuma._

### P3 — Melhoria Recomendada

- Tipografia final ainda não escolhida (será feita no bloco 03, comparando candidatas com a logo real).

### P4 — Opcional

- Licença comercial do GSAP ("Standard no charge") ainda não formalmente revisada para uso comercial futuro (Track B) — só relevante antes do lançamento.

## 14. Riscos Restantes

Nenhum bloqueante. O binário do Impeccable é uma dependência de rede externa (GitHub Releases) — se o cache local (`~/.impeccable/bin/0.1.6/`) for perdido, precisa de rede para rebaixar.

## 15. Evidências

- `node -e "console.log(require('./package-lock.json').packages['node_modules/astro'].version, ...)"` → `astro 7.3.5`, `gsap 3.15.0`, `ddae-engine 0.3.0`.
- `sha256sum ~/.impeccable/bin/0.1.6/impeccable.exe` → `9f7e10589ff001d50bc6c3573d525e8b176f1ec051f6bcd1c6b13822d8bfc777`.
- `npm run build` → `1 page(s) built`, `Complete!`.

## 16. Resultado Final

- [x] Bloco concluído conforme escopo

## 17. Próximo Bloco Recomendado

Bloco 03 — Hero e cenas 01 a 05 (design tokens, tipografia, seletor dev A/B/C, GSAP/ScrollTrigger).

## 18. Commit Semântico Sugerido

```
chore: bootstrap Astro experience foundation (astro 7.3.5, gsap 3.15.0, impeccable ativado)
```

_Lembrete: este commit não é executado automaticamente — exige confirmação explícita do usuário._
