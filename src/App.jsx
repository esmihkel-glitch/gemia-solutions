import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Factory,
  Mail,
  MapPinned,
  Menu,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  X
} from "lucide-react";
import React from "react";
import { useState } from "react";

const mail = "gemiasolutions@gmail.com";
const phone = "+3725588084";
const displayPhone = "+372 558 8084";
const registryCode = "17005131";

const trustItems = [
  { label: "Transport üle Eesti", icon: Truck },
  { label: "Kiire reageerimine", icon: Clock3 },
  { label: "Personaalsed hinnad", icon: CheckCircle2 },
  { label: "B2B fookus", icon: Factory }
];

const services = [
  {
    title: "Pakkematerjalid",
    icon: PackageCheck,
    text: "Käsikile, masinakile, pakketeip, kartongnurgad ja muud pakkematerjalid vastavalt vajadusele.",
    items: ["Käsikile ja masinakile", "Pakketeip", "Kartongnurgad", "Muud lahendused"]
  },
  {
    title: "Kaubaalused",
    icon: Boxes,
    text: "EUR alused, FIN alused, erimõõdulised kaubaalused ning uued ja kasutatud alused suuremates kogustes.",
    items: ["EUR ja FIN alused", "Erimõõdulised alused", "Uued ja kasutatud", "Kogused ettevõtetele"]
  },
  {
    title: "Veokorraldus",
    icon: Truck,
    text: "Veokorraldus Eestis, kaubavedude lahendused ettevõtetele ja transport üle Eesti.",
    items: ["Veod Eestis", "Kaubavedude lahendused", "Tarne planeerimine", "Transport kokkuleppel"]
  }
];

const steps = [
  "Võtate ühendust",
  "Kirjeldate vajadust",
  "Koostame personaalse pakkumise",
  "Korraldame tarne"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-graphite text-ivory">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_15%_8%,rgba(52,211,153,0.16),transparent_28rem),radial-gradient(circle_at_85%_12%,rgba(190,242,100,0.1),transparent_25rem),linear-gradient(135deg,#07100d,#0b1511_45%,#030604)]" />

      <header className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-24px))] -translate-x-1/2 rounded-lg border border-white/10 bg-graphite/78 p-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#avaleht" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-emeraldSoft/40 bg-emeraldSoft/10 text-sm font-black text-emeraldSoft">
              GS
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black sm:text-base">Gemia Solutions</span>
              <span className="block truncate text-xs font-semibold text-white/52">GEMIA OÜ</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {["Teenused", "Lahendus", "Tööprotsess", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ö", "o").replace("õ", "o")}`}
                className="rounded-md px-4 py-3 text-sm font-bold text-white/72 transition hover:bg-white/8 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${phone}`}
              className="rounded-md border border-white/12 px-4 py-3 text-sm font-black text-white transition hover:border-emeraldSoft/50 hover:bg-white/8"
            >
              558 8084
            </a>
            <a
              href={`mailto:${mail}`}
              className="rounded-md bg-emeraldSoft px-4 py-3 text-sm font-black text-graphite transition hover:bg-limeSoft"
            >
              Küsi pakkumist
            </a>
          </div>

          <button
            type="button"
            aria-label="Ava menüü"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/6 text-white lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-2 grid gap-1 rounded-lg border border-white/10 bg-carbon p-2 lg:hidden">
            {[
              ["Teenused", "#teenused"],
              ["Lahendus", "#lahendus"],
              ["Tööprotsess", "#tooprotsess"],
              ["Kontakt", "#kontakt"]
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 font-bold text-white/76 hover:bg-white/8"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="avaleht"
          className="relative grid min-h-screen items-end overflow-hidden border-b border-white/10 px-4 pb-10 pt-32 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,13,0.98),rgba(7,16,13,0.74)_45%,rgba(7,16,13,0.28)_76%,rgba(7,16,13,0.78)),linear-gradient(0deg,rgba(7,16,13,0.94),transparent_52%),url('/assets/gemia-hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(180deg,transparent,#000_18%,#000_86%,transparent)]" />

          <div className="relative mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="min-w-0">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-emeraldSoft">
                Pakkematerjalid · kaubaalused · veokorraldus
              </p>
              <h1 className="max-w-5xl text-balance text-[clamp(2.65rem,8vw,6.8rem)] font-black leading-[0.92] tracking-tight">
                Pakendilahendused ja kaubaalused ettevõtetele üle Eesti
              </h1>
              <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-white/76 sm:text-xl">
                Pakkematerjalid, EUR- ja FIN-alused, erimõõdulised kaubaalused
                ning veokorraldus ühest kohast.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${mail}`}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emeraldSoft px-6 font-black text-graphite shadow-glow transition hover:-translate-y-0.5 hover:bg-limeSoft"
                >
                  Küsi pakkumist
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/8 px-6 font-black text-white transition hover:-translate-y-0.5 hover:border-emeraldSoft/50 hover:bg-white/12"
                >
                  <Phone size={18} />
                  Helista kohe
                </a>
              </div>
            </div>

            <aside className="rounded-lg border border-white/14 bg-graphite/72 p-6 shadow-premium backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 text-emeraldSoft" size={30} />
                <div>
                  <p className="text-3xl font-black">Üks partner</p>
                  <p className="mt-2 leading-7 text-white/68">
                    Pakendamine, alused ja transport planeeritud ühe tervikliku
                    B2B lahendusena.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {["Pakend", "Alused", "Tarne"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/6 p-3 text-center text-sm font-black">
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ label, icon: Icon }) => (
            <div key={label} className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emeraldSoft/35 hover:bg-white/[0.07]">
              <Icon className="mb-5 text-emeraldSoft" size={25} />
              <p className="font-black">{label}</p>
            </div>
          ))}
        </section>

        <section id="teenused" className="mx-auto w-[min(1180px,calc(100%-32px))] py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emeraldSoft">Tooted ja teenused</p>
            <h2 className="text-balance text-[clamp(2rem,5vw,4.4rem)] font-black leading-none">
              Kõik vajalik turvaliseks pakendamiseks ja tarnimiseks
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map(({ title, text, items, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%),rgba(12,25,20,0.84)] p-6 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-emeraldSoft/40"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-lg border border-emeraldSoft/28 bg-emeraldSoft/10 text-emeraldSoft">
                    <Icon size={28} />
                  </span>
                  <ArrowRight className="text-white/28 transition group-hover:translate-x-1 group-hover:text-emeraldSoft" />
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-white/68">{text}</p>
                <ul className="mt-6 grid gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/76">
                      <CheckCircle2 className="shrink-0 text-emeraldSoft" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="lahendus" className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg border border-emeraldSoft/18 bg-[radial-gradient(circle_at_50%_45%,rgba(52,211,153,0.2),transparent_18rem),rgba(10,22,17,0.86)] p-6 shadow-premium">
            <div className="grid min-h-[420px] place-items-center rounded-lg border border-white/10 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:38px_38px]">
              <div className="relative h-72 w-72 max-w-full">
                <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-emeraldSoft/40 bg-graphite text-center text-sm font-black text-emeraldSoft shadow-glow">
                  GEMIA
                </div>
                {[
                  ["Pakend", "left-0 top-6"],
                  ["Alused", "right-0 top-28"],
                  ["Transport", "bottom-0 left-16"]
                ].map(([label, position]) => (
                  <div key={label} className={`absolute ${position} rounded-lg border border-white/12 bg-white/8 px-4 py-3 text-sm font-black backdrop-blur`}>
                    {label}
                  </div>
                ))}
                <div className="absolute left-10 top-20 h-px w-52 rotate-[24deg] bg-gradient-to-r from-transparent via-emeraldSoft to-transparent" />
                <div className="absolute left-12 top-40 h-px w-52 -rotate-[18deg] bg-gradient-to-r from-transparent via-limeSoft to-transparent" />
                <div className="absolute left-24 top-36 h-px w-36 rotate-90 bg-gradient-to-r from-transparent via-emeraldSoft to-transparent" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emeraldSoft">Terviklik lahendus</p>
            <h2 className="text-balance text-[clamp(2rem,5vw,4.4rem)] font-black leading-none">
              Üks partner pakendamisele ja transpordile
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Aitame ettevõtetel leida sobivad pakkematerjalid, kaubaalused ja
              transpordilahendused vastavalt kogustele, kaubale ja tarnevajadusele.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Me ei müü lihtsalt tooteid, vaid aitame ettevõtetel oma kauba
              turvaliselt, kiiresti ja kuluefektiivselt pakendada ning kohale
              toimetada.
            </p>
            <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="font-black text-white">Hinnad kokkuleppel</p>
              <p className="mt-2 leading-7 text-white/64">
                Kõik hinnad on personaalsed. Transport on hinnas vastavalt
                kokkuleppele ja tarnevajadusele.
              </p>
            </div>
          </div>
        </section>

        <section id="tooprotsess" className="mx-auto w-[min(1180px,calc(100%-32px))] py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emeraldSoft">Kuidas töötame</p>
              <h2 className="text-balance text-[clamp(2rem,5vw,4.4rem)] font-black leading-none">
                Selge protsess, kiire teostus
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/64">
              Lihtne päring, täpsustatud vajadus ja personaalne pakkumine enne tarnet.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-emeraldSoft/35">
                <span className="text-sm font-black text-emeraldSoft">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-black">{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="mx-auto mb-6 grid w-[min(1180px,calc(100%-32px))] gap-8 rounded-lg border border-emeraldSoft/22 bg-[linear-gradient(135deg,rgba(52,211,153,0.16),transparent_38%),linear-gradient(315deg,rgba(190,242,100,0.1),transparent_42%),rgba(10,22,17,0.94)] p-6 shadow-premium sm:p-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emeraldSoft">Kontakt ja päring</p>
            <h2 className="text-balance text-[clamp(2rem,5vw,4.2rem)] font-black leading-none">Küsi pakkumist</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Kirjuta või helista ning leiame sobiva lahenduse.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-graphite/70 p-5 backdrop-blur">
            <div className="mb-4 rounded-md border border-white/10 bg-white/6 p-4">
              <p className="text-lg font-black text-white">Gemia Solutions</p>
              <p className="mt-1 text-sm font-bold text-white/64">GEMIA OÜ</p>
              <p className="mt-3 text-sm font-semibold text-white/58">Registrikood: {registryCode}</p>
            </div>
            <div className="grid gap-3">
              <a href={`tel:${phone}`} className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 bg-white/6 p-4 font-black transition hover:border-emeraldSoft/40 hover:bg-white/10">
                <Phone className="shrink-0 text-emeraldSoft" size={20} />
                <span>{displayPhone}</span>
              </a>
              <a href={`mailto:${mail}`} className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 bg-white/6 p-4 font-black transition hover:border-emeraldSoft/40 hover:bg-white/10">
                <Mail className="shrink-0 text-emeraldSoft" size={20} />
                <span className="break-all">{mail}</span>
              </a>
              <div className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 bg-white/6 p-4 font-black">
                <MapPinned className="shrink-0 text-emeraldSoft" size={20} />
                <span>Teeninduspiirkond: üle Eesti</span>
              </div>
              <div className="rounded-md border border-white/10 bg-white/6 p-4 text-sm font-semibold leading-6 text-white/64">
                Teenindame kliente üle Eesti.
              </div>
              <div className="rounded-md border border-white/10 bg-white/6 p-4 text-sm font-semibold leading-6 text-white/64">
                Ettevõte ei ole käibemaksukohustuslane.
              </div>
            </div>

            <a
              href={`mailto:${mail}`}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emeraldSoft px-5 font-black text-graphite transition hover:bg-limeSoft"
            >
              Saada päring
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto grid w-[min(1180px,calc(100%-32px))] gap-3 py-8 text-sm font-semibold text-white/48 md:grid-cols-[1fr_auto] md:items-end">
        <div className="grid gap-1">
          <span className="font-black text-white/72">Gemia Solutions</span>
          <span>GEMIA OÜ · Registrikood: {registryCode}</span>
          <span>Telefon: {displayPhone} · E-post: {mail}</span>
          <span>Teenindame kliente üle Eesti.</span>
          <span>Ettevõte ei ole käibemaksukohustuslane.</span>
        </div>
        <span className="text-left md:text-right">© 2026 Gemia Solutions. Kõik õigused kaitstud.</span>
      </footer>

      <footer className="hidden">
        <span>© {new Date().getFullYear()} Gemia Solutions / GEMIA OÜ</span>
        <span className="flex items-center gap-2">
          <Boxes size={16} />
          Pakkematerjalid · kaubaalused · veokorraldus
        </span>
      </footer>
    </div>
  );
}

export default App;
