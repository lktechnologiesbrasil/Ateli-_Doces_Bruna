# 22 — Concept 01 completo (Track A)

> Registro do protótipo local do site do Ateliê Doces Bruna, do Hero ao Footer. Protótipo (Track A): construído só com material público, sem contato com a Bruna. Nada aqui está publicado; é um pitch local (`astro dev`/`astro preview`). Nenhum deploy foi feito.

## 1. Narrativa (Scenes 01–10 + Header/Footer)

| # | Cena | O que mostra | Fonte da foto |
|---|---|---|---|
| Header | fixo | Logo + âncoras (O Ateliê, Cuidado, Criações) + "Pedir agora"; aparece só depois do Hero | PUB-001 (logo) |
| 01 | Hero | Logo + "ATELIÊ DOCES BRUNA" + 2 CTAs sobre foto de morangos em macro | PUB-014 |
| 02 | Manifesto | "DOCES INCRÍVEIS / PARA TRANSFORMAR / O SEU DIA." (bio real do Instagram) | PUB-016 (apoio) |
| 03 | Por trás de cada detalhe | Bastidor/cuidado | PUB-010, 018, 019 |
| 04 | Produto imersivo | Zoom no caseirinho de chocolate | PUB-017 |
| 05 | Nossas criações | 6 paradas: Morangos · Copos & doses · Bolos & fatias · Salgados · Geladinhos & cones · Encomendas | PUB-014/024, 016/026, 017, 013(crop), 023, 019 |
| 06 | O Ateliê | **Corrigido nesta rodada:** o quadro principal agora mostra o ambiente real (vitrine, prateleiras, radiador, arranjo) e o quadro de detalhe mostra o letreiro "doces bruna" com as flores — o único cenário de loja disponível publicamente | PUB-026 (dois recortes) |
| 07 | Galeria viva | 7 fotos em colunas de proporções mistas (era 9; 2 removidas nesta rodada) | ver §3 |
| 08 | Pedir × Encomendar | Dois blocos de tela cheia: "Pronta entrega → Pedir agora" (Yooga) e "Bolos, eventos, quantidade → Fazer uma encomenda" (WhatsApp) | PUB-017, PUB-019 |
| 09 | Visite o Ateliê | Só "Itapeva, Minas Gerais" + aviso de horário variável + CTA "Como chegar" | — |
| 10 | Fechamento | Logo grande sobre cacau, foto de morangos ao fundo (reforçado nesta rodada) + "Doces incríveis..." + "Pedir agora" + assinatura "O seu momento mais doce!!" | PUB-014 |
| Footer | fixo | Logo, Instagram, WhatsApp, Pedido, Como chegar, Privacidade (placeholder), aviso de protótipo | PUB-001 |

## 2. Transição 05 → 06

A cena 05 (Criações) termina com a última parada "Encomendas" (bandeja de 100 brigadeiros). Entre 05 e 06 existe uma ponte dedicada (`.atelier-bridge`, fundo cacau) com a frase "Tudo isso nasce em um lugar real." — um respiro tipográfico que muda o fundo de creme (05) para cacau (06/Ateliê) antes das fotos aparecerem, evitando um corte abrupto de cor e de assunto (produto → lugar).

## 3. Novos assets desta rodada (nenhum arquivo novo baixado)

Nenhuma foto nova foi baixada da internet. Todos os usos vêm do acervo já catalogado (`18_PUBLIC_CONTENT_INVENTORY.md`, `TRACEABILITY.md`), com **recortes/posições diferentes**:
- **Scene 06 corrigida:** o recorte de detalhe usava `transform: scale(2.2)` sobre a miniatura (mostrava o copo/logo em vez do letreiro). Substituído por um recorte real do quadrante superior direito da imagem de 4096×4096 (letreiro + flores), servido em ≥ 900 px — sem upscale artificial de uma miniatura pequena.
- **Galeria:** removidos os itens que reaproveitavam PUB-013 (mostra uma lata de Coca-Cola atrás do prato — marca de terceiro em quadro) e uma repetição de PUB-026 já usada em Criações; a galeria caiu de 9 para 7 itens, todos sem marca de terceiro visível e sem repetir 1:1 um recorte já usado em outra seção.

## 4. CTAs e destinos (verificados nesta rodada)

| CTA | Destino | Verificação |
|---|---|---|
| Pedir agora (Header, Hero, OrderPaths, Closing) | `https://delivery.yooga.app/ateliedocesbruna` | URL igual à catalogada em `18`/Linktree |
| Fazer uma encomenda | `https://wa.me/5535984235184` | Mesmo número do Google e do Linktree |
| Ver Instagram (Galeria) | `https://www.instagram.com/ateliedocesbruna/` | Perfil oficial |
| Como chegar (Visit, Footer) | **Corrigido:** `https://www.google.com/maps?cid=3062253418133205798` | Antes era uma busca por nome; agora é o link direto da ficha (CID extraído da própria URL pública do Google Maps). Testado nesta sessão: resolve exatamente para "Ateliê doces Bruna, Al. dos Ipês, Itapeva, MG, 37655-000" |

Nenhum link foi inventado. `#` ou `#privacidade` (placeholder de política de privacidade, ainda sem página) é o único destino interno não funcional, e está identificado como tal.

## 5. Dados omitidos (por decisão de evidência)

Não aparecem em nenhuma cena: nota do Google, quantidade de avaliações, data de fundação, história pessoal da Bruna, números de clientes/seguidores, prêmios, preços. Horário e endereço completo também foram **retirados do texto visível** (Scene 09) por divergência entre fontes públicas (ver `08_SOURCES_AND_EVIDENCE.md`); a cena mostra só a cidade (dado convergente) e manda o visitante confirmar no Google Maps/WhatsApp.

## 6. Motion — desktop vs. mobile

- **Reveals** (fade + translateY curto): em todas as cenas, via `IntersectionObserver`; idênticos em desktop e mobile.
- **GSAP/ScrollTrigger** (carregado sob demanda, só se motion não for reduzido):
  - Hero: escala 1,00→1,06 no scroll + leve tilt ao ponteiro (só desktop com mouse, `hover:hover` e `pointer:fine`).
  - Manifesto: linhas reveladas por máscara.
  - Produto imersivo: zoom pinado (~150% de scroll) — **só ≥ 769 px**; no mobile o produto aparece estático, sem pin.
  - Criações: trilho horizontal pinado — **só ≥ 1024 px**; abaixo disso (e em qualquer largura sob reduced-motion) o trilho é uma coluna vertical nativa, sem pin nem scroll horizontal forçado.
- Total de cenas pinadas: **2** (Produto e Criações) — dentro do limite de 3 combinado.

## 7. Reduced motion

Confirmado nesta sessão em ambiente real com `prefers-reduced-motion: reduce` ativo: todas as 31 marcações `[data-reveal]` aparecem imediatamente (`is-revealed`), o módulo GSAP **não é baixado** (confirmado por rede: nenhuma requisição a `gsap`/`ScrollTrigger` ocorreu), e não há `pin-spacer` no DOM. O conteúdo fica **completo e legível sem qualquer animação**.

## 8. Bugs encontrados e corrigidos nesta rodada

| # | Onde | Problema | Correção |
|---|---|---|---|
| 1 | `AtelierScene.astro` | O recorte de "detalhe" mostrava o copo/adesivo em vez do letreiro/flores (matemática de crop errada sobre miniatura pequena) | Recorte real do quadrante correto, servido em resolução maior |
| 2 | `Gallery.astro` | Dois itens repetiam recorte já usado (Criações) ou expunham marca de terceiro (Coca-Cola) em segundo plano | Removidos; galeria com 7 itens únicos e sem marca de terceiro |
| 3 | `Visit.astro` / `Footer.astro` | CTA "Como chegar" usava busca por nome, não o link direto da ficha | Trocado pelo link com CID, verificado nesta sessão |
| 4 | `Creations.astro` | Sem JS/GSAP (reduced-motion ou <1024px), desktop caía numa pilha vertical de 6 cards de largura total — quebra a leitura em telas largas | Grid de 3 colunas como fallback vertical em ≥1024px, mantendo o trilho horizontal só quando o pin é realmente ativado |
| 5 | `OrderPaths.astro` | Gradiente de contraste usava `rgba(20,10,4,…)`, cor fora do sistema de tokens | Substituído por `--color-cacao-deep` (já existente) nas mesmas opacidades |
| 6 | `Closing.astro` | Vinheta deixava o centro (onde ficam logo e texto) com a foto crua por baixo, dependendo da cor da foto para o texto continuar legível | Vinheta concentrada no centro (55% cacau) esmaecendo para as bordas; contraste do texto deixa de depender do conteúdo da foto |

### Verificado e **sem bug** (contrariando a descrição anterior do trabalho)
- **Contraste do copyright do Footer:** medido nesta sessão via `getComputedStyle` — creme (`#FCECE4`) sobre cacau (`#72482A`) = **6,82:1**; os links do rodapé (opacidade 0,85) = **5,44:1**. Ambos passam WCAG AA (4,5:1) com folga. Não havia, de fato, um problema de contraste no código atual — registro para não repetir a correção.

## 9. Desktop vs. mobile (QA visual)

- **1440×900:** Hero, Manifesto, Produto, Criações (trilho horizontal), Ateliê (grid assimétrico 2 colunas), Galeria (3 colunas), Pedir×Encomendar (2 colunas), Visite, Fechamento, Footer — todos verificados por captura de tela nesta sessão.
- **390×844:** mesma sequência; Criações cai para grid/coluna vertical; Pedir×Encomendar empilha; sem rolagem horizontal (`scrollWidth === innerWidth`, medido). Todas as imagens têm `width`/`height` explícitos (28/28) — sem CLS por carregamento de imagem.
- **Teclado:** `Tab` a partir do topo foca primeiro o link "Pular para o conteúdo" (skip link), como esperado.

## 10. Impeccable / UI/UX Pro Max

**Não executados nesta rodada.** O binário do engine do Impeccable (`~/.impeccable/bin/`) ainda não foi baixado — isso exige uma aprovação explícita de download de arquivo externo que não foi dada nesta sessão (ver `21_DESIGN_TOOLING_LOG.md`, pendência já registrada). Os scripts do UI/UX Pro Max continuam bloqueados por falta de Python 3. Nenhum dos dois foi contornado com atalho: os achados desta rodada vieram de QA manual (screenshot + medição de contraste real + inspeção de código), não de `critique`/`audit`/`polish`.

## 11. Performance (build de produção, medido nesta sessão)

```
npm run build
```
- **`dist/` total:** 2,7 MB (inclui todas as variantes responsivas de cada imagem — não é o peso de uma única visita).
- **JS:** 3 arquivos — `Base.astro_..._lang.js` 8 KB (reveals) sempre carregado; `gsap.js` 72 KB + `ScrollTrigger.js` 44 KB carregados **somente** quando motion não é reduzido (confirmado por rede: 0 requisições a esses arquivos sob reduced-motion).
- **CSS:** 1 arquivo, 20 KB.
- **Imagens:** 59 arquivos `.webp` no total do build (todas as larguras responsivas somadas); a maior variante isolada é 127,5 KB (`hero-a-morangos`, maior breakpoint).
- **Hero:** a foto do Hero é servida via `<Image>` do Astro com `widths` múltiplos; não há um "arquivo do hero" único — o navegador escolhe a variante pelo `sizes`.
- **Lazy loading:** só o logo do Header e o Hero carregam `loading="eager"`; todas as demais 26 imagens usam `loading="lazy"`.
- **Regressão:** nenhuma. O `gsap`/`ScrollTrigger` não pesa na rota "sem motion", que é a única testada de fato nesta sessão (ambiente com `prefers-reduced-motion: reduce`).
- **Lighthouse:** não rodado — não está instalado, e a instrução foi não instalar ferramenta nova só para isso.
- **Limitação desta medição:** os tamanhos acima são **brutos** (sem gzip/brotli); o `astro preview` local não comprime por padrão. Os alvos de `Docs/06_quality_gates/performance_gate.md` são pós-compressão; a validação final de LCP/CLS/INP real só é possível em ambiente publicado (fora de escopo do protótipo local).

## 12. Limitações que seguem bloqueadas para produção (Track B)

- Vetor oficial da logo; autorização de uso de logo e fotos; identificação da pessoa nas fotos como "Bruna".
- Horário e endereço completo (divergência entre Google, Instagram e Yooga).
- Fotos de fachada/interior em alta resolução (as 27 do Google não foram abertas).
- "Menu de Bolos" (Drive) inacessível sem login — cardápio de bolos não incorporado às Criações.
- Política de privacidade real (placeholder no Footer).
- Fotos próprias para "Salgados" e "Geladinhos & cones" sem marca de terceiro (hoje usam recorte forte ou substituição por categoria vizinha).

## 13. Estado do Git

- Branch: `feat/public-brand-experience`. Sem merge, sem PR, sem deploy.
- Ver commits em `13. seção final` da entrega desta sessão.

---

## Concept 01C — Final Brand Polish

> Marco de polimento final, sem redesenho, sem novas cenas, sem aumentar a complexidade de motion. Foco: tirar os últimos sinais de "template" das Scenes 01–10.

### Auditoria do estado real do Impeccable (antes de qualquer mudança)

Havia contradição entre relatórios anteriores. Investigado a fundo antes de fazer qualquer coisa:

```
IMPECCABLE_ENGINE: INSTALLED
HOOK: ACTIVE
VERSION: 4.0.0 (binário) / skill v4.4.0 / launcher VERSION 0.1.6
SOURCE: baixado pelo instalador oficial (npx impeccable install) em sessão anterior deste mesmo projeto
HASH (SHA-256): 9f7e10589ff001d50bc6c3573d525e8b176f1ec051f6bcd1c6b13822d8bfc777
  (arquivo: C:\Users\LARos\.impeccable\bin\0.1.6\impeccable.exe, 16.729.488 bytes)
```

O relatório do Concept 01B que disse "o binário do motor ainda não foi baixado" **estava errado** — um engano deste agente, não um estado real do projeto. O binário, o hash, o hook (`.claude/settings.local.json`, consentimento aceito em `.impeccable/config.local.json`) e o cache de sessões anteriores (`.impeccable/hook.cache.json`) já existiam. Confirmado rodando `impeccable.exe --version` → `4.0.0` e `--help`, que lista os comandos reais: `detect`, `ignores`, `install`, `link`, `update`, `check`.

### Comandos executados

A CLI instalada (v4.0.0) não expõe subcomandos chamados literalmente `critique`/`audit`/`polish` — esses são **prompts da skill** (`.claude/skills/impeccable/reference/{critique,audit,polish}.md`), não comandos de binário. O equivalente real e executável é `detect`, rodado contra a página completa 01→10:

```
impeccable detect --viewport 1440x900 http://<server>/       (Puppeteer, render completo)
impeccable detect --viewport 390x844  http://<server>/       (idem, mobile)
impeccable detect dist/index.html                            (análise estática do HTML/CSS compilado)
impeccable detect src/                                        (análise estática do código-fonte)
```

Rodado no início do marco (baseline) e de novo depois de cada rodada de correção, sobre o build final.

### Achados — classificados

| # | Achado | Modo | Classificação | Ação |
|---|---|---|---|---|
| 1 | `cramped-padding` — grade da Scene 06 encostada no topo da seção, sem respiro (`padding-top: 0`) | estático (`dist/index.html`) | ACCEPT | `padding-top` adicionado (`var(--space-lg)`); confirmado visualmente por screenshot. O detector estático continua reportando o mesmo achado após a correção — limite conhecido de resolução de custom properties através do CSS com hash do Astro; a evidência visual prevalece. |
| 2 | `clipped-overflow-container` — `html` com `overflow-x` não-visível envolvendo o Header `position: fixed` | estático (`dist/index.html`) | ACCEPT (parcial) | `overflow-x: hidden` (que muda o containing block de elementos fixed em alguns WebKit) trocado por `overflow-x: clip` (não muda o containing block) + `scroll-padding-top` adicionado. O aviso residual é esperado: a regra trata `hidden` e `clip` como equivalentes, e um cabeçalho fixo sempre estará "dentro" de qualquer guarda contra rolagem horizontal do documento — não há como satisfazer a regra sem reintroduzir risco real de rolagem horizontal. |
| 3 | `kicker-above-heading` — rótulo "Ateliê Doces Bruna" acima do H2 "ITAPEVA/MINAS GERAIS" na Scene 09 | ao vivo (Puppeteer, 1440x900 e 390x844) | ACCEPT | Removido. A marca já está estabelecida pelo logo no Header e repetida no Closing; o rótulo era decoração redundante, exatamente o padrão que a regra descreve. |
| 4 | `low-contrast` — texto do mesmo rótulo, 1,9:1 pixel / 5,2-5,4:1 mediana | ao vivo | ACCEPT (via #3) | Resolvido ao remover o elemento. |
| 5 | `body-text-viewport-edge` — parágrafo de fechamento da Scene 05 ("E também salgados...") "encostado" nas bordas (390px) | ao vivo (mobile) | REJECT — FALSE POSITIVE | Medido via `getComputedStyle`: `padding-left/right: 20px`, `box-sizing: border-box`. Confirmado visualmente por screenshot: o texto tem respiro real dos dois lados. O detector está medindo a caixa externa (que preenche 100% da largura porque `max-width: 48ch` é maior que o viewport de 390px), não a posição do glifo. |

### UI/UX Pro Max — uso real

Sem Python instalado (decisão deliberada de não instalar só por conveniência); os CSVs de `data/` foram consultados diretamente:

| Regra consultada | Nº | Achado no projeto | Ação |
|---|---|---|---|
| Heading Hierarchy | 39 | Um único h1 (Hero), h2 por seção, h3 só dentro do h2 de Criações — sequencial, sem saltos | Verificado, sem ação |
| Focus Not Obscured (Minimum) | 100 | Sem `scroll-padding-top`: um salto de âncora podia levar o topo da seção para debaixo do Header fixo | Corrigido — `scroll-padding-top: var(--header-height)` (56px, medido) adicionado a `html` |
| Focus Appearance | 102 | `:focus-visible { outline: 2px solid var(--color-cacao); outline-offset: 3px }` | Já conforme, sem ação |
| Alt Text | 38 | Imagens de conteúdo com `alt` descritivo; a foto de fundo decorativa do Closing usa `alt=""` + `aria-hidden` (correto para decorativa) | Verificado, sem ação |
| Touch Target Size / Spacing | 22, 23 | Botões ≥ 48px de altura (`.btn { min-height: 48px }`); links do rodapé com `gap: 24px` | Verificado, sem ação |
| landing.csv (Hero + Features + CTA) | — | "Disable hero parallax under reduced motion and render its static final state" | Já implementado (`motion.ts`: `if (prefersReducedMotion) return`) |

### A. Scene 09 — Visite o Ateliê

**Antes:** bloco de texto centralizado sobre fundo creme liso, sem nenhuma foto, sem marca visível — a seção mais genérica da experiência.

**Tentativa descartada:** foto full-bleed de fundo (a mesma PUB-026) com véu escuro atrás do texto. QA visual real em 1440x900 e 390x844 mostrou que a única foto pública disponível (mão + copos ocupando a maior parte do quadro) não tem uma área neutra grande o bastante para o texto não cair sobre o adesivo/produto, mesmo com o véu mais forte testado. Rejeitada por evidência visual, não por preferência.

**Solução final:** o mesmo padrão de composição já aprovado na Scene 06 (foto emoldurada + texto ao lado, sobre `--color-cacao-deep`) — não uma técnica nova. Terceiro recorte inédito da mesma foto pública (vitrine + balcão, canto inferior esquerdo do quadro original), que ainda não tinha aparecido em nenhuma outra cena. Texto reduzido a "ITAPEVA / MINAS GERAIS" + "Como chegar →" (o rótulo redundante "Ateliê Doces Bruna" foi removido — achado #3 do Impeccable). Sem horário, sem endereço completo, sem mapa embutido.

### B. Criações — categorias com foto fraca

**Antes:** 6 categorias, sendo que "Salgados" dependia de um recorte forçado (`scale(3.6)`) para excluir uma lata de Coca-Cola do quadro, e "Geladinhos & cones" usava uma foto substituta (sortimento de sorvete italiano) que não é realmente da categoria.

**Decisão:** reduzido a 4 categorias com fotografia forte e autêntica (Morangos, Copos & doses, Bolos & fatias, Encomendas). As duas removidas não desaparecem: uma linha editorial no fechamento da seção ("E também salgados, geladinhos, cones e muito mais no cardápio completo.") as nomeia explicitamente, sem fingir ter fotografia que não existe.

### C. "Ver no cardápio" repetido

**Antes:** CTA "Ver no cardápio →" repetido em cada um dos 6 cards.

**Depois:** removido de cada card. Um único CTA editorial no fechamento da seção — "Conhecer o cardápio completo →" (mesmo destino, Yooga) — substitui os 6 CTAs repetidos por 1.

### Scene 08 — Pedir × Encomendar

Já forte; não redesenhada. Reverificada visualmente: em qualquer leitura rápida, "PRONTA ENTREGA / QUERO AGORA / Pedir agora" (esquerda) contra "BOLOS, EVENTOS, QUANTIDADE / PARA UM MOMENTO ESPECIAL / Fazer uma encomenda" (direita) — rótulos diferentes, tratamento de botão diferente (preenchido x contornado), fotografia diferente (produto pronto x caixa em quantidade). A diferença entre as duas jornadas não depende de leitura atenta.

### Copy audit

Encontrada uma linha de slogan inventado, sem derivação de fonte real: "Feito para ser lembrado." (Scene 04, Produto imersivo). Substituída por uma frase extraída da legenda real do próprio post (PUB-017, IG/p/DdSN0XJxESb/, 14/set/2026: "...fresquinho e feito com carinho"): agora o texto da cena é "Fresquinho, feito com carinho." O restante do copy já derivava de fontes reais (bio do Instagram, legendas específicas de cada foto) e foi mantido.

### Motion QA (ON e reduced-motion)

**Limitação de ambiente, documentada com transparência:** o ambiente desta sessão roda com `prefers-reduced-motion: reduce` ativo no nível do sistema — não é algo que este agente controla ou pode desligar para testar o caminho "motion ON" visualmente. Confirmado por rede: nenhuma requisição a `gsap`/`ScrollTrigger` ocorre nesta sessão em nenhum momento. A cobertura real desta rodada:

- **Reduced motion, 1440x900 e 390x844:** confirmado ao vivo. Todas as marcações `[data-reveal]` aparecem imediatamente; nenhum `pin-spacer` no DOM; conteúdo completo e legível sem qualquer animação, incluindo a entrada da Scene 06, a Galeria, Pedir/Encomendar, Visite e o Fechamento.
- **Scroll reverso, resize, refresh no meio da página:** testado sob reduced-motion — sem artefato, sem CLS perceptível, sem perda de estado (o Header aparece/desaparece corretamente ao cruzar o limite do Hero em qualquer direção).
- **Motion ON (pin/scrub em Produto e Criações, tilt do Hero):** não verificado visualmente nesta sessão, por essa mesma limitação de ambiente. A cobertura vem da leitura do código (`src/scripts/motion.ts`): os `ScrollTrigger` de Produto (pin, `end: '+=120%'`) e Criações (pin, `matchMedia('(min-width: 1024px)')`) e o tilt do Hero (`matchMedia('(hover: hover) and (pointer: fine)')`) são carregados dinamicamente apenas quando `prefersReducedMotion` é falso, cada um com seu próprio guarda de `matchMedia`/breakpoint. Recomendação: validar visualmente em uma máquina/navegador sem essa preferência de acessibilidade ativada antes de aprovar definitivamente o motion.

### Infraestrutura de QA (achado operacional, não de design)

No meio do QA desta rodada, a porta padrão do Astro (4321) estava ocupada por um processo `astro dev` de outra sessão de chat neste mesmo projeto (confirmado por `CommandLine`/`CreationDate` do processo antes de qualquer ação — nada foi encerrado sem essa verificação). Isso causava screenshots trocados/em branco de forma intermitente. Resolvido subindo um servidor de preview dedicado desta sessão em uma porta própria (`--port 4877`, verificada livre antes de usar) via `.claude/launch.json` + `preview_start`, sem tocar no processo da outra sessão. `.claude/launch.json` ganhou uma segunda configuração (`atelie-doces-bruna-preview`) para isso.

### Performance — antes/depois

| Métrica | Concept 01B (baseline) | Concept 01C (final) | Variação |
|---|---|---|---|
| `dist/` total | ~2,7 MB | 2,5 MB | -0,2 MB (menos categorias em Criações, Scene 09 sem a variante 1920px de fundo) |
| JS base (reveals) | 8 KB | 8 KB | = |
| GSAP core | 72 KB | 72 KB | = |
| ScrollTrigger | 44 KB | 44 KB | = |
| CSS | 20 KB | 24 KB | +4 KB (estilos de Visit/Criações/Produto ajustados) |
| Maior imagem isolada | 127,5 KB | 130,6 KB | +3 KB (mesma família de variantes do hero) |
| Nº de imagens .webp no build | 59 | 54 | -5 (categorias e variante de fundo removidas) |

Nenhuma regressão relevante; o total do build ficou menor, não maior.

### Arquivos alterados nesta rodada

`src/components/Visit.astro` (reescrito duas vezes: tentativa full-bleed descartada, depois versão final em cartão), `src/components/Creations.astro` (4 categorias, CTA único), `src/components/ProductImmersive.astro` (copy trocada, cor do véu para token), `src/components/AtelierScene.astro` (padding-top), `src/styles/global.css` (`overflow-x: clip`, `scroll-padding-top`), `src/styles/tokens.css` (`--header-height`), `.claude/launch.json` (servidor de preview dedicado).

### Bugs encontrados nesta rodada

Ver tabela de achados do Impeccable acima (#1-#5) — todos vieram da ferramenta, não de inspeção manual. Nenhum bug novo de motion, de link ou de dado foi encontrado além desses.
