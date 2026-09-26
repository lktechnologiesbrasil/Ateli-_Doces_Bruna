# 20 — Storyboard de scroll

> Storyboard da **experiência**, não wireframe. Track A (protótipo público). Toda foto vem de `18` (PUB-###); toda frase é **existente da marca** (bio, legendas) ou **DIREÇÃO** (marcada). **Sem história inventada.**
> Desktop-alvo 1440×900, depois 390×844. Extensão estimada: ~10–12 alturas de viewport.

## Princípios de motion (servem à narrativa)
- **Só** `transform` e `opacity` (e `clip-path` em imagens já decodificadas). Nada de animar layout.
- Conteúdo **legível e acessível desde o primeiro frame**; nenhum loader; entrada do hero ≤ 700 ms e **cancelável** pela rolagem.
- **Scroll nativo** (sem scroll hijacking, sem “smooth-scroll” que quebre teclado/leitor de tela). Pinagem (sticky) só em 3 cenas, sempre com saída livre.
- `prefers-reduced-motion: reduce` → sem parallax/scrub/pin/máscara animada: imagens estáticas, textos visíveis, transições viram corte simples.
- Mobile: **sem pin-scrub horizontal**; o mesmo conteúdo em fluxo vertical, com reveals curtos. Toque > 44 px; sem hover como única via.
- Vídeo: nenhum autoplay com som; vídeos só com arquivo original (pendente).

## SCENE 01 — HERO
- **Viewport:** 100vh (100svh no mobile).
- **Conteúdo:** logo real (PNG/SVG quando houver), “ATELIÊ DOCES BRUNA” em escala grande, botões **Pedir agora** e **Conhecer o Ateliê**.
- **Foto:** HERO-A (PUB-014, morangos). Fallback HERO-B.
- **Texto:** só o nome/logo; sem parágrafo.
- **Movimento:** foto revela por máscara (clip-path inset → 0) ~600 ms; linhas do nome sobem em stagger 60 ms; depois, escala 1,00→1,06 ligada ao scroll (transform).
- **Interação:** pequena inclinação da foto ao ponteiro (≤ 6 px), só em desktop com mouse.
- **Transição:** o cacau do painel cresce e “engole” a foto para a cena 02.
- **Objetivo emocional:** desejo imediato + reconhecimento da marca.
- **CTA:** Pedir agora (→ Yooga), Conhecer (→ âncora).

## SCENE 02 — MANIFESTO
- **Viewport:** ~1,5 alturas (pinada 100vh no desktop, scrub curto).
- **Conteúdo:** fundo cacau; linhas de tipografia gigante.
- **Foto:** HERO-B (PUB-016) surge por *crossfade* em recorte à direita.
- **Texto:** “DOCES INCRÍVEIS / PARA TRANSFORMAR / O SEU DIA.” (**existente**, bio do Instagram).
- **Movimento:** máscara de texto linha a linha (translateY dentro de overflow hidden), acompanhando o scroll; foto dá zoom-out suave.
- **Interação:** nenhuma; lê-se sem interagir.
- **Transição:** foto sai por corte diagonal (clip-path) para a cena 03.
- **Emoção:** promessa afetiva, calor.
- **CTA:** nenhum.

## SCENE 03 — POR TRÁS DE CADA DETALHE
- **Viewport:** 1 altura + faixa.
- **Conteúdo:** mãos, séries de copos/brigadeiros; uma linha de texto curta.
- **Foto:** PUB-019 (100 brigadeiros), PUB-018 (copinhos em série), PUB-015 (frame de reel, só se houver original). **Bruna** somente se identificação for confirmada (PUB-010 com crop cuidadoso, sem marcas de terceiros).
- **Texto:** “POR TRÁS DE CADA DETALHE.” (**DIREÇÃO**, não slogan confirmado) + no máximo uma frase **da própria legenda** (ex.: “qualidade sem negociação” — PUB-010 — só com autorização).
- **Movimento:** três recortes de fotos em profundidades diferentes (parallax leve ±20 px), imagem principal entra por máscara vertical.
- **Interação:** nenhuma.
- **Transição:** a bandeja se afasta (escala) revelando o produto da cena 04.
- **Emoção:** cuidado, mão humana, escala artesanal.
- **CTA:** nenhum.

## SCENE 04 — O PRODUTO OCUPA A TELA
- **Viewport:** 100vh (pinada ~150%).
- **Conteúdo:** produto em quase toda a viewport; uma palavra grande.
- **Foto:** HERO-C (PUB-017, caseirinho de chocolate).
- **Texto:** palavra/frase em serifada gigante em **DIREÇÃO** (“Feito para ser lembrado.” — avaliar; não é slogan).
- **Movimento:** zoom-in ligado ao scroll até o granulado; **texto atrás do produto só se houver recorte limpo do sujeito** (edição da foto real, sem alterar o produto); caso contrário, texto sobre a imagem com contraste ≥ 4,5:1.
- **Interação:** nenhuma.
- **Transição:** o chocolate “vira” o fundo cacau da cena 05.
- **Emoção:** gula, presença.
- **CTA:** nenhum.

## SCENE 05 — NOSSAS CRIAÇÕES (sticky/horizontal no desktop)
- **Viewport:** pinada ~300% no desktop; **vertical empilhada no mobile**.
- **Conteúdo:** 6 paradas, com **taxonomia real do cardápio** (Yooga): **Morangos · Copos & doses · Bolos & fatias · Salgados · Geladinhos & cones · Encomendas** (adaptação das categorias pedidas: “Bebidas” e “Sobremesas” não têm fotografia própria da marca; “Bolos” depende do Menu de Bolos, inacessível).
- **Foto:** uma por parada (morango PUB-014/024/027; copos PUB-016/026; bolos/fatias PUB-017 + a validar; salgados PUB-040–044 — baixa res.; geladinhos: a levantar; encomendas PUB-019).
- **Texto:** nome da categoria + uma linha descritiva **copiada do cardápio** (sem preço).
- **Movimento:** o trilho horizontal se move com o scroll (translateX), imagem ativa faz zoom 1,0→1,04; indicador de progresso mínimo.
- **Interação:** setas/teclado e “tab” funcionam; scroll nativo continua livre; sem arrasto obrigatório.
- **Transição:** a última parada (Encomendas) é a ponte para a cena de pedido.
- **Emoção:** abundância organizada, curiosidade.
- **CTA:** “Ver no cardápio” (→ Yooga) por parada, discreto.

## SCENE 06 — O ATELIÊ (a loja)
- **Viewport:** ~1,3 alturas.
- **Conteúdo:** ambiente e cenário assinatura: parede com o letreiro “doces bruna” e flores.
- **Foto:** PUB-012 (frame) — **insuficiente**; buscar original ou as fotos do Google (27, não vistas). Sem isso, a cena usa detalhe do letreiro em recorte + fotos de mão/bancada.
- **Texto:** endereço e horários **como dados datados**, não copy (divergência entre fontes: ver `08`); nota do Google (4,6 · 10 avaliações · set/2026) só com data.
- **Movimento:** imagem grande com revelação lateral; dados entram com stagger curto.
- **Interação:** botão “Como chegar” (→ Google Maps, sem iframe pesado).
- **Transição:** flores/folhagem da foto conduzem ao tom claro da galeria.
- **Emoção:** acolhimento, lugar real.
- **CTA:** Como chegar.

## SCENE 07 — GALERIA VIVA
- **Viewport:** ~1,5 altura.
- **Conteúdo:** 8–10 fotos em proporções mistas (4:5, 1:1, 9:16 de capa), **sem grade 3×3**.
- **Foto:** PUB-014, 016, 017, 018, 019, 023, 024, 026, 027, 029 (as que tiverem original).
- **Texto:** nenhum além de legendas mínimas opcionais.
- **Movimento:** colunas com velocidades ligeiramente diferentes (parallax ≤ 30 px); ordem “orgânica”; hover realça a imagem (escala 1,03).
- **Interação:** foco por teclado; clique abre imagem ampliada (opcional).
- **Transição:** fundo passa de creme a cacau.
- **Emoção:** vitrine viva, riqueza.
- **CTA:** “Ver mais no Instagram” (→ perfil).

## SCENE 08 — PEDIR / ENCOMENDAR
- **Viewport:** 1 altura.
- **Conteúdo:** **duas portas separadas**, nunca misturadas.
- **Texto:** **PEDIR AGORA** (“pronta entrega”, → Yooga) · **FAZER UMA ENCOMENDA** (bolos, eventos, quantidades, → WhatsApp). “Menu de Bolos” **não** é linkado (Drive exige login).
- **Destinos públicos:** Yooga `https://delivery.yooga.app/ateliedocesbruna`; WhatsApp `https://wa.me/5535984235184` (mensagem pré-preenchida = decisão futura).
- **Movimento:** dois blocos que se aproximam ao entrar; foco visível; sem efeitos no clique.
- **Interação:** botões grandes, área ≥ 48 px; abrir em nova aba.
- **Transição:** para a cena 09 com a paleta clara.
- **Emoção:** clareza e facilidade.
- **CTA:** os dois.

## SCENE 09 — COMO CHEGAR / HORÁRIOS
- **Viewport:** 1 altura.
- **Conteúdo:** mapa estilizado (imagem estática) + endereço + horários **validados publicamente e datados**; aviso discreto de que horários podem mudar.
- **Movimento:** mínimo (fade).
- **CTA:** Abrir no Google Maps.
- **Emoção:** confiança prática.

## SCENE 10 — FECHAMENTO EMOCIONAL + FOOTER
- **Viewport:** 100vh.
- **Conteúdo:** logo real gigante creme sobre cacau; flor como único ornamento; footer: Instagram, WhatsApp, endereço, política de privacidade (a definir), aviso de protótipo.
- **Texto:** “ATELIÊ DOCES BRUNA”; “O seu momento mais doce!!” (**existente**, Yooga) como assinatura pequena.
- **Movimento:** logo revela por máscara; nada mais.
- **Emoção:** assinatura, orgulho, calma.
- **CTA:** Pedir agora (persistente).

## Elemento transversal
- **Header fino** (logo + âncoras + Pedir agora) que aparece após o hero; muda de fundo conforme a cena (cacau/creme).
- **Flor da logo** como cursor contextual **somente** sobre imagens interativas (desktop mouse), nunca como decoração espalhada.

## Dependências de assets
| Cena | Necessário | Situação (Track A) |
|---|---|---|
| 01–04, 07 | Originais das fotos PUB-014/016/017/018/019 | Disponíveis nas páginas de post (~4K); baixar localmente exige aprovação |
| 05 | Fotos por categoria | Parcial (faltam fatias/geladinhos com qualidade) |
| 06 | Fotos da loja | Insuficiente; abrir fotos do Google |
| Logo | Vetor/SVG | Só PNG público; usar PNG no protótipo |
| Vídeo | Originais | Não usar no protótipo |
