import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CircleAlert,
  ClipboardCheck,
  Dumbbell,
  Flame,
  HelpCircle,
  Leaf,
  LockKeyhole,
  MessageCircle,
  NotebookTabs,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import heroImage from "@/assets/massa-em-casa-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto Massa em Casa | Treino e Alimentação Organizados" },
      {
        name: "description",
        content:
          "Produto digital fitness com planilhas, lista de alimentos e ferramentas para organizar treinos em casa e criar uma rotina mais consistente.",
      },
      { property: "og:title", content: "Projeto Massa em Casa" },
      {
        property: "og:description",
        content:
          "Seu treino e sua alimentação organizados em um único plano, com acesso digital e opções Básico e Premium.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phoneNumber = "5511916734009";

const checkoutLinks = {
  basic: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Olá! Quero começar agora com o Projeto Massa em Casa — Plano Básico de R$ 19,90. Pode me enviar o link de pagamento e acesso?",
  )}`,
  premium: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Olá! Quero começar agora com o Projeto Massa em Casa — Plano Premium de R$ 59,90. Pode me enviar o link de pagamento e acesso?",
  )}`,
};

const problemCards = [
  "Não sabe quais exercícios fazer",
  "Não consegue organizar sua rotina",
  "Fica perdido na alimentação",
  "Não acompanha sua evolução",
];

const trainingItems = [
  "Divisão dos treinos",
  "Exercícios, séries e repetições",
  "Descanso entre séries",
  "Acompanhamento de cargas/repetições",
  "Checklist dos treinos",
  "Espaço para observações",
  "Acompanhamento da evolução",
];

const foodItems = [
  "Proteínas",
  "Carboidratos",
  "Fontes de gordura",
  "Frutas",
  "Vegetais",
  "Opções práticas para o dia a dia",
];

const beforeItems = [
  "Treino sem planejamento",
  "Alimentação desorganizada",
  "Falta de acompanhamento",
  "Dificuldade para manter consistência",
];

const afterItems = [
  "Treino organizado",
  "Alimentos selecionados",
  "Acompanhamento da evolução",
  "Rotina mais fácil de seguir",
];

const basicPlanItems = [
  "Planilha de treino em casa",
  "Lista de alimentos selecionados",
  "Checklist de treino",
  "Acesso imediato",
];

const premiumPlanItems = [
  "Tudo do Plano Básico",
  "Planilha avançada de acompanhamento",
  "Calendário de 30 dias",
  "Checklist diário de hábitos",
  "Guia de organização das refeições",
  "Lista de substituições de alimentos",
  "Guia de preparação da rotina",
  "Rastreador de evolução",
  "Biblioteca de exercícios",
  "Guia de dúvidas frequentes",
  "Mentoria Elite em grupo/comunidade, conforme disponibilidade real",
  "Atualizações do material enquanto o produto estiver ativo",
];

const mentorshipItems = [
  "Comunidade exclusiva",
  "Orientações gerais",
  "Acompanhamento de rotina",
  "Espaço para dúvidas",
  "Desafios de consistência",
  "Conteúdos extras",
];

const faqs = [
  {
    question: "Preciso de academia?",
    answer:
      "Não. O produto foi pensado para treinos que podem ser realizados em casa, considerando os equipamentos disponíveis.",
  },
  {
    question: "Preciso comprar suplementos?",
    answer: "Não. O material trabalha principalmente com alimentos comuns.",
  },
  {
    question: "O produto garante ganho de massa?",
    answer:
      "Não. O material oferece organização e orientação geral; resultados variam de acordo com alimentação, treinamento, descanso, genética e outros fatores.",
  },
  {
    question: "Posso usar para emagrecimento?",
    answer:
      "O conteúdo pode ajudar na organização de uma rotina de exercícios e alimentação, mas não garante emagrecimento.",
  },
  {
    question: "Quando recebo o acesso?",
    answer:
      "Após a confirmação do pagamento, o acesso é disponibilizado conforme o sistema de entrega configurado.",
  },
  {
    question: "Qual plano devo escolher?",
    answer:
      "O Básico oferece os dois materiais principais. O Premium adiciona ferramentas extras e a Mentoria Elite.",
  },
];

function WhatsAppButton({
  href,
  children,
  variant = "hero",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "hero" | "premium" | "dark";
}) {
  return (
    <Button asChild variant={variant} size="xl" className="w-full sm:w-auto">
      <a href={href} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        {children}
      </a>
    </Button>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center reveal-up">
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p> : null}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-3.5" aria-hidden="true" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <main>
        <section className="relative min-h-[92vh] overflow-hidden border-b border-border surface-grid">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--primary)_0%,transparent_36%)] opacity-20" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-20 lg:pt-8">
            <header className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Dumbbell className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase leading-none tracking-[0.14em] text-foreground">
                    Projeto
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Massa em Casa
                  </p>
                </div>
              </div>
              <a
                href="#planos"
                className="hidden text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
              >
                Ver planos
              </a>
            </header>

            <div className="reveal-up lg:col-start-1 lg:row-start-2">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  Acesso digital
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                  Produto fitness premium
                </span>
              </div>
              <h1 className="font-display text-4xl font-black uppercase leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
                Seu treino e sua alimentação organizados em um único plano.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Um método simples para treinar em casa, organizar sua alimentação e criar uma rotina
                mais consistente para apoiar seus objetivos de emagrecimento e ganho de massa.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton href={checkoutLinks.premium} variant="premium">
                  Quero começar agora
                </WhatsAppButton>
                <Button asChild variant="dark" size="xl" className="w-full sm:w-auto">
                  <a href="#produtos">
                    Ver o que recebo
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">
                Acesso imediato • Produto digital • Comece no seu ritmo
              </p>
            </div>

            <div className="reveal-up lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative mx-auto max-w-xl rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
                <img
                  src={heroImage}
                  alt="Mockup do Projeto Massa em Casa em celular e notebook com treino e alimentação organizada"
                  width={1400}
                  height={1100}
                  className="aspect-[1.05/1] w-full rounded-2xl object-cover"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-surface-elevated p-4 shadow-[var(--shadow-soft)] sm:left-8 sm:right-8">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-lg font-black text-primary">01</p>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        Treino
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-primary">02</p>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        Alimentos
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-primary">03</p>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        Rotina
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="reveal-up">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-primary">
                  O problema
                </p>
                <h2 className="font-display text-3xl font-black uppercase leading-tight text-foreground sm:text-5xl">
                  Você não precisa de mais motivação. Precisa de um plano.
                </h2>
                <p className="mt-6 whitespace-pre-line text-base leading-8 text-muted-foreground sm:text-lg">
                  {`Você começa a treinar, mas não sabe exatamente o que fazer.
Fica perdido entre milhares de exercícios na internet.
Não sabe como organizar sua alimentação.
Alguns dias treina, outros dias para.
E depois de algumas semanas sente que não saiu do lugar.`}
                </p>
                <p className="mt-6 text-lg font-extrabold text-foreground">
                  O Projeto Massa em Casa foi criado para simplificar tudo isso.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {problemCards.map((item) => (
                  <div
                    key={item}
                    className="reveal-up rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                  >
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-destructive">
                      <X className="size-5" aria-hidden="true" />
                    </div>
                    <p className="font-bold text-card-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="border-y border-border bg-surface px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="O que você recebe"
              title="Tudo o que você precisa para começar com organização."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="reveal-up rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <ClipboardCheck className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">01</p>
                    <h3 className="text-2xl font-black uppercase text-foreground">
                      Planilha de treino em casa
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-7 text-muted-foreground">
                  Uma planilha prática para organizar seus treinos e acompanhar sua evolução.
                </p>
                <ul className="mt-6 space-y-3">
                  {trainingItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>

              <article className="reveal-up rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Leaf className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">02</p>
                    <h3 className="text-2xl font-black uppercase text-foreground">
                      Lista de alimentos selecionados
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-7 text-muted-foreground">
                  Uma seleção prática de alimentos e opções para facilitar a organização da
                  alimentação de quem busca apoiar seus objetivos de ganho de massa.
                </p>
                <ul className="mt-6 space-y-3">
                  {foodItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>
            </div>
            <div className="reveal-up mt-8 rounded-2xl border border-border bg-secondary p-5 text-sm leading-6 text-muted-foreground">
              Material educativo e de organização. Necessidades nutricionais variam de pessoa para
              pessoa.
            </div>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton href={checkoutLinks.premium} variant="hero">
                Quero começar agora
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Rotina" title="Pare de improvisar. Comece a seguir uma rotina." />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <div className="reveal-up rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-black uppercase text-foreground">
                  <CircleAlert className="size-6 text-destructive" aria-hidden="true" />
                  Antes
                </h3>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <X className="mt-1 size-5 shrink-0 text-destructive" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal-up rounded-3xl border border-primary bg-card p-6 shadow-[var(--shadow-glow)] sm:p-8">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-black uppercase text-foreground">
                  <BadgeCheck className="size-6 text-primary" aria-hidden="true" />
                  Depois
                </h3>
                <ul className="space-y-4">
                  {afterItems.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="border-y border-border bg-surface px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Planos"
              title="Escolha o nível de organização ideal para sua rotina."
              text="Os dois planos foram pensados para quem quer treinar em casa com mais clareza e consistência."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <article className="reveal-up flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="mb-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Plano Básico
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-foreground">
                    Massa em Casa — Básico
                  </h3>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black text-foreground">R$ 19,90</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-3">
                  {basicPlanItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <div className="mt-auto">
                  <WhatsAppButton href={checkoutLinks.basic} variant="hero">
                    Quero o Plano Básico
                  </WhatsAppButton>
                </div>
              </article>

              <article className="reveal-up relative flex flex-col rounded-3xl border border-primary bg-card p-6 shadow-[var(--shadow-glow-strong)] sm:p-8">
                <div className="absolute right-5 top-5 rounded-full bg-premium px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-premium-foreground">
                  Mais completo
                </div>
                <div className="mb-6 pr-24">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Plano Premium
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-foreground">
                    Massa em Casa — Premium
                  </h3>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black text-foreground">R$ 59,90</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-muted-foreground">
                    Recomendado para quem quer mais acompanhamento e ferramentas para manter a
                    consistência.
                  </p>
                </div>
                <ul className="mb-8 space-y-3">
                  {premiumPlanItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <div className="mt-auto">
                  <WhatsAppButton href={checkoutLinks.premium} variant="premium">
                    Quero o Premium
                  </WhatsAppButton>
                </div>
              </article>
            </div>

            <div className="reveal-up mt-8 rounded-3xl border border-warning bg-secondary p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-warning">
                    Condição especial de lançamento
                  </p>
                  <p className="mt-3 max-w-3xl text-lg font-bold leading-7 text-foreground">
                    Essa condição promocional estará disponível durante o período de lançamento.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Oferta de lançamento por tempo limitado, sem contador regressivo artificial.
                  </p>
                </div>
                <Flame className="size-12 shrink-0 text-warning" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="reveal-up">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-primary">
                Diferencial Premium
              </p>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-foreground sm:text-5xl">
                Mentoria Elite
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Para quem quer ir além do material e ter um ambiente de acompanhamento.
              </p>
              <p className="mt-5 rounded-2xl border border-border bg-secondary p-4 text-sm leading-6 text-muted-foreground">
                A mentoria não substitui acompanhamento médico, nutricional ou profissional de
                educação física individualizado.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mentorshipItems.map((item) => (
                <div
                  key={item}
                  className="reveal-up rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                >
                  <Users className="mb-4 size-6 text-primary" aria-hidden="true" />
                  <p className="font-bold text-card-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Dúvidas frequentes" title="FAQ" />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="reveal-up group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-black text-foreground">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      {faq.question}
                    </span>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary bg-card p-6 text-center shadow-[var(--shadow-glow-strong)] sm:p-10 lg:p-14">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <TrendingUp className="size-7" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-foreground sm:text-5xl">
              Comece a organizar sua rotina hoje
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Menos improviso. Mais organização. Mais consistência.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton href={checkoutLinks.basic} variant="hero">
                Quero o Básico — R$ 19,90
              </WhatsAppButton>
              <WhatsAppButton href={checkoutLinks.premium} variant="premium">
                Quero o Premium — R$ 59,90
              </WhatsAppButton>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
                <LockKeyhole className="size-4 text-primary" aria-hidden="true" />
                Compra combinada pelo WhatsApp
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
                <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                Receba conforme o sistema de entrega configurado
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
                <NotebookTabs className="size-4 text-primary" aria-hidden="true" />
                Componentes prontos para inserir dados reais
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
