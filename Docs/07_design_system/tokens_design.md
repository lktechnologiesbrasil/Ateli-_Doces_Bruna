# Tokens de Design

> Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26 · Implementado em `src/styles/tokens.css` (Concept 01)

> Tokens são a fonte única da verdade para valores visuais. Se um valor não está aqui como token, ele não deveria estar hardcoded em um componente.

## 1. Objetivo

Centralizar todo valor visual reutilizável (cor, espaçamento, tipografia, raio, sombra, motion) em tokens nomeados, para que mudar um valor não exija caçar ocorrências no código.

## 2. Cores

> Medidas no PNG público da logo (Yooga, 1100×696) — ver `Docs/atelier-bruna/17_INSTAGRAM_BRAND_ATLAS.md`. O vermelho de morango é **acento de fotografia**, nunca cor de UI/interface.

| Token | Valor | Variável no código |
|---|---|---|
| `color-cacao` | `#72482A` | `--color-cacao` |
| `color-cacao-deep` | `#4F3019` (derivado, mais escuro) | `--color-cacao-deep` |
| `color-cream` | `#FCECE4` | `--color-cream` |
| `color-nude` | `#D4A484` | `--color-nude` |
| `color-strawberry` | `#B3261E` (acento de fotografia apenas) | `--color-strawberry` |
| `color-bg` | = `color-cream` | `--color-bg` |
| `color-bg-inverse` | = `color-cacao` | `--color-bg-inverse` |
| `color-text` | = `color-cacao` | `--color-text` |
| `color-text-inverse` | = `color-cream` | `--color-text-inverse` |
| `color-border` | = `color-nude` | `--color-border` |

## 3. Espaçamento

Escala base 8px (com passos menores em 4px nas pontas), do menor ao maior:

| Token | Valor |
|---|---|
| `space-3xs` | 4px |
| `space-2xs` | 8px |
| `space-xs` | 12px |
| `space-sm` | 16px |
| `space-md` | 24px |
| `space-lg` | 40px |
| `space-xl` | 64px |
| `space-2xl` | 96px |
| `space-3xl` | 144px |

## 4. Tipografia

**Decisão (2026-09-26):** display/headline em **Cormorant Garamond** (peso 500/600), corpo/UI em **Work Sans** (peso 400/500). Comparação visual feita ao lado do PNG da logo real (Cormorant Garamond, Playfair Display, Lora, Fraunces — regular e itálico) em `http://localhost:4321/dev-fonts` (página temporária, removida após a decisão). Cormorant Garamond foi escolhida por harmonizar com o contraste alto e a delicadeza da serifada da logo (que tem swash próprio) **sem imitá-la** — Playfair Display foi descartada por ficar mais "luxo genérico/clichê" (risco já registrado em `21_DESIGN_TOOLING_LOG.md`); Fraunces tem personalidade forte mas contraste baixo demais para "conversar" com a logo; Lora é mais neutra/utilitária. Work Sans no corpo evita o padrão automático "Inter" pedido para evitar, mantendo boa legibilidade e suporte a acentos do português.

| Token | Família | Tamanho | Peso | Altura de linha |
|---|---|---|---|---|
| `text-hero` | Cormorant Garamond | `clamp(3rem, 4vw + 2rem, 7.5rem)` | 500–600 | `leading-tight` (1.05) |
| `text-h1` | Cormorant Garamond | `clamp(2.5rem, 3vw + 1.5rem, 4.5rem)` | 500–600 | `leading-tight` |
| `text-h2` | Cormorant Garamond | `clamp(1.75rem, 1.5vw + 1.25rem, 2.75rem)` | 500 | `leading-snug` (1.25) |
| `text-body-lg` | Work Sans | `clamp(1.125rem, 0.5vw + 1rem, 1.375rem)` | 400 | `leading-normal` (1.55) |
| `text-body` | Work Sans | 1rem | 400 | `leading-normal` |
| `text-caption` | Work Sans | 0.8125rem | 500 | `leading-snug` |

Carregamento: Google Fonts via `<link>` (`display=swap`), pesos limitados aos usados (Cormorant Garamond 500/600, Work Sans 400/500) para manter o orçamento de performance.

## 5. Raio e Sombra

A marca não usa cantos arredondados marcantes nem sombras decorativas (ver `21_DESIGN_TOOLING_LOG.md`: "claymorphism" rejeitada). Raio só onde ajuda o toque (botões).

| Token | Valor |
|---|---|
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-pill` | 999px (botões CTA) |
| `shadow-*` | Não usado nesta fase — sem sombra decorativa; profundidade vem de fotografia/camadas, não de `box-shadow`. |

## 6. Motion tokens

> Ver `Docs/atelier-bruna/20_SCROLL_STORYBOARD.md` para os princípios completos. Só `transform`/`opacity`/`clip-path`; nunca bounce/elastic.

| Token | Valor |
|---|---|
| `ease-editorial` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `duration-reveal` | `0.6s` (→ `0.001s` sob `prefers-reduced-motion: reduce`) |
| `duration-stagger-step` | `0.06s` (→ `0s` sob reduced-motion) |
| `distance-reveal` | `24px` (→ `0px` sob reduced-motion) |
| `scale-hover` | `1.03` |
| `scale-hero-scroll` | `1.06` (→ `1` sob reduced-motion) |

`prefers-reduced-motion: reduce` sobrescreve os tokens de motion diretamente em `:root` — nenhum componente precisa checar a media query individualmente para os efeitos básicos de reveal/scale.

## 7. z-index e breakpoints

| Token | Valor |
|---|---|
| `z-header` | 10 |
| `z-overlay` | 20 |
| `z-dev-tools` | 999 (reservado ao seletor DEV do Hero A/B/C — não faz parte da UI final) |
| `breakpoint-mobile` | 390px (referência de teste, não media query direta) |
| `breakpoint-desktop` | 1440px |

## 8. Regras Obrigatórias

- [x] Todo valor visual usado mais de uma vez no código tem um token correspondente aqui.
- [x] Nenhum componente usa valor de cor/espaçamento hardcoded quando um token equivalente já existe.
- [x] Motion tokens obedecem `prefers-reduced-motion` na raiz, não por componente.

## 9. Perguntas Orientadoras

- Este token está implementado no código (variável CSS, tema, objeto de design tokens) exatamente como documentado aqui? — **Sim**, `src/styles/tokens.css` é a implementação 1:1 desta tabela.

## 10. Decisões Pendentes

- Logo vetorial oficial (SVG) segue pendente (Track B); tokens de cor continuam medidos no PNG público até então.
- Paleta secundária de fotografia (verde de planta, chocolate) não foi tokenizada como cor de UI — permanece só na fotografia, por design.
