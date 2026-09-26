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
