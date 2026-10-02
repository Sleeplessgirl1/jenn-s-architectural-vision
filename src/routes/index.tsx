import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jenn Rod — Portafolio de Arquitectura" },
      {
        name: "description",
        content:
          "Portafolio de la Arq. Jennifer Rodríguez García: Casa Doble Época, Residencia Sol, Clínica Lumen, Plaza Luum y Casa Olivo.",
      },
      { property: "og:title", content: "Jenn Rod — Portafolio de Arquitectura" },
      {
        property: "og:description",
        content:
          "Portafolio de la Arq. Jennifer Rodríguez García: Casa Doble Época, Residencia Sol, Clínica Lumen, Plaza Luum y Casa Olivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [first, second, ...rest] = projects as [
    (typeof projects)[number],
    (typeof projects)[number],
    ...(typeof projects)[number][],
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
          <p className="eyebrow mb-6">Portafolio · Arquitectura</p>
          <h1 className="project-title text-[clamp(3rem,10vw,7.5rem)] text-foreground">
            <span className="block">Arq. Jennifer</span>
            <span className="block text-muted-foreground">Rodríguez García</span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="text-base leading-relaxed text-secondary-foreground md:col-span-7 md:text-lg">
              Hola, soy Jenn. Arquitecta con experiencia en supervisión y
              seguimiento de obra, revisión e interpretación de planos y control
              de calidad en procesos constructivos. Me caracterizo por ser una
              persona organizada, responsable y observadora, con iniciativa para
              resolver problemas y dar seguimiento a las actividades de obra.
            </p>
            <div className="md:col-span-5 md:border-l md:border-border md:pl-8">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between gap-4">
                  <span className="eyebrow">Base</span>
                  <span className="text-foreground">Chihuahua, Chih.</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="eyebrow">Correo</span>
                  <a
                    href="mailto:jennrg1209@gmail.com"
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    jennrg1209@gmail.com
                  </a>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="eyebrow">Teléfono</span>
                  <a
                    href="tel:+526144699668"
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    614 469 96 68
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Índice de proyectos */}
      <section id="proyectos" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-3">Índice</p>
              <h2 className="project-title text-4xl md:text-5xl">Proyectos</h2>
            </div>
            <span className="eyebrow hidden md:inline">05 obras seleccionadas</span>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            <div className="md:col-span-2">
              <ProjectCard project={first} large />
            </div>
            <ProjectCard project={second} />
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Sobre mí</p>
            <h2 className="project-title text-4xl md:text-5xl">Jennifer Rod G.</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-secondary-foreground md:text-lg">
              Cuento con facilidad para trabajar en equipo, aprender nuevos
              procesos y adaptarme a diferentes necesidades dentro del proyecto.
              Mi práctica se centra en la obra: cimentación, estructura,
              albañilería, instalaciones y acabados, así como en la restauración
              de patrimonio y el control de materiales.
            </p>
            <a
              href="/experiencia"
              className="mt-8 inline-flex items-center justify-center border border-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver experiencia completa
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20 border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-24">
          <p className="eyebrow mb-4 text-primary-foreground/60">Contacto</p>
          <h2 className="project-title text-4xl md:text-6xl">Trabajemos juntos</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-10">
            <a
              href="mailto:jennrg1209@gmail.com"
              className="underline underline-offset-4 hover:no-underline"
            >
              jennrg1209@gmail.com
            </a>
            <span className="hidden h-px w-8 bg-primary-foreground/40 sm:block" />
            <a href="tel:+526144699668" className="underline underline-offset-4 hover:no-underline">
              614 469 96 68
            </a>
            <span className="hidden h-px w-8 bg-primary-foreground/40 sm:block" />
            <span>Chihuahua, Chih.</span>
          </div>
        </div>
      </section>
    </>
  );
}
