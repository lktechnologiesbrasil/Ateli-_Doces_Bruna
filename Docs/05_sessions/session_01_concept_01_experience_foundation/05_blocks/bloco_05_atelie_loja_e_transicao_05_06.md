# Bloco 05 — atelie loja e transicao 05 06

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo
Construir a Scene 06 (O Ateliê) com composição editorial de dois planos usando material público real, e desenhar a transição Criações → Ateliê.

## 2. Contexto
Aprovação do Concept 01B (2026-09-26). Único material público de ambiente da loja: PUB-026 (copos em primeiro plano, letreiro "doces bruna" + flores desfocados ao fundo).

## 3. Problema que este bloco resolve
Sem foto de fachada/interior dedicada, a Scene 06 precisa comunicar "lugar real" usando o único material disponível, sem fingir ter mais do que existe.

## 4. Escopo
- [x] `AtelierScene.astro` (ponte + cena, 2 imagens da mesma foto com recortes distintos, texto).
- [x] Transição visual 05→06 (`.atelier-bridge`).

## 5. Fora de escopo
- Fotos de fachada/interior reais (bloqueado — 27 fotos do Google não abertas).

## 6. Arquivos envolvidos
`src/components/AtelierScene.astro`, `src/assets/photos/loja-ambiente.jpg`.

## 7. Dependências
`18_PUBLIC_CONTENT_INVENTORY.md`, `20_SCROLL_STORYBOARD.md` (Scene 06).

## 8. Plano de implementação
1. Criar `.atelier-bridge` com frase de transição.
2. Grid 2 colunas: imagem principal (ambiente) + imagem de detalhe (letreiro/flores) + texto.
3. Corrigir recorte de detalhe (achado no Bloco 08 — crop errado; corrigido).

## 9. Critérios de aceite
- [x] Duas imagens distintas na cena, sem repetir o mesmo enquadramento.
- [x] Nenhum dado de endereço/horário inventado na cena.
- [x] Build limpo.

## 10. Validações obrigatórias
- [x] `npm run build`
- [x] QA visual (Bloco 08)

## 11. Segurança
Não aplicável (sem dados sensíveis, sem input do usuário).