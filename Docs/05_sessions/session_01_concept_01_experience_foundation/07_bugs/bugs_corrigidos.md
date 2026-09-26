# Bugs Corrigidos

> Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26 (QA Concept 01B, Bloco 08)

| ID | Descrição | Severidade | Onde | Correção |
|---|---|---|---|---|
| BUG-01 | Recorte de detalhe da Scene 06 mostrava o copo/adesivo (escala 2.2 sobre miniatura) em vez do letreiro "doces bruna" + flores | P2 | `AtelierScene.astro` | Recorte real do quadrante correto, servido em ≥900px |
| BUG-02 | Galeria repetia um recorte já usado em Criações e expunha uma lata de Coca-Cola em segundo plano (PUB-013) | P2 | `Gallery.astro` | Itens removidos; 7 fotos únicas, sem marca de terceiro |
| BUG-03 | CTA "Como chegar" usava busca por nome no Google Maps em vez do link direto da ficha | P2 | `Visit.astro`, `Footer.astro` | Trocado pelo link com CID (`?cid=3062253418133205798`), testado e confere com a ficha pública |
| BUG-04 | Sem JS/GSAP (reduced-motion ou <1024px), a Scene 05 virava uma pilha vertical de 6 cards de largura total em desktop — ruim para telas largas | P3 | `Creations.astro` | Grid de 3 colunas como fallback vertical em ≥1024px |
| BUG-05 | Gradiente de contraste da Scene 08 usava cor RGBA fora do sistema de tokens | P4 | `OrderPaths.astro` | Substituído por `--color-cacao-deep` já existente |
| BUG-06 | Vinheta da Scene 10 deixava o centro (onde fica o texto) sem proteção, dependente da cor da foto | P3 | `Closing.astro` | Vinheta concentrada no centro, esmaecendo para as bordas |

## Falso positivo verificado
"Baixo contraste no copyright do Footer" (citado como já identificado no início desta sessão): medido nesta rodada via `getComputedStyle` — 6,82:1 (texto) e 5,44:1 (links), ambos acima de WCAG AA (4,5:1). **Não há bug de contraste no código atual.** Nenhuma alteração de cor foi feita no Footer por esse motivo.