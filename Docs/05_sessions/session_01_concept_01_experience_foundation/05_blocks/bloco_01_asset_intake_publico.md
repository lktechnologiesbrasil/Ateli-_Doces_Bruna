# Bloco 01 — asset intake publico

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo

Baixar localmente (fora do Git) as imagens públicas selecionadas em `Docs/atelier-bruna/18_PUBLIC_CONTENT_INVENTORY.md` e `19_HERO_DIRECTION.md`, com rastreabilidade completa por imagem.

## 2. Contexto

Aprovação explícita do dono do projeto (2026-09-26): "FOTOS PÚBLICAS — APROVADO". Pesquisa pública já mapeou candidatos em `17`–`20`. Este bloco materializa o download antes do bootstrap da stack.

## 3. Problema que Este Bloco Resolve

Sem os arquivos originais localmente, não é possível construir Hero/cenas com fotografia real em alta resolução — só miniaturas foram vistas até agora.

## 4. Escopo

- Baixar PUB-014 (HERO-A, morangos), PUB-016 (HERO-B, copo), PUB-017 (HERO-C, caseirinho) em resolução original das páginas de post.
- Baixar PUB-018, PUB-019 (série/encomendas) e PUB-010 (Bruna/cuidado, com crop cuidadoso planejado) se resolução permitir.
- Baixar logo PUB-001 (PNG Yooga) e avatar PUB-002.
- Baixar 1 imagem por categoria da Scene 05 quando disponível em qualidade suficiente (Yooga só como último recurso, thumbnails 375×500).
- Criar `references/_public-cache/TRACEABILITY.md` com ID, URL original, origem, data observada, publicação relacionada, descrição, uso previsto, dimensões originais, observações — para cada imagem baixada.

## 5. Fora de Escopo

- Reconstrução por IA de qualquer produto (proibido).
- Remoção de watermark (proibido).
- Upscale destrutivo/falso (proibido).
- Fotos do Google Maps (27 fotos não abertas) — fica pendente para Track B ou bloco futuro.
- Vídeos/reels (sem arquivo original disponível).

## 6. Arquivos e Pastas Envolvidos

- `references/_public-cache/` (ignorada pelo Git — já confirmado em `.gitignore`).
- `references/_public-cache/TRACEABILITY.md`.
- `Docs/atelier-bruna/18_PUBLIC_CONTENT_INVENTORY.md` (atualizar status "baixado").

## 7. Dependências

- Nenhuma — pode rodar em paralelo ao bloco 02, mas antecede o bloco 03 (precisa dos arquivos para construir o Hero).

## 8. Plano de Implementação

1. Para cada ID selecionado, abrir a página de post pública no browser e localizar a URL da imagem em resolução máxima (~3500–4096 px).
2. Baixar o arquivo para `references/_public-cache/<ID>.jpg` (ou extensão original).
3. Registrar cada download em `TRACEABILITY.md` no momento do download (não em lote depois).
4. Verificar dimensões reais do arquivo baixado batem com o estimado em `18`.
5. Confirmar que nenhuma imagem foi commitada (`git status` deve continuar limpo em `references/_public-cache/`).

## 9. Critérios de Aceite

- [x] HERO-A/B/C (PUB-014, 016, 017) baixados em resolução ≥ 3000 px no maior lado.
- [x] Logo PUB-001 baixada.
- [x] `TRACEABILITY.md` criado com uma linha por imagem baixada, todos os campos preenchidos.
- [x] Nenhuma imagem versionada no Git (`git status --porcelain references/_public-cache` vazio).

## 10. Validações Obrigatórias

- [x] `git status` não lista arquivos dentro de `references/_public-cache/` (confirmado: só `Docs/05_sessions/...` aparece como novo).

## 11. Segurança

Não aplicável (sem dados sensíveis; apenas imagens públicas já indexadas em `18`).

## 12. Performance

Não aplicável a este bloco (otimização de imagem acontece no bloco 03, na pipeline do Astro).

## 13. Design System / UX

Não aplicável — este bloco é só intake de asset bruto.

## 14. Riscos

- Resolução real na página pode ser menor que a estimada em `18` (miniatura vs. página aberta).
- Instagram pode exigir login para algumas páginas de post fora dos ~24 itens já vistos sem login.

## 15. Pendências Esperadas

- P3: fotos de ambiente da loja (Scene 06) seguem insuficientes — nenhuma imagem de qualidade da fachada/interior disponível publicamente sem abrir as 27 fotos do Google.
- P3: categorias "salgados", "geladinhos" da Scene 05 podem cair para thumbnails Yooga (baixa resolução) por falta de foto própria da marca.

## 16. Feedback Obrigatório

Lembrete: ao final deste bloco, gerar e preencher o feedback via `ddae-engine feedback create --block bloco_01_asset_intake_publico --session session_01_concept_01_experience_foundation`.

## 17. Commit Semântico Sugerido

Nenhum commit deste bloco — os arquivos baixados nunca são commitados (`references/_public-cache/` ignorado). Só o `TRACEABILITY.md`, que também fica fora do Git junto com a pasta.
