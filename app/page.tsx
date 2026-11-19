
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "HAVAC — Concept One",
    url: "https://wondrous-valkyrie-3fecdc.netlify.app/concept-1",
  },
  {
    number: "02",
    name: "HAVAC — Concept Two",
    url: "https://wondrous-valkyrie-3fecdc.netlify.app/concept-2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f3] text-[#332722]">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e9dfd6] bg-[#faf7f3]/90 px-6 py-5 backdrop-blur-md md:px-16">
        <a href="#" className="text-2xl tracking-[0.3em] text-[#a77c70]">
          ROSEA
        </a>

        <div className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#work" className="transition hover:text-[#b58b7e]">Selected work</a>
          <a href="#services" className="transition hover:text-[#b58b7e]">Services</a>
          <a href="#about" className="transition hover:text-[#b58b7e]">About</a>
          <a href="#contact" className="transition hover:text-[#b58b7e]">Contact</a>
        </div>

        <a
          href="mailto:rosea.digitalstudio@gmail.com"
          className="border border-[#b99587] px-5 py-3 text-xs uppercase tracking-widest transition hover:bg-[#b99587] hover:text-white"
        >
          Let's talk
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#ead5cd] px-6 py-24 md:px-20">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f8e9e3] via-[#f8e9e3]/90 to-[#f8e9e3]/10" />

        <div className="relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-xs uppercase tracking-[0.4em] text-[#a77c70]"
          >
            Independent creative web studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-6xl font-light leading-[1.08] tracking-tight md:text-8xl"
          >
            Digital experiences,
            <span className="block font-serif italic text-[#b58b7e]">
              beautifully made.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 max-w-md text-base leading-8 text-[#66534c]"
          >
            We create thoughtful websites and digital experiences that bring brands to life.
          </motion.p>

          <a
            href="#work"
            className="mt-12 inline-block border-b border-[#a77c70] pb-2 text-xs uppercase tracking-[0.25em] transition hover:text-[#b58b7e]"
          >
            Explore selected work ↓
          </a>
        </div>

        <div className="absolute bottom-8 right-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white md:flex">
          ↓
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="px-6 py-24 md:px-16">

        <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a77c70]">
              01 / Portfolio
            </p>
            <h2 className="font-serif text-5xl md:text-6xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#80716a]">
            Independent design concepts exploring the digital identity of HAVAC.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-serif text-2xl">
                  {project.name}
                </h3>
                <span className="text-xs tracking-widest text-[#a77c70]">
                  {project.number} / 02
                </span>
              </div>

              <div className="overflow-hidden border border-[#e6dcd4] bg-white shadow-[0_20px_60px_rgba(80,50,40,0.08)]">
                <div className="flex h-9 items-center gap-2 border-b border-[#eee5de] bg-[#f5f0eb] px-4">
                  <span className="h-2 w-2 rounded-full bg-[#d6aaa0]" />
                  <span className="h-2 w-2 rounded-full bg-[#e5c9a9]" />
                  <span className="h-2 w-2 rounded-full bg-[#b7c2a9]" />
                  <span className="ml-4 text-[10px] text-[#9b8b82]">
                    HAVAC — Website concept
                  </span>
                </div>

                <iframe
                  src={project.url}
                  title={project.name}
                  loading="lazy"
                  className="h-[650px] w-full bg-white"
                />
              </div>

              <div className="mt-5 flex justify-end">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[#a77c70] pb-2 text-xs uppercase tracking-[0.2em] transition hover:text-[#b58b7e]"
                >
                  Explore full website ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#f0e8e1] px-6 py-24 md:px-16"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a77c70]">
          02 / What we do
        </p>

        <h2 className="mb-14 font-serif text-5xl">
          Thoughtful design.
          <br />
          Purposeful digital presence.
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["01", "Website design", "Elegant and modern digital experiences."],
            ["02", "E-commerce", "Online stores designed around the customer."],
            ["03", "Brand presence", "A consistent visual identity across the web."],
          ].map(([number, title, description]) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-t border-[#cdbbb0] pt-6"
            >
              <span className="text-xs text-[#a77c70]">{number}</span>
              <h3 className="my-5 font-serif text-3xl">{title}</h3>
              <p className="text-sm leading-7 text-[#80716a]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 text-center md:px-16">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#a77c70]">
          03 / About ROSEA
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl font-serif text-5xl leading-tight md:text-6xl"
        >
          Design with intention, created to make an impression.
        </motion.h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#80716a]">
          ROSEA Studio is an independent creative studio exploring the
          intersection of visual design, technology and meaningful digital
          experiences.
        </p>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="bg-[#332722] px-6 py-20 text-[#faf7f3] md:px-16"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d4aaa0]">
          04 / Get in touch
        </p>

        <h2 className="font-serif text-5xl md:text-7xl">
          Have a vision?
        </h2>

        <a
          href="mailto:rosea.digitalstudio@gmail.com"
          className="mt-10 inline-block border-b border-[#d4aaa0] pb-3 text-sm tracking-widest transition hover:text-[#d4aaa0]"
        >
          rosea.digitalstudio@gmail.com ↗
        </a>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-7 text-xs text-white/60">
          <span>ROSEA Studio © 2026</span>
          <span>Digital Design & Web Experiences</span>
        </div>
      </footer>
    </main>
  );
}
