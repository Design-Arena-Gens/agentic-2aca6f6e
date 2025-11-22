import Image from "next/image";

const sellingPoints = [
  {
    title: "Handpicked in Mithila",
    description:
      "Small-batch harvests from certified ponds in Darbhanga & Madhubani, sorted at source for the fluffiest pop.",
  },
  {
    title: "Stone-Popped Crunch",
    description:
      "Traditional iron wok roasting over a cow-dung hearth retains native sweetness while locking in protein.",
  },
  {
    title: "Slow Spice Infusions",
    description:
      "Small-batch spice oils, sun-dried, then folded gently into each batch for evenly coated, fragrant makhana.",
  },
];

const flavors = [
  {
    name: "Classic Mithila Ghee",
    description:
      "Golden ghee drizzle with salted jaggery dust. A warm, buttery finish that tastes like nostalgia.",
    badge: "Bestseller",
    tastingNotes: ["Toasted caramel", "Brown butter", "Mineral salt"],
  },
  {
    name: "Spiced Maithili Chutney",
    description:
      "A tangy blend of stone-ground tomato, amchoor, and black salt. Tart, savory, and highly snackable.",
    badge: "Limited Harvest",
    tastingNotes: ["Solar-dried tomato", "Black salt", "Mustard microburst"],
  },
  {
    name: "Paan & Pistachio Bliss",
    description:
      "Leafy betel sweetness balanced with pistachio crunch. Dessert-ready foxnuts for festive platters.",
    badge: "Festive Drop",
    tastingNotes: ["Fresh paan leaf", "Roasted pista", "Makhana cream"],
  },
];

const stats = [
  { value: "18+", label: "heritage ponds in our network" },
  { value: "72 hrs", label: "farm-to-pack freshness window" },
  { value: "12g", label: "protein per artisanal pouch" },
  { value: "0%", label: "refined sugar & preservatives" },
];

const rituals = [
  {
    phase: "Sourcing Covenant",
    detail:
      "Women-led cooperatives harvest dawn lotus pods, securing premium Grade-A seeds before sunrise.",
  },
  {
    phase: "Charcoal Wok Pop",
    detail:
      "Lotus seeds pop inside cast-iron kadhais over slow charcoal, achieving pillowy centers without oil.",
  },
  {
    phase: "Heritage Spice Brine",
    detail:
      "Micro batches tumble in kadhais with clarified ghee, hand-pounded spices, and smoked salts from Bhagalpur.",
  },
  {
    phase: "Eco-Pack Promise",
    detail:
      "Compostable resealable pouches with moisture-lock technology to keep your makhana airy and crisp.",
  },
];

const testimonials = [
  {
    quote:
      "Finally a makhana that tastes like the ones we carried back from Darbhanga. The caramelized ghee is unreal.",
    name: "Nandini Prasad",
    role: "Founder, Bhojan Journal",
  },
  {
    quote:
      "Each batch arrives lighter and crunchier than the last. Mithila Makhana has set the benchmark nationally.",
    name: "Chef Armaan Singh",
    role: "Head Chef, Patna Social",
  },
];

const faqs = [
  {
    q: "What makes Mithila makhana different from regular foxnuts?",
    a: "Our foxnuts are pond-grown in the Mithila region and hand-sorted for size and moisture. They are stone-popped without oil, delivering a lighter, artisan-grade crunch.",
  },
  {
    q: "How long does a pouch stay fresh after opening?",
    a: "Reseal the compostable pouch tightly and store in a cool corner. Each pack stays crisp for 25 days after opening thanks to moisture-lock natural starch coating.",
  },
  {
    q: "Do you supply for gifting or bulk buys?",
    a: "Yes! Custom gift hampers and corporate tastings are available. Write to hello@mithilamakhana.in for curated menus and pricing.",
  },
];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden px-6 py-12 sm:px-10 lg:px-16">
      <div className="grain-overlay" />
      <header className="section-shell relative w-full max-w-6xl overflow-hidden px-6 py-12 sm:px-12 lg:flex lg:items-center lg:gap-12 lg:px-16 lg:py-16">
        <div className="ornament -top-24 -left-24 bg-[radial-gradient(circle_at_center,_rgba(223,163,85,0.45),_transparent_70%)]" />
        <div className="ornament-ring -top-28 -left-28" />
        <div className="relative z-10 flex flex-1 flex-col gap-8 text-center lg:text-left">
          <span className="badge self-center lg:self-start">
            Slow-crafted in Mithila • 100% natural
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Mithila Makhana
            <span className="block text-amber-700">
              Puffier. Purist. Proudly Bihar.
            </span>
          </h1>
          <p className="text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Discover foxnuts kissed by Maithili heritage. We nurture every pod
            through pond-to-pack rituals—charcoal popping, hand-tossed spice
            infusions, and eco-conscious sealing so every bite crackles with
 noor and nutrition.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-rose-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:shadow-xl hover:shadow-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              Shop the Harvest
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/70 px-7 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              Meet Our Process
            </a>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-amber-200/70 bg-white/50 px-6 py-5 text-left shadow-sm shadow-amber-100/30"
              >
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-700/70">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold text-neutral-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mt-12 flex flex-1 justify-center lg:mt-0">
          <div className="absolute -top-6 -right-6 hidden h-16 w-16 rounded-full border border-amber-500/40 lg:block" />
          <div className="relative flex items-center justify-center rounded-[48px] border border-amber-200/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(194,104,36,0.18)] backdrop-blur-sm">
            <Image
              src="/images/makhana-bowl.svg"
              alt="Artisanal Mithila Makhana bowl"
              width={420}
              height={360}
              className="h-auto w-full max-w-[360px] lg:max-w-[420px]"
              priority
            />
          </div>
        </div>
      </header>

      <section className="mt-16 w-full max-w-6xl space-y-8 rounded-[48px] bg-white/80 px-6 py-12 shadow-[0_20px_60px_rgba(201,133,64,0.12)] ring-1 ring-white/70 backdrop-blur xl:space-y-10 xl:px-12 xl:py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="badge">Why makhana devotees love us</span>
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Crunch engineered with care
          </h2>
          <p className="max-w-3xl text-pretty text-neutral-600 sm:text-lg">
            Our artisans blend heritage rituals with clean-label science so you
            can snack guilt-free. Every handful celebrates Mithila&apos;s soil,
            ponds, and people.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {sellingPoints.map((point) => (
            <article
              key={point.title}
              className="section-shell flex h-full flex-col gap-4 rounded-3xl border border-amber-200/50 px-6 py-8 text-left transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-200/40"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="shop"
        className="relative mt-20 w-full max-w-6xl overflow-hidden rounded-[56px] border border-amber-200/70 bg-gradient-to-br from-white/85 via-rose-50/60 to-amber-50/70 px-6 py-12 shadow-[0_28px_80px_rgba(200,120,50,0.15)] ring-1 ring-white/70 backdrop-blur"
      >
        <Image
          src="/patterns/mithila-border.svg"
          alt="Mithila pattern"
          width={840}
          height={60}
          className="absolute left-1/2 top-0 w-[160%] -translate-x-1/2"
        />
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="badge">The harvest lineup</span>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Flavor flights from pond to pouch
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-neutral-600 sm:text-lg">
              Choose your mood—sweet, tangy, or indulgently luxe. Each pouch
              ships in nitrogen-flushed compostable packs for lasting crunch.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {flavors.map((flavor) => (
              <div
                key={flavor.name}
                className="flex h-full flex-col justify-between rounded-[40px] border border-white/80 bg-white/90 p-8 shadow-lg shadow-amber-100/30"
              >
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {flavor.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {flavor.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {flavor.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-amber-700">
                  {flavor.tastingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
                      {note}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/70">
                  Add to pouch
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="story"
        className="mt-20 w-full max-w-6xl rounded-[56px] border border-amber-200/70 bg-white/75 px-6 py-12 shadow-[0_24px_70px_rgba(210,120,40,0.12)] ring-1 ring-white/70 backdrop-blur"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1 space-y-5">
            <span className="badge">Crafted the Maithili way</span>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Rituals that protect the pond and the people
            </h2>
            <p className="text-pretty text-neutral-600 sm:text-lg">
              We partner exclusively with women-led producers who steward Mithila&apos;s
              wetlands. Every purchase funds clean water initiatives and post-harvest
              training to keep this slow craft alive.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border border-amber-200/80 px-4 py-2">
                Fair-trade sourced
              </span>
              <span className="rounded-full border border-amber-200/80 px-4 py-2">
                Carbon-neutral logistics
              </span>
              <span className="rounded-full border border-amber-200/80 px-4 py-2">
                NABL-certified labs
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {rituals.map((step, index) => (
              <div
                key={step.phase}
                className="rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm shadow-amber-100/50"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {step.phase}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 w-full max-w-6xl rounded-[52px] border border-amber-200/60 bg-white/85 px-6 py-12 shadow-[0_20px_60px_rgba(200,110,40,0.12)] ring-1 ring-white/70 backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <span className="badge">Press & patrons</span>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Voices that vouch for our crunch
          </h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="relative rounded-[40px] border border-amber-200/60 bg-gradient-to-br from-white via-white to-amber-50/60 p-8 text-left shadow-md shadow-amber-100/40"
            >
              <span className="absolute -top-6 left-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-2xl text-white">
                “
              </span>
              <p className="text-base leading-relaxed text-neutral-700">
                {item.quote}
              </p>
              <footer className="mt-6">
                <div className="text-sm font-semibold text-neutral-900">
                  {item.name}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-amber-600">
                  {item.role}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-20 w-full max-w-6xl rounded-[52px] border border-amber-200/60 bg-white/80 px-6 py-12 shadow-[0_18px_50px_rgba(200,100,40,0.1)] ring-1 ring-white/70 backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <span className="badge">Curious?</span>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Frequently asked flavour musings
          </h2>
        </div>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-3xl border border-amber-200/60 bg-white/90 p-6 shadow-sm shadow-amber-100/40 transition hover:-translate-y-1 hover:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-neutral-900">
                {faq.q}
                <span className="text-amber-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative mt-20 mb-10 w-full max-w-6xl overflow-hidden rounded-[56px] bg-neutral-900 px-6 py-16 text-white shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,196,126,0.35),_transparent_55%)]" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <Image
            src="/brand/lotus.svg"
            alt="Lotus emblem"
            width={80}
            height={80}
          />
          <h2 className="text-pretty text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Host a Mithila tasting at home
          </h2>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-amber-100">
            Pair our foxnuts with kadak chai, Maithili chutneys, or even a glass
            of sparkling rosé. We ship curated tasting kits with pairing cards,
            recipe cards, and handcrafted bowls from Madhubani potters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@mithilamakhana.in"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Plan a private tasting
            </a>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
