# SignatuRe --- Master System Final / Antigravity

**Status:** FINAL MASTER --- fonte única de verdade para a implementação
inicial\
**Escopo:** Brand · Design System · Landing · Comercial · Assets ·
Implementação

> **LEIA ESTE DOCUMENTO INTEIRO ANTES DE IMPLEMENTAR.**
>
> Este Master integra e substitui instruções conflitantes/provisórias
> dos documentos anteriores. Não reinterpretar decisões aprovadas como
> padrões genéricos de landing page.

------------------------------------------------------------------------

## 0. Hierarquia de decisão

-   **LOCKED** --- aprovado; não reinterpretar.
-   **CALIBRATE IN BROWSER** --- conceito aprovado; valor/comportamento
    exato deve ser testado no protótipo real.
-   **COMMERCIAL RULE** --- regra comercial aprovada.
-   **DO NOT INVENT** --- não criar copy, cases, preços, serviços,
    depoimentos ou cláusulas inexistentes.
-   **FUTURE / OUT OF SCOPE** --- não implementar como oferta atual.

Em conflito, este Master prevalece.

------------------------------------------------------------------------

# PARTE I --- BRAND & EXPERIENCE

## 1. Brand Core --- LOCKED

**Marca:** SignatuRe / Signature\
**Attitude:** **Don't just show up. Stand out.**\
**Posicionamento:** **Sua presença digital à altura do seu negócio.**\
**Pilares:** **Autenticidade · Ousadia · Presença**

**Propósito:**\
**Transformar a maneira como negócios são percebidos no digital, criando
uma presença autêntica, marcante e capaz de valorizar o que os torna
únicos.**

**Princípio de qualidade:**\
**Só leva nossa assinatura aquilo que temos orgulho de entregar.**

Frases estratégicas aprovadas: - **Antes de ser escolha, você é
percepção.** - **Não declare valor. Torne-o perceptível.** - **Presença
começa onde o comum termina.**

> **Do not declare value. Make it perceptible.**

O próprio site deve demonstrar a qualidade do serviço vendido.

------------------------------------------------------------------------

## 2. Direção criativa --- LOCKED

A SignatuRe deve parecer **Sophisticated · Contemporary · Confident ·
Digital · Expressive · Precise**.

Evitar: - estética SaaS/startup genérica; - direção Vogue/fashion
editorial; - clichê "preto + dourado = luxo"; - excesso de gradientes,
glassmorphism, glow e efeitos; - pilhas rígidas de seções
retangulares; - animação sem função; - composição de template; - pesos
tipográficos artificiais.

------------------------------------------------------------------------

## 3. Wordmark --- LOCKED

Estado padrão: **SIGNATURE**

-   **Anta Regular 400**
-   uppercase
-   tracking de referência: **5%**
-   monocromático
-   nunca diferenciar `RE` permanentemente
-   nunca sintetizar bold ou distorcer a fonte

Reveal: **SIGNATURE → SIGNATURe**

-   `SIGNATU` permanece estável;
-   somente `Re` muda;
-   `Re`: **Mr Dafoe**;
-   `Re`: vinho;
-   referência atual: **#7B1D2A**;
-   sem layout shift;
-   preferir overlay/crossfade ou geometria estável;
-   no touch, revelar sem depender de hover.

> **A estrutura permanece. A expressão se revela.**

------------------------------------------------------------------------

## 4. Tipografia --- LOCKED

-   Wordmark: **Anta Regular 400**
-   Sistema/suporte: **Gotham Rounded**
-   Acento interativo: **Mr Dafoe**, restrito principalmente ao `Re`

> **Never artificially force font weight.**

------------------------------------------------------------------------

## 5. Cor, background e foreground --- CALIBRATE IN BROWSER

Direção aprovada: - deep charcoal / near black --- ambiente escuro; -
warm ivory / off-white --- ambiente claro; - vinho `#7B1D2A` --- acento
expressivo; - warm/mineral gray --- suporte; - aged gold/ochre ---
microacento, **1--3%** no máximo.

### Decisão final antes da implementação

O conceito **dark → light progressivo permanece**.

Não redefinir a paleta de background apenas por causa de problemas de
legibilidade observados em outro projeto. Primeiro tratar **background +
foreground/texto como um único sistema de contraste**.

Requisitos: - texto sobre dark sempre legível; - `color` deve mudar
quando necessário durante a transição; - nenhum estado intermediário
pode produzir texto ilegível; - não assumir automaticamente branco
puro/preto puro; - usar tokens semânticos (`text-on-dark`,
`text-on-light`, muted etc.) quando adequado; - acessibilidade prevalece
sobre efeito visual.

**#EDE8E3** é um **candidato/referência aprovado para warm light**, mas
seu papel exato (surface, foreground ou token relacionado) deve ser
decidido no navegador. Não tratá-lo ainda como background obrigatório.

Gold é pontuação, não definição de luxo. O vinho pode ser calibrado para
contraste.

------------------------------------------------------------------------

## 6. Light & Shadow --- LOCKED

> **Light and shadow are narrative, not decoration.**

Dark = presença / atmosfera / primeiro impacto.\
Light = revelação / clareza / respiro.\
Accent = expressão / ênfase significativa.

------------------------------------------------------------------------

## 7. Dark → Light --- LOCKED CONCEPT

-   sem corte abrupto dark/light;
-   light revelado progressivamente pelo scroll;
-   fronteira orgânica/assimétrica;
-   elementos podem cruzar a fronteira;
-   texto muda de cor conforme necessário para legibilidade;
-   sensação de que **o ambiente está mudando**, não de "próxima seção";
-   motion suave, contido, intencional;
-   sem parallax gratuito;
-   respeitar `prefers-reduced-motion`.

------------------------------------------------------------------------

## 8. Layout & Motion --- LOCKED

> **Sections organize content; they do not imprison composition.**

Narrativa contínua. Permitir assimetria, overlap controlado, elementos
atravessando limites, momentos sticky quando justificados e negative
space ativo.

> **Motion must reveal, not distract.**

Motion: confident, smooth, intentional, refined --- nunca bouncy,
constante ou espetacular sem motivo.

------------------------------------------------------------------------

## 9. Arquitetura de serviços --- LOCKED

### PRESENÇA

Landing pages, sites institucionais e experiências digitais.
Modernização/redesign mediante avaliação.

### ALCANCE

Analytics/mensuração inicialmente. Ads somente futuramente, quando
houver domínio, experiência e cases.

### CONEXÃO

Caminhos de contato, leads e **WhatsApp/contact integration**.

------------------------------------------------------------------------

# PARTE II --- LANDING FINAL

## 10. Ordem autoritativa --- LOCKED

**01 HERO → 02 PERCEPÇÃO → 03 PRESENÇA → 04 O QUE FAZEMOS → 05
ASSINATURA → FOOTER INTERATIVO**

Não existe Section 06.

Narrativa: **Apresentamos → provocamos → damos significado → explicamos
→ mostramos → convidamos → assinamos.**

Jornada: **Dark → progressive revelation → light → proof/work →
invitation → return to dark.**

Não adicionar pricing, formulário de contratação, manifesto extra ou
blocos genéricos de venda à landing principal.

------------------------------------------------------------------------

## 11. HERO

**Sua presença digital à altura do seu negócio.**

**SIGNATURE**

**DON'T JUST SHOW UP. STAND OUT.**

Dark-first, strong negative space, sem dependência de stock photography.

CTA primário obrigatório, mas o **label exato permanece CALIBRATE IN
BROWSER**.

------------------------------------------------------------------------

## 12. PERCEPÇÃO

**Antes de ser escolha, você é percepção.**

Momento visual/experiencial. Iniciar/continuar a transformação dark →
light. Sem texto explicativo redundante.

------------------------------------------------------------------------

## 13. PRESENÇA

**Sua presença digital também fala por você.**

**Faça com que ela tenha algo a dizer.**

Momento quieto, com respiro. Sem parágrafo explicativo. Sem CTA
obrigatório.

------------------------------------------------------------------------

## 14. O QUE FAZEMOS

**Construímos presença digital.**

Para que o seu negócio seja percebido, encontrado e tenha caminhos
claros para criar conexão.

### PRESENÇA

**Ser percebido.**\
Landing pages, sites e experiências digitais que traduzem identidade,
valor e personalidade.

### ALCANCE

**Ser encontrado.**\
Mensuração e estrutura para entender como as pessoas chegam até a sua
presença e o que acontece quando chegam.

### CONEXÃO

**Aproximar.**\
Caminhos de contato e interação que transformam interesse em
oportunidade.

Não transformar automaticamente em cards SaaS. CTA secundário somente se
o protótipo justificar naturalmente.

------------------------------------------------------------------------

## 15. ASSINATURA --- CASES ATUALIZADOS

Abertura:

**Só leva nossa assinatura\
aquilo que temos orgulho de entregar.**

### Regra que substitui a lista antiga

**NÃO implementar como cases SignatuRe:** Portfólio Regina Cupa, New
York, RodoSOS ou Orquidário Lilás 2.0.

Esses trabalhos pertencem ao corpo de trabalho anterior/pessoal de
Regina Cupa e não serão retroativamente apresentados como projetos
nascidos na SignatuRe.

### CASE 01 --- SIGNATURE --- LOCKED

**A própria SignatuRe é o primeiro case oficial da SignatuRe.**

Tipo: projeto proprietário / own-brand digital experience.

O case é legítimo porque incorpora o processo profissional vendido pela
marca: posicionamento, sistema de marca aplicado, UX/UI, Design System,
arquitetura de conversão, desenvolvimento, responsivo, acessibilidade,
mensuração e publicação.

### Estado inicial

**DO NOT INVENT CASE IMAGERY.**

Preparar a arquitetura do case, mas capturar as imagens finais **somente
depois da implementação da SignatuRe estar pronta e aprovada no
navegador**.

Depois: 1. capturar desktop real; 2. capturar mobile quando acrescentar
valor; 3. montar apresentação editorial; 4. otimizar; 5. salvar em
`/assets/projects/signature/`; 6. alimentar o Case 01.

Não inventar clientes, logos, screenshots, depoimentos ou cards "coming
soon".

Projetos futuros só entram como cases se realmente forem
desenvolvidos/modernizados pela SignatuRe e respeitarem as condições de
portfólio/direito de imagem.

Interação final do case: **CALIBRATE IN BROWSER**.

Fechamento:

**Agora queremos descobrir\
o que ainda não vimos.**

**\[ CONTE PRA GENTE \]**

`[ CONTE PRA GENTE ]` leva para a página separada de
preços/condições/contratação.

------------------------------------------------------------------------

## 16. FOOTER INTERATIVO

Não é nova seção de vendas. Fecha a experiência.

Retorno progressivo ao dark --- sem corte brusco.

**SIGNATURE → SIGNATURe** reaparece como fechamento de marca.

Informações funcionais ficam secundárias: navegação essencial, links
relevantes, contato e legal/copyright.

------------------------------------------------------------------------

## 17. CTA Architecture

-   Hero: CTA primário; label a calibrar.
-   Section 03: sem CTA obrigatório.
-   Section 04: CTA secundário opcional e contido.
-   Section 05: **\[ CONTE PRA GENTE \]** = CTA comercial final LOCKED.
-   Footer: sem novo CTA comercial grande.

------------------------------------------------------------------------

# PARTE III --- PÁGINA COMERCIAL / CONTRATAÇÃO

## 18. Arquitetura --- LOCKED

Preços e condições **não entram na landing principal**.

A página comercial deve seguir o Design System e não parecer uma pricing
page SaaS.

### Contato no lançamento

**Canal comercial principal: WhatsApp.**

A ação final deve iniciar conversa no WhatsApp.

**Sem formulário de contato no lançamento.**

E-mail atual: **reginacupa@gmail.com**\
Domínio oficial: **signature.tec.br**

Um e-mail futuro com domínio próprio poderá substituir o Gmail sem
redesenhar o fluxo.

------------------------------------------------------------------------

## 19. Oferta e preços --- COMMERCIAL RULE

### Landing Page

**A partir de R\$ 3.500**

### Site Institucional

**A partir de R\$ 5.500**

### Modernização / Redesign

**Sob avaliação e orçamento.**

### Projeto personalizado

**Sob consulta.**

Catálogo enxuto. Necessidades fora do padrão podem ser avaliadas caso a
caso se houver segurança e qualidade de entrega.

------------------------------------------------------------------------

## 20. Escopo estratégico

A SignatuRe desenvolve a **estratégia da experiência digital**, não a
estratégia completa de marketing.

Discovery pode compreender negócio, público informado pelo cliente,
objetivos, percepção desejada, prioridades, conteúdo e ação esperada.

Não entram automaticamente: pesquisa de mercado, persona completa,
posicionamento comercial completo, funil, gestão de redes, conteúdo
contínuo, campanhas e mídia paga.

------------------------------------------------------------------------

## 21. Identidade visual

Branding não será anunciado como serviço padrão no lançamento.

Criação, revisão, atualização ou adaptação podem ser avaliadas caso a
caso. Adaptações necessárias para aplicação digital podem integrar o
design.

------------------------------------------------------------------------

## 22. Conteúdo e materiais

Cliente fornece materiais-base: informações, textos, logo, fotos,
contatos, serviços, preços, depoimentos etc.

A SignatuRe pode organizar, hierarquizar, reduzir e adaptar conteúdo à
experiência. Isso não equivale automaticamente a copywriting completo.

Conteúdo/copy adicional pode ser orçado separadamente. Recursos pagos de
terceiros são aprovados e custeados pelo cliente.

------------------------------------------------------------------------

## 23. Direito de imagem / terceiros

Cliente é responsável pelos direitos, licenças e autorizações dos
materiais fornecidos.

Direito de mostrar o projeto como case **não implica automaticamente**
direito de reutilizar isoladamente imagens de pessoas ou materiais de
terceiros na publicidade SignatuRe.

Direito de imagem, IP, licenças, confidencialidade e LGPD: redação final
validada pelo jurídico.

------------------------------------------------------------------------

## 24. SEO + Analytics

Quando aplicável, projeto-base inclui **SEO técnico/on-page básico** e
configuração inicial de mensuração.

Pode incluir HTML semântico, headings, title/meta description, URLs,
alt, otimização de imagens/performance, responsividade, sitemap/robots e
preparação para indexação.

Sem promessa de ranking.

Mensuração pode incluir eventos básicos relevantes, especialmente
**WhatsApp/CTA**.

Não inclui SEO contínuo, keyword research extensa, conteúdo recorrente,
link building, ranking monitoring, relatórios recorrentes, consultoria
contínua de Analytics ou mídia paga.

------------------------------------------------------------------------

## 25. Prazos

-   Landing Page: **10--15 dias úteis**
-   Site Institucional: **20--30 dias úteis**
-   Modernização/personalizados: conforme proposta

Prazo inicia após briefing + materiais essenciais.

Espera por cliente não consome prazo de produção.

Após **7 dias úteis sem retorno**, projeto pode ser pausado e perder
posição ativa na agenda; retomada conforme disponibilidade.

------------------------------------------------------------------------

## 26. Urgência

Avaliada caso a caso. Pode alterar prazo e investimento.

> **Urgência de um novo cliente nunca altera compromissos já assumidos
> pela SignatuRe.**

------------------------------------------------------------------------

## 27. Revisões

**2 rodadas consolidadas** incluídas, salvo proposta diferente.

Erro SignatuRe não consome rodada.

Mudança de direção, etapa aprovada, novo escopo, rodadas extras ou
funcionalidades adicionais podem alterar prazo/investimento.

Nenhum adicional sem aprovação prévia.

> **O combinado não sai caro.**

------------------------------------------------------------------------

## 28. Fluxo comercial

**Contato → Qualificação → Briefing SignatuRe → Alinhamento quando
necessário → Proposta → Contrato → Entrada → Reserva da agenda →
Materiais → Início**

Briefing: enxuto e orientado à experiência digital. Reunião somente
quando necessária.

------------------------------------------------------------------------

## 29. Proposta

Validade: **10 dias corridos**.

Depois disso, preço, prazo e disponibilidade podem ser reavaliados.

Aceite informal não reserva agenda.

------------------------------------------------------------------------

## 30. Pagamento

**50% na contratação/reserva da agenda.**\
**50% na conclusão/aprovação final, antes da publicação/entrega
definitiva.**

Sem publicação/entrega definitiva antes da quitação, salvo acordo
expresso.

------------------------------------------------------------------------

## 31. Cancelamento / abandono --- LEGAL REVIEW

Direção comercial: proteger agenda, trabalho executado, recebimentos e
impedir projetos eternamente abertos.

Cancelamento, desistência, abandono, retenção/devolução, encerramento e
retomada: jurídico define/valida.

**DO NOT INVENT CONTRACT CLAUSES.**

------------------------------------------------------------------------

## 32. Domínio, hospedagem e serviços externos

Contratados e pagos pelo cliente, preferencialmente em nome/conta dele.

SignatuRe pode orientar. Configuração inicial, conexão e primeiro deploy
entram no projeto quando aplicáveis.

Preferir acesso de colaborador.

Problemas decorrentes de inadimplência, expiração ou provedor não são
responsabilidade SignatuRe; recuperação/reconfiguração/migração podem
ser orçadas.

------------------------------------------------------------------------

## 33. Entrega, código e propriedade

Após quitação, cliente recebe projeto/código final conforme
proposta/contrato.

Sem retenção artificial para criar dependência.

Recursos de terceiros seguem suas licenças. IP/licenciamento: redação
jurídica final.

------------------------------------------------------------------------

## 34. Portfólio e cases

SignatuRe pode apresentar projetos desenvolvidos como cases, respeitando
confidencialidade, direitos de imagem, licenças, informações sensíveis e
condições acordadas.

Redação contratual: jurídico.

------------------------------------------------------------------------

## 35. Pós-publicação

Todo projeto inclui **30 dias de acompanhamento**.

Inclui dúvidas sobre funcionamento, orientação básica e correções
técnicas do escopo original.

Não inclui troca de textos/fotos/preços, novas seções, funcionalidades,
integrações, redesign ou novo escopo.

Depois: manutenção avulsa, Care ou novo orçamento.

------------------------------------------------------------------------

## 36. Backup

Backup por **mínimo 12 meses após publicação**.

Care ativo: durante relacionamento + **12 meses após encerramento**.

Cada manutenção avulsa renova retenção por **12 meses**.

Backup SignatuRe não substitui hospedagem/infraestrutura do cliente.

------------------------------------------------------------------------

## 37. Sites de terceiros

SignatuRe **não faz manutenção recorrente em sites desenvolvidos por
terceiros**.

Pode assumir como novo projeto de
modernização/redesign/migração/reconstrução após avaliação.

Depois de modernizado, quitado e entregue pela SignatuRe, torna-se
elegível para manutenção/Care.

------------------------------------------------------------------------

## 38. Manutenção avulsa

Somente projetos desenvolvidos/modernizados pela SignatuRe.

**A partir de R\$ 180 por atendimento**, sujeito à avaliação.

Pequenas alterações de texto, imagem, preço, telefone, horário, links
etc.

Conforme disponibilidade de agenda. Demandas maiores recebem orçamento.

------------------------------------------------------------------------

## 39. SignatuRe Care

**R\$ 390/mês**

Disponível após os 30 dias pós-publicação, somente para projetos
SignatuRe.

Inclui: - até **3 solicitações consolidadas** de pequenas
atualizações/mês; - prioridade; - prazo normal de até **3 dias úteis**,
conforme demanda; - continuidade operacional; - backup enquanto ativo.

Não acumula.

Não inclui novas páginas/seções relevantes, redesign, novas
funcionalidades, integrações complexas, produção de conteúdo, mudanças
estruturais, SEO recorrente, relatórios Analytics, consultoria de
performance, mídia paga ou recuperação por inadimplência de terceiros.

Manutenção técnica das configurações originais pode integrar o cuidado.
Análise/relatórios/recomendações recorrentes = escopo separado.

Pagamento antecipado. Sem fidelidade no lançamento. Cancelamento para o
ciclo seguinte; ciclo pago permanece ativo até o fim. Jurídico valida
redação.

Horas são controle interno. **Cliente não compra pacote de horas.**

Care tem prioridade; manutenção avulsa entra conforme disponibilidade.

------------------------------------------------------------------------

## 40. Evolução futura --- OUT OF SCOPE

Branding, produção contínua de conteúdo, SEO contínuo, performance
recorrente, Ads e novos modelos só entram quando houver domínio,
processo, experiência, cases e capacidade.

Não aumentar catálogo só para parecer maior.

------------------------------------------------------------------------

# PARTE IV --- ASSETS & IMPLEMENTAÇÃO

## 41. Assets --- LOCKED

Sem dependência de stock photography decorativa.

Assets iniciais: 1. marca --- somente arquivos necessários; 2. cases ---
somente trabalho real SignatuRe; 3. ícones --- somente funcionais.

Estrutura sugerida:

``` text
/assets
    /brand
    /projects
        /signature
            [screenshots reais após implementação aprovada]
    /icons
```

Não preencher `/images` com decoração sem função.

------------------------------------------------------------------------

## 42. Responsive

Desktop e mobile desenhados intencionalmente.

Mobile: - preservar hierarquia; - reduzir motion decorativo; -
substituir hover por comportamento touch-safe; - manter line lengths
legíveis; - proteger CTAs; - preservar dark → light; - evitar overlap
que comprometa texto.

------------------------------------------------------------------------

## 43. Accessibility --- NON-NEGOTIABLE

-   semantic HTML;
-   headings lógicos;
-   keyboard navigation;
-   focus visível;
-   contraste adequado;
-   labels descritivos;
-   reduced motion;
-   nada essencial exclusivo de hover;
-   nada essencial apenas em imagem.

**Testar contraste do foreground em vários pontos do scroll dark →
light, não apenas nos extremos estáticos.**

------------------------------------------------------------------------

## 44. Performance

Preferir transforms/opacity, assets otimizados, responsive images, lazy
loading, bibliotecas de animação contidas e progressive enhancement.

Evitar vídeo pesado sem justificativa, WebGL desnecessário, bibliotecas
concorrentes, fontes bloqueantes e layout thrashing.

------------------------------------------------------------------------

## 45. Guidance para Antigravity

Antes de codar: 1. ler todo o Master; 2. tratar LOCKED como constraint;
3. construir protótipo funcional; 4. priorizar `Re` reveal, dark →
light, contraste de foreground, composição cross-boundary e retorno ao
dark; 5. manter código modular/tunável; 6. não fabricar cases; 7. não
inventar oferta comercial.

Componentes sugeridos: `Header`, `InteractiveWordmark`, `Hero`,
`ScrollLightReveal`, `PerceptionStatement`, `PresenceStatement`,
`ServiceArchitecture`, `CaseStudy`, `FinalCTA`, `Footer`,
`CommercialPage`, `WhatsAppCTA`.

Centralizar motion tokens.

------------------------------------------------------------------------

## 46. CALIBRATE IN BROWSER --- lista final

-   valores exatos charcoal/ivory/gray;
-   foreground/text tokens e lógica de troca/transição;
-   papel final do `#EDE8E3`;
-   vinho final para contraste;
-   duração/easing;
-   breakpoints;
-   composição final Hero;
-   label exato CTA Hero;
-   CTA secundário;
-   interação final Case 01;
-   timing/trigger footer;
-   densidade final.

Esses itens estão **intencionalmente abertos**.

------------------------------------------------------------------------

## 47. DO NOT --- guardrails finais

Não: - substituir fontes aprovadas; - destacar `RE` permanentemente; -
espalhar Mr Dafoe; - fazer corte brusco dark/light; - permitir perda de
contraste no scroll; - empilhar retângulos genéricos; - criar Vogue ou
SaaS genérico; - usar preto+dourado como clichê; - exagerar efeitos; -
depender de stock; - colocar pricing na landing; - criar Section 06; -
inventar manifesto/CTA aprovado; - inventar cases, clientes, logos,
screenshots ou depoimentos; - apresentar trabalhos pessoais antigos de
Regina como cases SignatuRe; - inventar serviços, preços ou cláusulas; -
criar formulário no lançamento; - sacrificar
mobile/acessibilidade/performance.

------------------------------------------------------------------------

## 48. Teste final de implementação

Antes de considerar alinhado:

1.  A experiência parece contínua, não template empilhado?
2.  `SIGNATURE` vem antes da descoberta `SIGNATURe`?
3.  Dark → light é progressivo?
4.  Texto permanece legível em todos os estados relevantes da transição?
5.  PRESENÇA continua minimalista?
6.  O QUE FAZEMOS evita cards SaaS genéricos?
7.  ASSINATURA está preparada para **Case 01 --- SignatuRe** sem imagem
    fabricada?
8.  `[ CONTE PRA GENTE ]` leva à página comercial?
9.  Pricing está fora da landing?
10. A ação comercial final usa **WhatsApp**?
11. Não existe formulário de contato no lançamento?
12. Footer retorna progressivamente ao dark?
13. Anta, Gotham Rounded e Mr Dafoe respeitam seus papéis?
14. Motion é contido, útil e acessível?
15. Mobile funciona sem hover?
16. Nenhuma copy/oferta/case/preço/seção não aprovada foi inventada?
17. O próprio site torna o valor SignatuRe perceptível?

Se qualquer resposta for "não", revisar.

------------------------------------------------------------------------

# PARTE V --- REFERÊNCIA INTERNA

## 49. Lógica interna de preço --- NÃO CLIENT-FACING

Meta inicial de referência: **R\$ 8.000/mês**.

Horas são controle interno de
custo/esforço/complexidade/capacidade/rentabilidade. **Não vender
horas.**

Reavaliar preços após os **3 primeiros projetos comerciais** usando
esforço real, revisões, complexidade, administração, rentabilidade e
resposta comercial.

------------------------------------------------------------------------

## 50. Validação jurídica

Este Master define diretrizes comerciais; **não é contrato**.

Jurídico deve validar especialmente contratação, cancelamento,
desistência, abandono, pagamentos/retenções, IP, código/direitos de uso,
portfólio, confidencialidade, direito de imagem, terceiros, LGPD,
licenças, serviços externos e Care.

Antigravity **não deve inventar cláusulas jurídicas**.

------------------------------------------------------------------------

# FINAL PRINCIPLE

**Qualidade para o cliente + clareza de escopo + sustentabilidade para o
negócio.**

> **O combinado não sai caro.**

> **Só leva nossa assinatura aquilo que temos orgulho de entregar.**

> **A estrutura permanece. A expressão se revela.**

------------------------------------------------------------------------

**SignatuRe**\
**MASTER SYSTEM FINAL --- Design · Development · Commercial ·
Implementation**
