import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "../components/Reveal";
import { CheckCircle2, Loader2, Calendar } from "lucide-react";
import community from "../assets/hero-community.jpg";
import education from "../assets/hero-education.jpg";
import stupa from "../assets/hero-stupa.jpg";
import ashoka from "../assets/hero-ashoka.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — DEVANAMPRIYA" },
      { name: "description", content: "Completed, ongoing and upcoming activities of DEVANAMPRIYA NGO." },
      { property: "og:title", content: "Activities — DEVANAMPRIYA" },
      { property: "og:description", content: "Programmes, impact and the road ahead." },
      { property: "og:url", content: "/activities" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: ActivitiesPage,
});

const COMPLETED = [
  { img: community, title: "Annadaan — 50,000 Meals Served", date: "2023 – 2024", text: "A year-long community-kitchen initiative across 6 districts feeding daily-wage families." },
  { img: education, title: "Vidya Daan Scholarship Drive", date: "2023", text: "Sponsored 420 first-generation students through the academic year." },
  { img: stupa, title: "Heritage Walk Series", date: "2022 – 2023", text: "Twelve guided walks at Sanchi, Sarnath and Ajanta — over 1,200 participants." },
];

const ONGOING = [
  { img: education, title: "Dhamma Pathshala", progress: 70, text: "Weekend ethics & Pali classes in 18 rural schools." },
  { img: community, title: "Wellness on Wheels", progress: 45, text: "Mobile health camps reaching remote tribal hamlets." },
  { img: ashoka, title: "Constitution Literacy", progress: 60, text: "Workshops on rights and responsibilities for first-time voters." },
];

const FUTURE = [
  { date: "Q1 2026", title: "Buddhist Studies Library", text: "A reference library and reading room in Nagpur — open to all." },
  { date: "Q2 2026", title: "Youth Leadership Academy", text: "A six-month residential programme in ethics-driven leadership." },
  { date: "Q3 2026", title: "Rural Skill Centres", text: "Three vocational centres for women in Vidarbha." },
  { date: "Q4 2026", title: "International Dhamma Conference", text: "A global gathering of monks, scholars and activists." },
];

function ActivitiesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-[var(--royal-deep)] pt-32 pb-20 text-white">
        <img src={community} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)] to-[var(--royal-deep)]/50" />
        <div className="container-page relative">
          <Reveal>
            <span className="eyebrow">Our work</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">From <span className="text-gradient-gold">vision</span> to action, day by day.</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page">
          <Reveal><SectionHeading eyebrow="Completed" title="Programmes that have already lit the path" /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMPLETED.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-semibold text-[var(--royal-deep)]"><CheckCircle2 className="h-3.5 w-3.5" /> Completed</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.date}</div>
                    <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page">
          <Reveal><SectionHeading eyebrow="Ongoing" title="Walking the path right now" /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ONGOING.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <article className="h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[16/10] overflow-hidden"><img src={o.img} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--royal)]"><Loader2 className="h-3.5 w-3.5 animate-spin" /> In Progress</span>
                    <h3 className="mt-2 text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-muted-foreground"><span>Progress</span><span>{o.progress}%</span></div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-amber-300" style={{ width: `${o.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page">
          <Reveal><SectionHeading eyebrow="Future" title="The road we are paving" /></Reveal>
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-10">
              {FUTURE.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                    <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--royal)] px-3 py-1 text-xs font-semibold text-white"><Calendar className="h-3 w-3" /> {f.date}</span>
                      <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                    </div>
                    <div />
                    <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-[var(--gold)] ring-4 ring-background md:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
