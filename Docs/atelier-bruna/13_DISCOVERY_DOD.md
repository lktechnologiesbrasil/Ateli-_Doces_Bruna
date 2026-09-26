# 13 — Definition of Done da Fase 01 (Discovery)

> Discovery **não termina** porque “já temos bastante coisa”. Termina quando os critérios abaixo estiverem satisfeitos **com evidência registrada**.

## Regra de encerramento
1. **Todos os gaps P0** de `07_DISCOVERY_GAPS.md` estão `CONFIRMADO` (com data e evidência) — ou explicitamente descartados/adiados pelo dono do projeto, registrado em `Docs/04_governance/registro_decisoes.md`.
2. Os **critérios mínimos** abaixo estão todos marcados.
3. O MASTER está atualizado com o que foi confirmado (fatos rotulados; nada inventado).
4. Todo asset usado tem linha em `11_ASSET_INVENTORY.md` com autorização registrada.

Até lá, **implementação permanece bloqueada** (sem stack, design system, protótipo ou frontend).

## Critérios mínimos
| # | Critério | Gaps relacionados | Evidência esperada | Feito |
|---|---|---|---|---|
| 1 | Identidade visual original recebida (logo vetor + versões) | G-015, G-016 | Arquivos em `references/brand/`, linhas A-001/A-002 `VALIDADO` | [ ] |
| 2 | Autorização de uso da logo | G-068 | Registro escrito e datado | [ ] |
| 3 | História básica confirmada (quem é, por que começou, origem do nome) | G-001, G-003, G-007 | Entrevista transcrita/anotada e validada pela Bruna | [ ] |
| 4 | Informações da loja validadas (endereço, horários) | G-035, G-036 | Confirmação escrita da Bruna | [ ] |
| 5 | Canais oficiais confirmados (telefone, WhatsApp, Instagram, Yooga) | G-040, G-041, G-070 | Confirmação escrita; URLs | [ ] |
| 6 | Categorias principais de produto confirmadas | G-024 | Lista validada por ela | [ ] |
| 7 | Produtos prioritários identificados (carro-chefe) | G-025, G-029 | Lista validada por ela | [ ] |
| 8 | Ao menos um conjunto de fotos utilizável (Bruna, loja e produtos principais) | G-047, G-049, G-050 | Assets `VALIDADO` em `11_ASSET_INVENTORY.md` com qualidade ok | [ ] |
| 9 | Autorização de uso das fotos | G-069 | Registro por asset (autoria + escopo) | [ ] |
| 10 | Fluxo de pedido definido (Pedir agora → Yooga) | G-070 | Link oficial confirmado e comportamento do CTA descrito | [ ] |
| 11 | Fluxo de encomenda definido (WhatsApp) | G-041, G-042 | Número, mensagem padrão, o que perguntar, antecedência (G-043 se disponível) | [ ] |
| 12 | Hierarquia entre delivery × loja × encomendas definida | G-063 | Resposta da Bruna registrada | [ ] |
| 13 | Dados essenciais de SEO local validados | G-071, G-035, G-036, G-040 | Nome, categoria, endereço, telefone e horários coerentes entre si e com o Google | [ ] |

## P0 atuais (todos abertos ou parciais)
G-001, G-003, G-007, G-015, G-016, G-024, G-025, G-029, G-035, G-036, G-040, G-041, G-042, G-047, G-049, G-050, G-063, G-068, G-069, G-070, G-071.

## Como registrar progresso
Ao confirmar um gap: (1) mudar status em `07` com data e evidência; (2) atualizar o arquivo temático e o MASTER; (3) marcar o critério aqui; (4) registrar o asset em `11`.

## O que NÃO bloqueia o encerramento
P1–P3 podem seguir abertos. P1 devem estar resolvidos antes do design final (Fase 04); P2 e P3 podem ser tratados durante o desenvolvimento ou depois.

## Estado
**Fase 01 iniciada em 2026-09-26. Critérios cumpridos: 0/13.** Bloqueio real: coleta de informações e assets com a Bruna.
