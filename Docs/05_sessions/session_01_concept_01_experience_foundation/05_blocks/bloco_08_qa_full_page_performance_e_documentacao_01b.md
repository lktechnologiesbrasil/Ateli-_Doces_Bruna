# Bloco 08 — qa full page performance e documentacao 01b

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo
QA da jornada completa (Scenes 01–10 + Header/Footer), medição de performance do build de produção, e `22_CONCEPT_01_COMPLETE.md`.

## 2. Contexto
Fecha o marco "Concept 01B" (Blocos 05–08) sobre a base já aprovada (Blocos 01–04, commit `4ea471d`).

## 3. Problema que este bloco resolve
Sem uma passada de QA real, bugs de recorte, contraste e links inventados só apareceriam depois — e o histórico da sessão continha uma correção de contraste que, verificada, não correspondia a um problema real no código.

## 4. Escopo
- [x] QA visual 1440×900 e 390×844, Scenes 01–10 (screenshot real, não assumido).
- [x] Verificação de reduced-motion (ambiente real, confirmado por rede: GSAP não carrega).
- [x] Verificação de CTAs/URLs contra as fontes catalogadas.
- [x] Medição de contraste real (não assumida) do Footer.
- [x] Build de produção + métricas de tamanho.
- [x] `22_CONCEPT_01_COMPLETE.md`.

## 5. Fora de escopo
Impeccable `critique/audit/polish` e UI/UX Pro Max com scripts Python — ambos bloqueados por dependência não instalada (engine binário / Python), registrado como pendência, não contornado.

## 6. Arquivos envolvidos
`AtelierScene.astro`, `Gallery.astro`, `Creations.astro`, `Visit.astro`, `Footer.astro`, `OrderPaths.astro`, `Closing.astro`, `Docs/atelier-bruna/22_CONCEPT_01_COMPLETE.md`, este bloco e feedback.

## 7. Dependências
Blocos 05–07 (código já existente antes deste QA).

## 8. Plano de implementação
1. `astro build` + `astro preview`, navegação real via browser embutido.
2. Screenshot em 1440×900 por cena; screenshot em 390×844 por cena.
3. Inspeção de rede (GSAP carregado ou não) e de `matchMedia`.
4. Medição de contraste real via `getComputedStyle`.
5. Correção dos 6 bugs reais encontrados (ver `22`, §8).
6. Novo `npm run build`; nova leitura de tamanhos.
7. Documentar tudo em `22_CONCEPT_01_COMPLETE.md`.

## 9. Critérios de aceite
- [x] Build limpo (sem erros/warnings).
- [x] Nenhum link para destino não catalogado.
- [x] Nenhum dado volátil/não confirmado no texto visível.
- [x] Reduced-motion deixa todo o conteúdo visível e legível.
- [x] Sem overflow horizontal no mobile (`scrollWidth === innerWidth`, medido).

## 10. Validações obrigatórias
- [x] `npm run build`
- [x] `ddae-engine validate`

## 11. Segurança
Não aplicável — protótipo estático, sem formulário, sem dado do usuário, sem backend.