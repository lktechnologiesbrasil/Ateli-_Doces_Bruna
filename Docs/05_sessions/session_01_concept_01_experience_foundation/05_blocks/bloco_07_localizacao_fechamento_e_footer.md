# Bloco 07 — localizacao fechamento e footer

> Sessão: 01 (concept_01_experience_foundation) · Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

## 1. Objetivo
Construir Scene 09 (Visite o Ateliê), Scene 10 (Fechamento) e o Footer.

## 2. Contexto
Horário e endereço completo divergem entre fontes públicas (`08_SOURCES_AND_EVIDENCE.md`). Decisão do dono do projeto: omitir dado divergente em vez de escolher uma fonte arbitrariamente.

## 3. Problema que este bloco resolve
Fechar a experiência com identidade forte sem afirmar dados não confirmados, e dar acesso rápido aos canais reais no rodapé.

## 4. Escopo
- [x] `Visit.astro`: só cidade + CTA Google Maps.
- [x] `Closing.astro`: logo + frase existente + CTA.
- [x] `Footer.astro`: logo, links reais, aviso de protótipo.

## 5. Fora de escopo
Página de política de privacidade (placeholder `#privacidade`).

## 6. Arquivos envolvidos
`src/components/Visit.astro`, `src/components/Closing.astro`, `src/components/Footer.astro`.

## 7. Dependências
Link do Google Maps corrigido para CID no Bloco 08 (era busca por nome).

## 8. Plano de implementação
1. Scene 09 sem horário/endereço, com aviso de "confira antes de visitar".
2. Scene 10 com logo real e frases existentes da marca (bio do Instagram, assinatura do Yooga).
3. Footer com 4 links externos + 1 placeholder interno, e aviso "não representa o site em produção".

## 9. Critérios de aceite
- [x] Nenhum horário/endereço numérico exibido.
- [x] CTA "Como chegar" resolve para a ficha correta (verificado no Bloco 08).
- [x] Footer legível (contraste medido no Bloco 08: 6,82:1 e 5,44:1).

## 10. Validações obrigatórias
- [x] `npm run build`
- [x] Medição de contraste (Bloco 08)

## 11. Segurança
Não aplicável.