# Registro de Decisões

> Projeto: Ateliê_Doce_Bruna · Atualizado em: 2026-09-26

> Este registro cobre decisões de processo, governança e produto. Decisões puramente arquiteturais/técnicas têm registro dedicado em `Docs/02_architecture/decisoes_tecnicas.md` — se a decisão é sobre código/infra, prefira aquele documento; se é sobre processo, prioridade ou governança, use este.

## 1. Objetivo

Registrar decisões caras de reverter para que ninguém (humano ou agente) precise reconstruir o raciocínio por trás delas a partir de memória ou suposição.

## 2. Decisões

Uma entrada por decisão, mais recente primeiro. Nunca edite uma decisão antiga para "corrigi-la" — registre uma nova decisão que a supersede.

### RD-01 — _Título da decisão_

- **Data:** _..._
- **Contexto:** _..._
- **Decisão:** _..._
- **Alternativas consideradas:** _..._
- **Consequências:** _..._
- **Status:** Vigente / Superada por RD-_NN_

## 3. Governança para Mudanças Feitas por Agentes de IA

- [ ] Mudança de escopo durante a execução de um bloco é reportada antes de ser implementada, não decidida unilateralmente pelo agente.
- [ ] Toda decisão que um agente toma sem confirmação prévia do usuário (quando a confirmação era exigida) é registrada como pendência P1 no feedback do bloco.
- [ ] Decisões tomadas por um agente que afetam contratos (`Docs/03_contracts/`) ou design system (`Docs/07_design_system/`) são registradas aqui mesmo quando pequenas.

## 4. Perguntas Orientadoras

- Esta decisão foi tomada por uma pessoa/agente específico sob pressão de tempo? Isso deveria ser revisitado com calma depois?
- Esta decisão contradiz alguma decisão anterior (aqui ou em `decisoes_tecnicas.md`)? Se sim, a anterior foi marcada como superada?

## 5. Decisões Pendentes

_..._

## Decisões registradas — Ateliê Doces Bruna

### RD-01 — `00_CONTEXT_MASTER.md` é a fonte canônica de contexto de negócio/marca

- **Data:** 2026-09-26
- **Contexto:** o projeto tem contexto de marca/negócio extenso e o DDAE traz documentos de governança próprios; duas fontes concorrentes gerariam divergência.
- **Decisão:** `Docs/atelier-bruna/00_CONTEXT_MASTER.md` é a fonte canônica de contexto do negócio e da marca. Os documentos DDAE (`01_product`, `02_architecture`, `04_governance`, `07_design_system`) cobrem governança/processo e **referenciam** o MASTER sem copiá-lo. Toda informação nova e relevante atualiza o MASTER primeiro.
- **Alternativas consideradas:** duplicar o contexto dentro de `Docs/01_product`; usar apenas o DDAE.
- **Consequências:** leitura obrigatória do MASTER por todo agente/sessão; fatos, observações, direção e lacunas rotulados; dados voláteis com data.
- **Status:** Vigente

### RD-02 — Fase 00 sem stack e sem código de frontend

- **Data:** 2026-09-26
- **Decisão:** nenhuma stack, framework, biblioteca visual ou código de landing page até as Fases 01–04 (discovery, arquitetura, direção visual, concept). O DDAE é instalado como `devDependency`.
- **Status:** Vigente
### RD-03 — Fase 00 concluída; Fase 01 (Discovery) iniciada; implementação bloqueada

- **Data:** 2026-09-26
- **Contexto:** a fundação (Git, DDAE, contexto) foi enviada a `origin/main` (`c150756`, `aa8f082`). O próximo trabalho é coletar informação e assets reais com a Bruna.
- **Decisão:** Discovery é o trabalho atual. **Nenhum código, stack, design system ou protótipo** até os critérios de `Docs/atelier-bruna/13_DISCOVERY_DOD.md` estarem cumpridos (gaps P0 confirmados com evidência) ou o dono do projeto registrar exceção aqui.
- **Referências:** `Docs/atelier-bruna/07_DISCOVERY_GAPS.md`, `09_DISCOVERY_INTERVIEW.md`, `10_ASSET_REQUEST.md`, `11_ASSET_INVENTORY.md`, `12_CONTENT_MATRIX.md`.
- **Consequências:** requisitos funcionais (`Docs/01_product/requisitos_funcionais.md`) só serão escritos após o Discovery.
- **Status:** Vigente- **Atualização 2026-09-26:** pacote client-facing preparado (`14`, `15`, `16`). Próxima ação externa: entrevista + coleta de materiais. Fase 01 **não** concluída; segue o DoD.
