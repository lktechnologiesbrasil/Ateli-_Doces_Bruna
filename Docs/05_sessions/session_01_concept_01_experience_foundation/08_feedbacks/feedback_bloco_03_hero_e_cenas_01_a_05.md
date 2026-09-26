# Feedback — Bloco 03: hero e cenas 01 a 05

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Resumo Executivo

Implementei as 5 cenas do Concept 01 como componentes Astro com CSS-first motion e GSAP/ScrollTrigger só nas 2 cenas que precisam de pin (Produto, Criações-desktop). Testei HERO-A/B/C lado a lado com a logo real num mecanismo DEV temporário, escolhi HERO-A (morangos), e removi o mecanismo antes da entrega. Encontrei e corrigi 5 bugs reais durante o QA visual no navegador: falta de `viewport` meta (quebrava o teste mobile), um botão CTA invisível (cor do texto = cor do fundo), duas fotos com marca de terceiro visível no quadro (Coca-Cola, Nutella/Ferrero) exigindo recorte específico, e um trilho horizontal sem fallback de scroll sob `prefers-reduced-motion`. Rodei o detector do Impeccable contra o servidor real (não só os arquivos-fonte) em 1440×900 e 390×844: a primeira rodada achou 2 problemas (paleta cream genérica — falso positivo, é a cor medida da marca — e baixo contraste no texto da Scene 04); corrigi os dois e a segunda rodada ficou limpa nos dois viewports.

## 2. Objetivo do Bloco

Construir com alto polimento as Scenes 01–05, com o Hero vencedor decidido por teste visual real.

## 3. Escopo Implementado

Ver seção 4 do bloco original — tudo foi implementado como planejado, sem redução de escopo.

## 4. Arquivos Criados

- `src/styles/tokens.css`, `src/styles/global.css`
- `src/layouts/Base.astro`
- `src/components/Header.astro`, `Hero.astro`, `Manifesto.astro`, `DetailScene.astro`, `ProductImmersive.astro`, `Creations.astro`, `ComingNext.astro`
- `src/scripts/motion.ts`
- `.claude/launch.json` (config do preview do dev server para esta sessão)
- `src/pages/dev/hero-compare.astro` (temporário — **removido** ao final do bloco)

## 5. Arquivos Alterados

- `src/pages/index.astro` (montagem final das cenas)
- `Docs/07_design_system/tokens_design.md` (tipografia documentada)

## 6. Arquivos Removidos

- `src/pages/dev/hero-compare.astro` (mecanismo DEV, não faz parte da interface final)

## 7. Comandos Executados

```
npm view astro version && npm view gsap version   # já feito no bloco 02
npm run build
./.claude/skills/impeccable/scripts/impeccable detect http://localhost:4321/ --viewport 1440x900
./.claude/skills/impeccable/scripts/impeccable detect http://localhost:4321/ --viewport 390x844
./.claude/skills/impeccable/scripts/impeccable hooks ignore-rule cream-palette --reason "..."
```

## 8. Testes Realizados

- **Hero A/B/C**: comparação visual lado a lado com a logo real, em 1440×900 e 390×844, usando os arquivos baixados (não thumbnails). HERO-A venceu por maior contraste vermelho×cacau e ausência de embalagem genérica no quadro (diferente de HERO-C).
- **QA visual manual**: scroll completo das 5 cenas em 1440×900 e 390×844, com screenshots em cada cena.
- **Verificação de marca de terceiro**: sampling de pixel via canvas (não só inspeção visual) para confirmar que os crops de PUB-010 e PUB-013 realmente excluem Nutella/Ferrero/Coca-Cola/Heinz em ambos os viewports — a primeira tentativa de crop "parecia" funcionar num viewport e falhava no outro; corrigido recalculando o crop sobre a imagem em proporção original (sem pré-corte do serviço de imagem do Astro).
- **Overflow horizontal mobile**: `document.documentElement.scrollWidth === window.innerWidth` em 390px → sem overflow.
- **Reduced motion**: o navegador desta sessão roda com `prefers-reduced-motion: reduce` fixo — testei ao vivo esse caminho (conteúdo visível, sem pin/scrub/scale) mas **não** o caminho de motion completo.
- **Impeccable detect**: 2 rodadas por viewport (ANALYZE com achados → FIX → VERIFY limpo).

## 9. Validações Executadas

- `npm run build`: sem erro, 1 página, ~1.9 MB de dist (inclui todas as variantes responsivas).
- `impeccable detect` (ambos os viewports): 0 achados após a rodada de correção.
- `ddae-engine validate`: pendente para o bloco 04 (roda uma vez ao final da sessão).

## 10. Decisões Técnicas

- **Tipografia**: Cormorant Garamond (display) + Work Sans (corpo/UI), decidida por comparação visual direta com o PNG da logo, não por preferência abstrata. Documentada em `tokens_design.md` com a justificativa completa.
- **Hero vencedor**: HERO-A. Justificativa completa na seção 9 do bloco.
- **Astro `<Image>` sem `height` explícito quando o alvo pede um recorte CSS**: descobri que passar `width`+`height` com uma proporção diferente da original faz o serviço de imagem do Astro pré-recortar a foto *antes* do CSS `object-fit`/`object-position` entrarem em ação — o que sabotava silenciosamente os recortes de segurança de marca. A correção (aplicada em `Creations.astro`) foi pedir só `width` e deixar a altura ser inferida da proporção original, delegando 100% do recorte ao CSS.
- **Fallback do trilho horizontal (Scene 05)**: em vez de usar `@media (min-width: 1024px)` para decidir CSS horizontal vs. vertical, o layout horizontal só é ativado por uma classe (`is-horizontal`) que o próprio GSAP adiciona quando o pin realmente é montado. Isso garante que, se JS falhar ou `prefers-reduced-motion` estiver ativo, a Scene 05 sempre cai no fluxo vertical navegável — nunca fica presa num trilho horizontal sem scroll.
- **Scrim em vez de só `text-shadow`** na Scene 04: o detector do Impeccable pegou contraste insuficiente; troquei por um gradiente radial semi-opaco atrás do texto, que garante contraste independente do conteúdo da foto por trás.

## 11. Problemas Encontrados

1. `<meta name="viewport">` ausente no protótipo de comparação de Hero fez o mobile renderizar em viewport virtual de 980px (comportamento clássico de "site desktop encolhido") — corrigido, e o `Base.astro` real já inclui a tag desde o início.
2. Botão "Pedir agora" invisível no Hero: `.btn-primary` usa `background: var(--color-cacao)`, igual ao fundo do painel do Hero — corrigido com uma variante invertida (`creme sobre cacau`) escopada ao Hero.
3. PUB-010 (Scene 03) mostra várias embalagens de Nutella/Ferrero ao redor da pessoa — exigiu um recorte CSS agressivo (`scale(2.6)` + `object-position` específico) para isolar o rosto/touca.
4. PUB-013 (Scene 05, "Salgados") mostra uma lata de Coca-Cola e sachês de Heinz em destaque — o primeiro recorte "parecia" resolver mas só porque eu só tinha visto uma fatia parcial da imagem via scroll; sampling de pixel revelou que o problema persistia. Resolvido depois de remover o pré-corte do Astro (ver Decisões Técnicas) e recalcular o recorte sobre a imagem completa.
5. Impeccable `detect` contra o servidor real (não os arquivos) achou baixo contraste real na Scene 04 que a leitura visual "a olho" não tinha capturado com segurança.

## 12. Correções Aplicadas Durante o Bloco

Todas as 5 listadas acima foram corrigidas nesta mesma sessão, antes de considerar o bloco concluído.

## 13. Pendências

### P1 — Crítica

- _Nenhuma._

### P2 — Importante

- ~~Motion completo (GSAP/ScrollTrigger ativo, sem reduced-motion) não foi visualmente confirmado ao vivo~~ — **Resolvido em 2026-09-26**: ver `Docs/05_sessions/session_01_concept_01_experience_foundation/09_validation/concept_01a_motion_validation.md`. Validação encontrou e corrigiu 2 bugs reais (conflito de `transform` entre pointer-tilt e scroll-scale no Hero; header aparecendo cedo demais). Uma limitação de captura de tela da ferramenta desta sessão (não do código) segue registrada nesse documento.

### P3 — Melhoria Recomendada

- Scene 05 "Geladinhos & cones" usa foto substituta (sortimento com sorvete italiano), não um geladinho específico — falta material próprio da marca.
- Tamanho gzip real do JS de motion (GSAP+ScrollTrigger) não medido; só o tamanho de arquivo bruto (~116 KB não comprimido) foi verificado.
- Os recortes CSS de PUB-010/PUB-013 são frágeis a mudanças futuras de aspect-ratio do container — comentados inline no código, mas exigem reteste se o layout mudar.

### P4 — Opcional

- Header persistente ainda não tem uma versão "scrolled" com sombra/blur mais elaborada — está funcional mas simples.

## 14. Riscos Restantes

Ver P2 acima (motion completo não confirmado ao vivo) — o maior risco residual deste bloco.

## 15. Evidências

- Screenshots de todas as 5 cenas em 1440×900 e 390×844 (capturados durante a sessão, não persistidos como arquivo — re-capturáveis a qualquer momento com `npm run dev` + o navegador).
- `impeccable detect` limpo nos dois viewports (saída vazia = 0 achados).
- Sampling de pixel via `canvas.getImageData` confirmando ausência de vermelho saturado (Coca-Cola) no crop final de PUB-013.

## 16. Resultado Final

- [x] Bloco concluído com ressalvas (ver P2 — motion completo não confirmado ao vivo)

## 17. Próximo Bloco Recomendado

Bloco 04 — QA visual e documentação (screenshots finais, `ddae-engine validate`, relatório de entrega do marco).

## 18. Commit Semântico Sugerido

```
feat: build immersive Bruna hero and editorial storytelling scenes (Concept 01)
```

_Lembrete: este commit não é executado automaticamente — exige confirmação explícita do usuário._
