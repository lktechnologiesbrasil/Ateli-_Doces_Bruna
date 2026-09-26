# Feedback — Bloco 01: asset intake publico

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Resumo Executivo

Baixei 11 arquivos públicos (10 fotos do Instagram + 1 logo do Yooga) para `references/_public-cache/`, todos em resolução original (a maioria ≥3500px no maior lado), extraindo a URL de imagem em resolução máxima diretamente do DOM da página de post (não a miniatura `og:image`, que vem em 640×640). Criei `TRACEABILITY.md` com rastreabilidade completa por imagem. Nenhum arquivo foi commitado; `.gitignore` já cobria a pasta. Bloco concluído com duas pendências P3 já conhecidas (Salgados/Geladinhos sem foto própria ideal; loja física sem material suficiente).

## 2. Objetivo do Bloco

Baixar localmente (fora do Git) as imagens públicas selecionadas em `18`/`19`, com rastreabilidade por imagem.

## 3. Escopo Implementado

- HERO-A/B/C (PUB-014, 016, 017) em resolução original.
- PUB-010 (Bruna/cuidado), PUB-018, PUB-019 (encomendas/detalhe).
- PUB-013 (salgados — com ressalva: Coca-Cola no quadro, requer crop).
- PUB-023, PUB-024, PUB-026 (apoio de categorias da Scene 05).
- PUB-001 (logo oficial, PNG 1100×696, direto do CDN do Yooga).
- `TRACEABILITY.md` com todos os campos pedidos pela aprovação (ID, URL, origem, data, publicação relacionada, descrição, uso previsto, dimensões, observações).

Não baixado (fora de escopo/pendência, ver seção 13): fotos do Google Maps (loja), avatar circular (PUB-002, não essencial), vídeos/reels (sem arquivo original acessível).

## 4. Arquivos Criados

- `references/_public-cache/PUB-001-logo.png`
- `references/_public-cache/PUB-010.jpg`
- `references/_public-cache/PUB-013.jpg`
- `references/_public-cache/PUB-014.jpg`
- `references/_public-cache/PUB-016.jpg`
- `references/_public-cache/PUB-017.jpg`
- `references/_public-cache/PUB-018.jpg`
- `references/_public-cache/PUB-019.jpg`
- `references/_public-cache/PUB-023.jpg`
- `references/_public-cache/PUB-024.jpg`
- `references/_public-cache/PUB-026.jpg`
- `references/_public-cache/TRACEABILITY.md`

## 5. Arquivos Alterados

Nenhum arquivo de `Docs/` alterado neste bloco (o bloco/feedback em si não conta).

## 6. Arquivos Removidos

Nenhum.

## 7. Comandos Executados

```
mkdir -p references/_public-cache
curl -sL -A "Mozilla/5.0 ..." -o PUB-XXX.jpg "<url assinada do CDN>"
file PUB-XXX.jpg   # confirma dimensões reais
git status --porcelain   # confirma que a pasta segue fora do Git
```

## 8. Testes Realizados

- `file <arquivo>` em cada download confirmou dimensões reais batendo com o estimado em `18_PUBLIC_CONTENT_INVENTORY.md`.
- `git status --porcelain` após os downloads: só `Docs/05_sessions/...` aparece como novo; `references/_public-cache/` não aparece.

## 9. Validações Executadas

- `git status` (manual) — confirmado que `references/_public-cache/` continua ignorada.
- `ddae-engine validate`/`audit` não rodados ainda neste bloco isolado; serão rodados ao final da sessão (bloco 04).

## 10. Decisões Técnicas

- Em vez de baixar a `og:image` (thumbnail 640×640), extraí a URL do `<img>` renderizado na página de post, que carrega a imagem em resolução quase original (~3500–4096px). Isso não estava explícito no plano original mas é necessário para atender ao critério de resolução do Hero.
- PUB-013 (salgados) foi baixada mesmo tendo uma garrafa de Coca-Cola no quadro, porque é a melhor foto de salgado disponível; a decisão de uso fica condicionada a um crop que exclua a marca de terceiro (registrado como ressalva em `TRACEABILITY.md`).

## 11. Problemas Encontrados

- As URLs assinadas do CDN do Instagram expiram (parâmetros `oh`/`oe`); cada download precisou ser feito imediatamente após capturar a URL, sem lote.
- O Yooga (SPA) não expôs fotos de produto em `<img>` na primeira tentativa de scraping (imagens carregam sob navegação/lazy load mais profunda); não insisti nisso porque as fotos do Yooga já eram conhecidas como baixa resolução (375×500) e o Instagram supre melhor material para Salgados/apoio.

## 12. Correções Aplicadas Durante o Bloco

Nenhuma correção de retrabalho — o plano original (extrair de `og:image`) foi ajustado antes da primeira execução, ao perceber que a resolução seria insuficiente.

## 13. Pendências

### P1 — Crítica

- _Nenhuma._

### P2 — Importante

- _Nenhuma._

### P3 — Melhoria Recomendada

- Scene 05 "Salgados": única foto própria disponível (PUB-013) tem marca de terceiro (Coca-Cola) no quadro; exige crop cuidadoso no bloco 03, ou tratar como parada só-texto se o crop não isolar bem o produto.
- Scene 05 "Geladinhos & cones": nenhuma foto própria da marca mostra especificamente geladinho/picolé; PUB-023 (sortimento com sorvete italiano) é o melhor substituto disponível, mas não é 100% fiel à categoria.
- Scene 06 (loja física, fora do escopo do Concept 01): as 27 fotos do Google Maps não foram abertas; segue sem material de ambiente suficiente.

### P4 — Opcional

- Avatar circular (PUB-002) não baixado — baixa prioridade, a logo principal (PUB-001) já cobre a necessidade do protótipo.

## 14. Riscos Restantes

Nenhuma das imagens tem autorização formal de uso comercial (Track B); uso restrito ao protótipo/pitch local, conforme aprovação.

## 15. Evidências

- `references/_public-cache/TRACEABILITY.md` lista as 11 imagens com origem e dimensões.
- Saída de `file` por arquivo confirmou: PUB-001-logo.png 1100×696; PUB-010.jpg 1440×1920; PUB-013.jpg 4096×4096; PUB-014.jpg 3696×4096; PUB-016.jpg 3520×4096; PUB-017.jpg 4096×4096; PUB-018.jpg 3888×3888; PUB-019.jpg 3792×4096; PUB-023.jpg 3765×3765; PUB-024.jpg 1681×2141; PUB-026.jpg 4096×4096.

## 16. Resultado Final

- [x] Bloco concluído com ressalvas (ver pendências P3 acima)

## 17. Próximo Bloco Recomendado

Bloco 02 — bootstrap stack Astro/TypeScript/GSAP + auditoria e ativação do Impeccable.

## 18. Commit Semântico Sugerido

```
docs(asset_intake_publico): registrar rastreabilidade dos assets públicos baixados
```

Nenhum arquivo de imagem é commitado — apenas a rastreabilidade em `Docs/`, se decidirmos registrar um resumo lá também. O `TRACEABILITY.md` em si fica fora do Git (mesma pasta ignorada).

_Lembrete: este commit não é executado automaticamente — exige confirmação explícita do usuário._
