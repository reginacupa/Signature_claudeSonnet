# SignatuRe — site oficial (primeira versão)

Implementação do `SIGNATURE_MASTER_SYSTEM_FINAL_ANTIGRAVITY.md`. React + Vite, sem bibliotecas de animação (CSS transforms/opacity/clip-path + um controlador de scroll próprio).

## Executar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # produção em /dist
npm run preview
```

Rotas: `/` (landing) · `/contratar` (página comercial).

## Estrutura

```
public/assets/{brand,icons,projects/signature}   assets (signature = Case 01, aguardando capturas reais)
src/config/tokens.js      cores, tipografia, espaço, motion, ambient (dark→light) — ÚNICA fonte
src/config/contact.js     WhatsApp (número/mensagem), e-mail, domínio
src/config/site.js        flag dos marcadores "provisório"
src/styles/breakpoints.css  breakpoints (@custom-media)
src/content/              copy aprovada, cases, conteúdo comercial
src/ambient/              AmbientEngine (camada de luz + tom por elemento), Tone, SplitTone
src/components/           InteractiveWordmark, Header, Footer, WhatsAppCTA
src/sections/ · src/pages/
```

## Como funciona o dark → light

`AmbientEngine` desenha uma camada fixa de luz com fronteira orgânica (clip-path) dirigida pelo scroll. O mesmo cálculo decide o tom do texto **por elemento** (e por letra, dividindo a letra quando a fronteira a atravessa), trocando tokens semânticos (`--fg`, `--fg-muted`, `--accent`). Não há transição de cor, logo não há estado intermediário de baixo contraste. O dark retorna ancorado no footer.

## Configurar o WhatsApp

Edite `src/config/contact.js` → `whatsappNumber` (apenas dígitos com DDI+DDD). Enquanto vazio, o CTA abre `wa.me` sem destinatário e exibe um aviso "provisório". Remover avisos: `SHOW_PROVISIONAL_MARKERS = false` em `src/config/site.js`.

## Case 01

Quando houver capturas reais, salve em `public/assets/projects/signature/` e preencha `media` em `src/content/cases.js`. O layout já está pronto.

## CALIBRATE IN BROWSER — itens abertos (todos em `tokens.js` salvo indicação)

- Cores charcoal/ivory/gray e tokens de foreground; papel do `#EDE8E3` (hoje: superfície clara)
- Vinho sobre dark (`wineOnDark` `#CF6075`, ajustado para contraste; sobre light usa `#7B1D2A`)
- Durações/easings/thresholds (`motion`), dica do Re no touch, trigger do Re no footer
- Forma e ritmo da fronteira (`ambient`), comprimento do trecho pinned (`space.pinPerception`)
- Posição/escala do "Re" Mr Dafoe (`wordmark.reScale/reX/reY`)
- Breakpoints (`breakpoints.css`)
- Composição do Hero; **label do CTA do Hero é PROVISÓRIO** (`src/content/copy.js`)
- CTA secundário de "O que fazemos": não implementado (opcional no Master)
- Interação final do Case 01; densidade final

## Pendências / avisos

- **Gotham Rounded** é fonte licenciada e não está no projeto. Fallback provisório: Nunito. Se instalada localmente, é usada automaticamente (`local()`); para publicar, adicione os arquivos e um `@font-face`.
- Número do WhatsApp não fornecido (não inventado).
- Redação jurídica (cancelamento, IP, LGPD etc.) não incluída — o Master pede validação jurídica.
- Reduced motion: fronteira vira linha reta (sem ondas), sem reveals/animações; troca de tom permanece.
