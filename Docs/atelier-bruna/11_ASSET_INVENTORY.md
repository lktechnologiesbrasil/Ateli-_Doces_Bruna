# 11 — Inventário de assets

> Tabela viva. **Nenhum arquivo foi recebido.** Só entram aqui itens cuja existência é conhecida, ou itens necessários (marcados NÃO SOLICITADO).
> Arquivos reais ficam em `references/` (estrutura abaixo). Não colocar imagens não autorizadas no repositório.

## Status
`NÃO SOLICITADO` · `SOLICITADO` · `RECEBIDO` · `VALIDADO` · `SUBSTITUIR` · `DESCARTADO`

## Legenda
- **Origem:** de onde/quem veio (URL, pessoa, data). “Público (observado)” = visto em fonte pública, sem arquivo em mãos.
- **Qualidade:** `—` enquanto não recebido; depois: ok / insuficiente / a refazer.
- **Direitos/Autorização:** `PENDENTE` até haver registro escrito (quem autorizou, quando, escopo).

## Tabela

| ID | Categoria | Asset | Status | Origem | Qualidade | Uso previsto | Direitos/Autorização | Observações |
|---|---|---|---|---|---|---|---|---|
| A-001 | Marca | Logo original (vetor) | NÃO SOLICITADO | — | — | Header, hero, footer, favicon | PENDENTE | Gap G-015. Nunca redesenhar |
| A-002 | Marca | Logo — versões (horizontal, vertical, avatar, ícone floral) | NÃO SOLICITADO | — | — | Header, favicon, OG | PENDENTE | G-016 |
| A-003 | Marca | Avatar circular do Instagram (marrom/cacau, off-white) | NÃO SOLICITADO | Público (observado, set/2026): instagram.com/ateliedocesbruna | — | Referência; não usar como fonte definitiva | PENDENTE | Existe publicamente; usar o arquivo original |
| A-004 | Marca | Manual de marca / fontes / cores | NÃO SOLICITADO | — | — | Fase 03 | PENDENTE | G-017, G-018, G-019. Existência desconhecida |
| A-005 | Pessoas | Retratos da Bruna | NÃO SOLICITADO | — | — | Seção Bruna, hero | PENDENTE | G-047. Bruna aparece no feed do Instagram (observado) |
| A-006 | Pessoas | Bruna trabalhando / mãos | NÃO SOLICITADO | — | — | Bastidores | PENDENTE | G-047, G-051 |
| A-007 | Loja | Fachada | NÃO SOLICITADO | — | — | Loja, SEO local | PENDENTE | G-049 |
| A-008 | Loja | Interior, vitrine, bancada | NÃO SOLICITADO | — | — | Loja | PENDENTE | G-049 |
| A-009 | Produtos | Fotos dos produtos principais (bolos, doces, sobremesas, fatias) | NÃO SOLICITADO | Feed do Instagram (observado) mostra esse tipo de conteúdo | — | Criações, hero, momento de desejo | PENDENTE | G-050. Confirmar autoria das fotos existentes |
| A-010 | Produtos | Macros/texturas | NÃO SOLICITADO | — | — | Momento de desejo | PENDENTE | Pode exigir nova sessão de fotos |
| A-011 | Produtos | Bebidas/cafeteria | NÃO SOLICITADO | — | — | Criações, Loja | PENDENTE | G-033 |
| A-012 | Marca | Embalagens | NÃO SOLICITADO | — | — | Bastidores | PENDENTE | G-022 |
| A-013 | Conteúdo | Menu de Bolos | NÃO SOLICITADO | Público (observado) via ecossistema atual | — | Taxonomia, Encomendas | PENDENTE | Localizar arquivo original |
| A-014 | Conteúdo | Catálogo/cardápio do Yooga | NÃO SOLICITADO | delivery.yooga.app/ateliedocesbruna | — | Taxonomia de Criações (sem preços) | PENDENTE | Não inventariado |
| A-015 | Conteúdo | Campanhas sazonais | NÃO SOLICITADO | Destaques do Instagram (observado) | — | Referência | PENDENTE | |
| A-016 | Conteúdo | Bastidores (foto/vídeo) | NÃO SOLICITADO | — | — | Feito à mão | PENDENTE | G-051 |
| A-017 | Conteúdo | Fotos antigas/históricas | NÃO SOLICITADO | — | — | História | PENDENTE | G-052 |
| A-018 | Conteúdo | Vídeos | NÃO SOLICITADO | — | — | Bastidores | PENDENTE | G-053 |
| A-019 | Prova social | Avaliações reais do Google | NÃO SOLICITADO | Público (observado, set/2026): 4,6/5, 10 avaliações | — | Prova social | PENDENTE | Volátil; textos exigem fonte/autorização |
| A-020 | Prova social | Depoimentos de clientes | NÃO SOLICITADO | — | — | Prova social | PENDENTE | G-055, G-067 |
| A-021 | Prova social | Matérias/menções | NÃO SOLICITADO | — | — | Prova social | PENDENTE | G-056; existência desconhecida |
| A-022 | Texto | Endereço, horários, contatos confirmados | NÃO SOLICITADO | Público (observado) | — | Loja, footer, SEO | n/a | G-035, G-036, G-040, G-041 |
| A-023 | Texto | Link oficial do Yooga | NÃO SOLICITADO | delivery.yooga.app/ateliedocesbruna/tabs/home | — | CTA Pedir agora | n/a | G-070 |
| A-024 | Legal | Autorização de uso de logo e fotos | NÃO SOLICITADO | — | — | Pré-requisito | — | G-068, G-069 |

## Estrutura preparada para receber arquivos (em `references/`, ainda vazia)
```
references/
├── README.md
├── brand/        # logo, versões, fontes, manual, cores
├── people/       # Bruna
├── store/        # fachada, interior
├── products/     # produtos, macros, bebidas
├── behind-the-scenes/
├── packaging/
├── social-proof/ # prints/textos de avaliações autorizadas
├── documents/    # menu, catálogo, materiais impressos
└── _inbox/       # recebido, ainda não validado
```
As subpastas serão criadas quando o **primeiro asset real** chegar (o Git não versiona pastas vazias). Convenção de nome sugerida: `AAAA-MM-DD_categoria_descricao_origem.ext`. Todo arquivo deve ter linha nesta tabela e autorização registrada antes de sair de `_inbox/`.
