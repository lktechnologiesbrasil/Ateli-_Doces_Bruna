# Bloco 06 — galeria e pedir versus encomendar

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo
Construir a Scene 07 (Galeria viva, masonry sem grade 3×3) e a Scene 08 (Pedir × Encomendar, duas jornadas visualmente distintas).

## 2. Contexto
`20_SCROLL_STORYBOARD.md` Scenes 07–08. Regra: pedir e encomendar nunca no mesmo bloco/CTA.

## 3. Problema que este bloco resolve
Mostrar variedade real de produtos sem virar catálogo, e separar claramente os dois fluxos de conversão.

## 4. Escopo
- [x] `Gallery.astro`: CSS columns (masonry), proporções mistas, `data-reveal-group`.
- [x] `OrderPaths.astro`: dois blocos full-bleed com fotos reais e CTAs para Yooga/WhatsApp.

## 5. Fora de escopo
Carrossel/lightbox de imagem ampliada (marcado como opcional em `20`, não implementado).

## 6. Arquivos envolvidos
`src/components/Gallery.astro`, `src/components/OrderPaths.astro`.

## 7. Dependências
Fotos já baixadas (Bloco 01), `18_PUBLIC_CONTENT_INVENTORY.md`.

## 8. Plano de implementação
1. Selecionar 9 fotos variadas para a galeria (revisado no Bloco 08 para 7, removendo repetição e marca de terceiro).
2. `column-count` responsivo (3/2), `break-inside: avoid`.
3. Dois links full-bleed com gradiente para legibilidade do texto (cor revisada no Bloco 08 para usar token do sistema).

## 9. Critérios de aceite
- [x] Sem grade 3×3 uniforme.
- [x] Pedir agora → Yooga; Fazer uma encomenda → WhatsApp; URLs conferidas.
- [x] Nenhuma marca de terceiro visível nas fotos finais da galeria.

## 10. Validações obrigatórias
- [x] `npm run build`
- [x] Verificação de destinos dos CTAs (Bloco 08)

## 11. Segurança
Não aplicável.