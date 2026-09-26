# Bloco 03 — hero e cenas 01 a 05

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo

Construir com alto polimento as Scenes 01–05 (Hero, Manifesto, Por Trás de Cada Detalhe, Produto Imersivo, Criações) do storyboard `20_SCROLL_STORYBOARD.md`, validadas em 1440×900 e 390×844, com o vencedor Hero A/B/C decidido por teste visual real, seguindo a "Fase 02A" do briefing do dono do projeto (2026-09-26).

## 2. Contexto

Bloco 02 entregou a stack (Astro/GSAP) e o Impeccable operacional. Este bloco é o marco visual do Concept 01: primeira vez que a marca é vista funcionando no navegador, com fotografia real (bloco 01) e motion language definida em `20_SCROLL_STORYBOARD.md`.

## 3. Problema que Este Bloco Resolve

Até aqui só existia documentação e um scaffold vazio. Não havia como a Bruna (ou o dono do projeto) "sentir" a experiência — o objetivo do marco.

## 4. Escopo

- Design tokens implementados (`src/styles/tokens.css`), espelhando `Docs/07_design_system/tokens_design.md`.
- Decisão de tipografia real (Cormorant Garamond + Work Sans), testada visualmente ao lado da logo.
- Mecanismo DEV `/dev/hero-compare` para comparar HERO-A/B/C lado a lado com o logo real, em 1440×900 e 390×844 — removido após a decisão.
- Scene 01 (Hero) com o vencedor real, reveal por clip-path, stagger do headline, tilt de ponteiro (desktop), scale ligado ao scroll.
- Scene 02 (Manifesto) com a frase existente da marca, reveal de linhas.
- Scene 03 (Por trás de cada detalhe) com 3 fotos reais, recorte específico para excluir marcas de terceiro de PUB-010.
- Scene 04 (Produto imersivo) com HERO-C, zoom ligado ao scroll (pin), scrim para contraste do texto.
- Scene 05 (Criações) com as 6 categorias reais do cardápio, trilho horizontal+pin no desktop (`min-width:1024px`), fluxo vertical universal como base/fallback.
- Header persistente, motion controller (`src/scripts/motion.ts`) com GSAP dinâmico, reveals via IntersectionObserver, guarda de `prefers-reduced-motion`.
- Continuação provisória minimalista (`ComingNext.astro`).
- Uma rodada Impeccable `detect` (ANALYZE) em 1440×900 e 390×844, correção em lote (FIX), e nova rodada (VERIFY) confirmando 0 achados nos dois viewports.

## 5. Fora de Escopo

Loja física, mapa, contato, footer final, avaliações, integrações, analytics — conforme instrução explícita do dono do projeto. Deploy (bloqueado nesta fase).

## 6. Arquivos e Pastas Envolvidos

- `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/Base.astro`.
- `src/components/{Header,Hero,Manifesto,DetailScene,ProductImmersive,Creations,ComingNext}.astro`.
- `src/scripts/motion.ts`, `src/pages/index.astro`.
- `src/assets/photos/*` (fora do Git).
- `Docs/07_design_system/tokens_design.md` (tipografia documentada).

## 7. Dependências

Bloco 01 (assets baixados) e Bloco 02 (stack + Impeccable operacional).

## 8. Plano de Implementação

1. Tokens de design (cor, tipografia, espaçamento, motion) em CSS.
2. Comparação visual de tipografia ao lado da logo real; decisão registrada.
3. `/dev/hero-compare`: A/B/C lado a lado com logo/headline reais, testado em 1440×900 e 390×844.
4. Escolha do vencedor (ver seção 9) e remoção do mecanismo DEV.
5. Construção sequencial das Scenes 01–05 como componentes Astro, com motion CSS-first e GSAP só onde justificado.
6. Motion controller central (`motion.ts`): reveals via IntersectionObserver (com fallback visível sem JS), ScrollTrigger dinâmico, guarda de reduced-motion.
7. QA visual real no navegador (1440×900 e 390×844), correção de bugs encontrados (crop de terceiros, contraste, viewport meta ausente, layout horizontal sem fallback).
8. Impeccable `detect` (ANALYZE → FIX → VERIFY), uma rodada.

## 9. Critérios de Aceite

- [x] Hero A/B/C testados visualmente nos dois viewports antes da escolha.
- [x] Vencedor: **HERO-A** (PUB-014, morangos do amor) — maior contraste vermelho×cacau, melhor "UAU" nos primeiros segundos, sem embalagem genérica no quadro; confirma a recomendação original de `19_HERO_DIRECTION.md`, agora validada com o arquivo real (não só thumbnail).
- [x] Tipografia decidida e documentada (Cormorant Garamond + Work Sans).
- [x] 5 cenas implementadas e navegáveis via scroll nativo.
- [x] Nenhuma marca de terceiro visível nas fotos usadas (PUB-010 e PUB-013 recortadas especificamente para isso; verificado por amostragem de pixel, não só inspeção visual).
- [x] `prefers-reduced-motion: reduce` testado ao vivo (ambiente do navegador desta sessão já roda com essa preferência) — conteúdo permanece legível, sem pin/scrub, sem scale.
- [x] Sem overflow horizontal em 390px (`document.documentElement.scrollWidth === innerWidth`).
- [x] Máximo de cenas pinadas: 2 (Produto imersivo, Criações-desktop) — dentro do limite de ~3.
- [x] Impeccable `detect` limpo (0 achados) em 1440×900 e 390×844 após a rodada FIX.

## 10. Validações Obrigatórias

- [x] `npm run build` sem erro.
- [x] `impeccable detect http://localhost:4321/ --viewport 1440x900` → 0 achados.
- [x] `impeccable detect http://localhost:4321/ --viewport 390x844` → 0 achados.

## 11. Segurança

Não aplicável (sem formulário, sem dado sensível; links externos usam `rel="noopener"`).

## 12. Performance

Orçamento de `stack_tecnica.md` usado como meta; variantes responsivas geradas pelo pipeline de imagem do Astro (menor variante do Hero ≈ 41 KB webp, dentro do orçamento de 150 KB mobile). GSAP+ScrollTrigger somam ~116 KB não comprimidos, importados dinamicamente após o carregamento inicial — tamanho gzip real não medido nesta sessão (métrica de Lighthouse/CDN não rodada; ver pendência).

## 13. Design System / UX

Tokens de `Docs/07_design_system/tokens_design.md` usados em 100% dos componentes; nenhuma cor/tamanho hardcoded fora dos tokens.

## 14. Riscos

- Ambiente de teste roda com `prefers-reduced-motion: reduce` fixo — o caminho de motion completo (GSAP/ScrollTrigger ativo) foi verificado por revisão de código e build sem erro, mas **não visualmente confirmado animando** nesta sessão. Recomendação: o dono do projeto validar localmente em um navegador sem essa preferência.
- Salgados (PUB-013) e Cuidado (PUB-010) dependem de crops CSS agressivos (`transform: scale()`) para excluir marcas de terceiro — funcionam nos dois viewports testados, mas são frágeis a mudanças futuras de layout/aspect-ratio; documentado inline no código.

## 15. Pendências Esperadas

- P2: motion completo (GSAP) não visualmente confirmado ao vivo nesta sessão (ambiente força reduced-motion) — validar em navegador real antes do próximo marco.
- P3: Scene 05 "Geladinhos & cones" usa foto substituta (sortimento, não geladinho específico) por falta de material próprio da marca.
- P3: tamanho gzip real do JS de motion não medido (só tamanho de arquivo bruto).
- P4: recortes CSS de PUB-010/PUB-013 são uma mitigação, não uma garantia formal — revisar se a foto de origem mudar.

## 16. Feedback Obrigatório

Lembrete: ao final deste bloco, gerar e preencher o feedback via `ddae-engine feedback create --block bloco_03_hero_e_cenas_01_a_05 --session session_01_concept_01_experience_foundation`.

## 17. Commit Semântico Sugerido

```
feat: build immersive Bruna hero and editorial storytelling scenes (Concept 01)
```

_Lembrete: este commit não é executado automaticamente — exige confirmação explícita do usuário._
