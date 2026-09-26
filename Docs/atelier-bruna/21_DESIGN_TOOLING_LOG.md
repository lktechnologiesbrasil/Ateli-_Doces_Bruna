# 21 — Registro das ferramentas de design (skills)

> Registro **do que foi realmente feito** em 2026-09-26. Comandos, versões, o que falhou, o que foi aceito/rejeitado e por quê.

## 1. UI/UX Pro Max — instalada (project-local)
- **Fonte:** `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` (MIT).
- **README atual diz:** o pacote npm correto é **`ui-ux-pro-max-cli`** (comando `uipro`); `uipro-cli` está **defasado** e não deve ser usado. O comando pedido (`npm install -g uipro-cli`) **não foi usado**.
- **Executado:** `npx -y ui-ux-pro-max-cli@2.15.0 init --ai claude --offline` (sem `--global`: instala em `./.claude/skills/`). Versão do CLI: **2.15.0** (npm).
- **Resultado:** `.claude/skills/ui-ux-pro-max/` (dados: 79 estilos, 192 paletas, 74 pares de fontes, 119 diretrizes UX, 17 presets GSAP…) e **6 skills auxiliares** que o instalador acrescenta: `banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling`.
- **Limitação:** **Python 3 não está instalado** (só o atalho da Microsoft Store). Os scripts de busca (`scripts/search.py`, `design_system.py`) **não rodaram**. Consultei os CSVs de `data/` diretamente.
- **Consultas feitas (CSV):** `products.csv` (Bakery/Cafe), `typography.csv`, `motion.csv`, `ux-guidelines.csv`.

## 2. Impeccable — instalada por caminho alternativo
- **Fonte:** `https://github.com/pbakaus/impeccable` (skill: Apache-2.0).
- **Tentativas do método oficial:** `npx impeccable@4.1.0 install --providers=claude --scope=project` e `npx impeccable@latest install …` → **falharam duas vezes**: “Download failed: Could not verify skill bundle: HTTP 404. Nothing was installed” (o próprio erro aponta o issue upstream #479). Nada foi gravado.
- **Alternativa (documentada no README, “vendored”):** copiei o **build oficial compilado para Claude** do clone local do repositório (commit `9d715cc`, 2026-09-24) para `.claude/skills/impeccable/` (skill **v4.4.0**; launcher/engine `VERSION` 0.1.6).
- **Não instalado de propósito:** `.claude/settings.json` do repositório do Impeccable (**hooks** que rodam comando a cada edição/Stop) e os 4 agentes `impeccable-*` (já existem no ambiente). Hooks são opt-in: pedir aprovação.
- **Pendente:** o launcher (`scripts/impeccable context|hook|…`) baixa **um binário do engine** para `~/.impeccable/bin/` na primeira execução (verificação SHA-256). **Ainda não rodou**; precisa do seu OK (download de arquivo externo).
- **Uso até agora:** li as referências `init.md` e `shape.md`. Como o launcher não rodou, segui o caminho previsto pela skill (“Launcher unavailable”): ler o contexto direto. Escrevi `PRODUCT.md` na raiz no formato do `init`, contendo **apenas fatos que você confirmou** e decisões abertas marcadas. **Substituição divulgada:** o `init` prevê entrevistar o usuário (AskUserQuestion); usei o seu briefing escrito como resposta e não abri rodada de perguntas.
- **Comandos reais disponíveis** (README v4.4): `/impeccable init`, `shape`, `craft`, `animate`, `critique`, `audit`, `polish`, `document`, `extract`, `typeset`, `layout`, `colorize`, `adapt`, `harden`, `optimize`, `overdrive`, `live`, `generate`, entre outros. Fluxo planejado: `init` (feito manualmente) → `shape` (brief em `20` e `PRODUCT.md`; falta sua confirmação) → `craft` → `animate` → `critique`/`audit` → `polish`.
- **Registro:** projeto tratado como **marca/landing page (brand)**, não como dashboard/produto.

## 3. img-to-html — auditada, **não instalada**
- **Fonte:** `https://github.com/rtadewald/skills/tree/main/img-to-html` (clonada só para leitura).
- **Conteúdo:** `SKILL.md` (14.993 B), `README.md` (4.443 B), `agents/openai.yaml` (457 B). **Nenhum script próprio.** Front-matter `disable-model-invocation: true`.
- **O que faz:** recria um **mock de UI (imagem)** em HTML/CSS/JS estático em 5 etapas com **aprovação humana em cada uma**: wireframe ASCII tipado → fundo → componentes + fontes → assets → revisão final comparando screenshot × referência.
- **Comandos perigosos:** nenhum destrutivo. Instrui a rodar `uv run ~/.agents/skills/openrouter-img/scripts/generate_image.py …` em paralelo (`&`/`wait`), script **de outra skill** (não auditado, rede, exige `OPENROUTER_API_KEY`).
- **Dependências ausentes:** skills `to-wireframe`, `openrouter-img`, opcionalmente `find-font`; `uv`; chave OpenRouter.
- **Licença:** **nenhum arquivo LICENSE** encontrado no repositório de skills → sem direito de reuso claro; não copiar para o projeto.
- **Incompatibilidades com este projeto:**
  1. Regenera assets a partir de *crops* com modelo de imagem (GPT Image 2) → **fabricaria/alteraria fotos reais**, contra a regra “sem produto falso”.
  2. Impõe HTML estático sem `package.json`/framework → conflita com a stack recomendada.
  3. Cinco gates de aprovação → conflita com o marco autônomo e o QA limitado do Impeccable.
  4. A entrada é um mock; **não existe mock** (não geramos conceito por IA nesta fase).
- **Aproveitado (só a metodologia):** decompor em camadas; **medir em vez de chutar** (amostrar pixels); custom properties no `:root`; sem CSS inline; **comparar screenshot × referência no mesmo viewport** com correção em lote. Será usada no loop **ANALYZE → FIX → VERIFY**, com a referência sendo o storyboard (`20`) e as fotos reais (`18`).
- **Decisão:** não usar como skill; reavaliar se você fornecer uma imagem-conceito.

## 4. Decisões de design por ferramenta
| Fonte | Recomendação | Decisão | Motivo |
|---|---|---|---|
| UIPM `products` #63 Bakery/Cafe | “Warm Brown + Cream + Appetizing accents”; “Hero-Centric + Conversion” | **Aceita** | Coincide com a marca observada |
| UIPM `products` #63 | Estilo “Vibrant & Block-based + Soft UI Evolution / Claymorphism” | **Rejeitada** | Soa infantil/UI de app; contradiz “editorial, não infantil” |
| UIPM `typography` | Serifada + sans (ex.: Cormorant Garamond, Playfair Display, Lora) | **Aceita o princípio**; **fonte não escolhida** | Só decidir comparando com a logo real (Fase de design) |
| UIPM `typography` #1 “Classic Elegant” (Playfair+Inter) como padrão | — | **Rejeitada como default** | Clichê de luxo; a logo tem swash próprio |
| UIPM `motion` #6 Scroll Reveal *Complex* (pin+scrub, scrollytelling) | Usar em narrativa | **Aceita, limitada a 3 cenas** | Serve ao storytelling; risco de performance |
| UIPM `motion` #4/#5 Scroll Reveal *Subtle/Standard* | Reveals leves | **Aceita** | Base dos reveals |
| UIPM `motion` #3 Hover *Complex* (magnético/elástico) | — | **Rejeitada** | “Animação por animação” |
| UIPM `ux` #9 Reduced Motion | Respeitar `prefers-reduced-motion` | **Aceita (obrigatória)** | Acessibilidade |
| UIPM `ux` #36 Contraste | ≥ 4,5:1 | **Aceita** | Texto creme/cacau precisa passar |
| UIPM `ux` #69 / #24 | Evitar rolagem horizontal e swipe conflitante no mobile | **Aceita** | Cena 05 vira vertical no mobile |
| UIPM `ux` #1 Smooth scroll global | `scroll-behavior: smooth` | **Aceita só para âncoras e com guarda de reduced-motion** | Sem scroll-jacking |
| Impeccable (SKILL) | Verificar em rodadas limitadas: uma varredura, correção em lote, no máx. uma confirmação | **Aceita** | Coincide com o seu pedido (ANALYZE→FIX→VERIFY) |
| Impeccable `init` | Stack é decisão do usuário; perguntar uma vez | **Aceita** | Stack fica **recomendada e aguardando aprovação** |
| Impeccable `overdrive` | Efeitos “tecnicamente extraordinários” | **Adiada** | Só se o orçamento de performance permitir |
| Lenis / smooth-scroll de biblioteca | — | **Rejeitado** | Quebra comportamento nativo/acessibilidade sem justificativa |

## 5. Segurança e Git
- Arquivos das skills: ~226 arquivos, ~6 MB em `.claude/skills/` (dos quais ~1,1 MB é `font-index.json` do Impeccable). **Sem segredos.** Comitados em separado para facilitar reversão.
- Clones temporários ficam fora do repositório (`%TEMP%\skillsrc`).
