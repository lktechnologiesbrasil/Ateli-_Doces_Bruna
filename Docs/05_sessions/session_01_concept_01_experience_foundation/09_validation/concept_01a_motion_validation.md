# Concept 01A — Validação de motion completo (pós-aprovação, 2026-09-26)

> Complementa `08_feedbacks/feedback_bloco_03_hero_e_cenas_01_a_05.md`, que já registrava como pendência P2 a falta de confirmação visual do caminho de motion completo (GSAP/ScrollTrigger com `prefers-reduced-motion: no-preference`). Este documento fecha essa pendência antes do commit do marco.

## Método

O navegador desta sessão de trabalho força `prefers-reduced-motion: reduce` a nível de SO/navegador, sem alternância exposta. Para validar a lógica de motion sem alterar o comportamento entregue ao usuário, usei um parâmetro de URL temporário (`?qa-motion=on`) em `src/scripts/motion.ts` que fazia o controlador de motion **acreditar** que reduced-motion estava desligado — só para fins de teste nesta sessão. **Esse parâmetro foi removido do código antes do commit** (não faz parte da entrega). A validação combinou:
- Leitura de `getComputedStyle(...).transform` (valor efetivamente renderizado, não só o que o JS escreveu) em pontos específicos do scroll.
- Inspeção de `pin-spacer` (marca do GSAP ScrollTrigger para seções pinadas).
- `elementFromPoint` e `getBoundingClientRect` para confirmar geometria real.
- Screenshots, quando a ferramenta de captura cooperou (ver limitação registrada abaixo).

## Resultado por item pedido

| Item | Resultado |
|---|---|
| Hero motion (scale + reveal) | GSAP escreve os valores corretos (confirmado via atributo inline); a pintura real do `transform` no Hero é bloqueada por uma regra CSS `!important` sob `prefers-reduced-motion: reduce` — **correta e intencional** (rede de segurança de acessibilidade), mas isso também impede a confirmação pixel-a-pixel da animação neste ambiente específico. Lógica validada; renderização visual não confirmável aqui. |
| Pointer tilt não interfere no conteúdo | **Bug real encontrado e corrigido.** O tilt (via variável CSS) e o scale-no-scroll (via GSAP, inline) escreviam na mesma propriedade `transform` do mesmo elemento; o inline do GSAP sempre vencia, matando o tilt silenciosamente assim que a primeira atualização de scroll acontecia. Corrigido: os dois agora são geridos pelo GSAP (`quickTo` para x/y do tilt, tween de scroll para o scale), que compõe translate+scale automaticamente no mesmo elemento sem conflito. |
| Produto Imersivo pin/scrub | **Confirmado funcionando.** `getComputedStyle(...).transform` mostrou a progressão real `matrix(1,0,0,1,0,0)` → `matrix(1.35,0,0,1.35,0,0)` conforme o scroll avança dentro da faixa pinada; screenshot capturado no pico do zoom mostra o produto ocupando a tela com o texto legível sobre o scrim. |
| Criações pin/horizontal | **Confirmado funcionando.** `.is-horizontal` só aparece quando o pin realmente é montado; `translateX` progride (`0 → -815px → -1050px`) e **reverte** corretamente ao rolar para cima. |
| Sem jumps | Nenhum salto abrupto observado nos valores de transform amostrados (progressão suave/contínua em todas as amostras). |
| Sem layout shift relevante | Nenhum CLS detectado atribuível ao motion; `docHeight`/`scrollWidth` mudam de forma esperada quando pin-spacers são criados (comportamento padrão do ScrollTrigger, não é shift inesperado). |
| Sem seções presas | Pin do Produto e das Criações libera corretamente ao final do intervalo (`stageTop` volta a ficar negativo, indicando que a seção passou a rolar normalmente de novo). |
| Scroll reverso funciona | Confirmado nas Criações (translateX volta em direção a 0 ao rolar para cima). |
| Resize não quebra o ScrollTrigger | Redimensionei a janela (1440×900 → 1200×800) em pleno scroll; sem erros novos no console, `docHeight` recalculado corretamente, sem crash. |
| Refresh no meio da página | Recarreguei a URL com scroll profundo; página reconstrói do zero sem erro, 2 pin-spacers recriados corretamente, sem overflow horizontal. (`scrollY` volta a 0 após reload — comportamento padrão do navegador, não é bug.) |
| Mobile não recebe lógica de desktop | Confirmado: em 390px, mesmo com `?qa-motion=on`, `pinSpacers.length === 0` e `is-horizontal === false`. Os dois pins (Produto ≥769px, Criações ≥1024px) são gates de `matchMedia` no próprio `motion.ts`. |
| Reduced-motion continua funcionando | Confirmado repetidas vezes ao longo da sessão (é o comportamento padrão deste ambiente) — conteúdo sempre legível, sem pin/scrub/scale. |

## Cenários testados

- [x] 1440×900, motion ON (`?qa-motion=on`)
- [x] 390×844, motion ON (`?qa-motion=on`) — confirmado que pins de desktop não engatam
- [x] 1440×900, reduced-motion (comportamento padrão do ambiente)
- [x] 390×844, reduced-motion (comportamento padrão do ambiente)

## Bugs encontrados e corrigidos

1. **Conflito de `transform` entre pointer-tilt (CSS var) e scroll-scale (GSAP inline) no Hero.** Corrigido unificando os dois sob o GSAP (`src/scripts/motion.ts`, `src/components/Hero.astro`).
2. **Header aparecia cedo demais.** O `IntersectionObserver` usava um truque de `rootMargin: '-90% 0px 0px 0px'`, que falha quando a altura do Hero é próxima da altura do viewport (o header já aparecia com ~300px de scroll, não perto do fim do Hero como pretendido). Corrigido checando `entry.boundingClientRect.top < 0` em vez de um `rootMargin` percentual (`src/components/Header.astro`).

## Limitação registrada (não é bug do código)

Durante screenshots em posições de scroll específicas (majoritariamente perto da Cena 02 — Manifesto), a ferramenta de captura de tela desta sessão retornou repetidamente uma imagem com uma faixa cor-de-creme no topo, inconsistente com o estado real da página. Investiguei a fundo: `getBoundingClientRect`, `elementFromPoint` e `getComputedStyle` — consultados no MESMO instante — sempre confirmaram que o DOM/CSSOM estavam corretos (a seção com o fundo cacau realmente cobre aquela região). O artefato:
- Persistiu de forma idêntica antes e depois de uma mudança de CSS que deveria alterá-lo caso fosse um bug real de layout (troquei `overflow: clip` por `overflow: hidden` no Hero — mantido por ser mais amplamente suportado, mas não mudou o artefato).
- Ocorreu tanto com `?qa-motion=on` quanto no caminho padrão (reduced-motion, sem nenhum GSAP rodando) — descartando o motion como causa.
- Nunca apareceu nas consultas programáticas, só na imagem capturada.

Concluo que é uma limitação da ferramenta de captura de tela deste ambiente (dessincronia entre o buffer de composição e o estado real da página), não um defeito do site entregue. Registro para transparência; recomendo ao dono do projeto abrir o Concept 01A num navegador comum quando possível para uma conferência visual independente da Cena 02.

## Resultado

Concept 01A aprovado para commit com as 2 correções acima aplicadas. Nenhum novo efeito foi adicionado — só validação e correção do que já existia, conforme solicitado.
