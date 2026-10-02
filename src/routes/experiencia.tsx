import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiencia — Jenn Rod, Portafolio de Arquitectura" },
      {
        name: "description",
        content:
          "Experiencia laboral y datos académicos de la Arq. Jennifer Rodríguez García: supervisión de obra, dibujo de planos y formación en arquitectura.",
      },
      { property: "og:title", content: "Experiencia — Jenn Rod, Portafolio de Arquitectura" },
      {
        property: "og:description",
        content:
          "Experiencia laboral y datos académicos de la Arq. Jennifer Rodríguez García: supervisión de obra, dibujo de planos y formación en arquitectura.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperienciaPage,
});

const jobs = [
  {
    period: "12/2025 — Actualidad",
    role: "Auxiliar de residente de obra",
    company: "ANR Diseño y Construcción S.A. de C.V.",
    points: [
      "Superviso y doy seguimiento a cimentación, estructura, albañilería y losas conforme a planos arquitectónicos, estructurales y de instalaciones.",
      "Verifico instalaciones en obra y reviso acabados, documentando observaciones y trabajos por corregir.",
      "Restauración de patrimonio: doy seguimiento a trabajos de restauración y mantenimiento de muros de adobe.",
      "Elaboro y reviso estimaciones de obra, validando avances y trabajos ejecutados.",
      "Genero reportes de avance, incidencias y retrabajos para la residencia.",
      "Gestiono la contratación de personal de obra y la firma de contratos.",
      "Controlo el inventario de materiales: entradas, salidas y existencias.",
    ],
  },
  {
    period: "05/2025 — 12/2025",
    role: "Encargada",
    company: "Mueblería Elba-Zarcito",
    points: [
      "Atención al cliente, ventas de mobiliario, manejo de caja y limpieza.",
    ],
  },
  {
    period: "12/2024 — 03/2025",
    role: "Dibujante de planos",
    company: "AB Arquitectura",
    points: [
      "Revisé y actualicé planos de proyectos arquitectónicos según los requerimientos de cada proyecto.",
      "Preparé material gráfico para la presentación de proyectos.",
      "Coordiné con ingenieros la integración de instalaciones en los proyectos.",
    ],
  },
];

const education = [
  {
    title: "Licenciatura en Arquitectura",
    place: "Instituto Tecnológico Nacional de México — Campus Chihuahua II",
    detail: "Egresada · En proceso de titulación",
  },
  {
    title: "Certificado en Administración de Empresas",
    place: "Preparatoria Maestros Mexicanos 8418",
    detail: "",
  },
];

function ExperienciaPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <p className="eyebrow mb-4">Trayectoria</p>
          <h1 className="project-title text-5xl md:text-7xl">Experiencia</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="eyebrow mb-10">Experiencia laboral</h2>
          <div className="space-y-14">
            {jobs.map((job, i) => (
              <article key={job.role} className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span className="project-title text-3xl text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow mt-2">{job.period}</p>
                </div>
                <div className="md:col-span-9 md:border-l md:border-border md:pl-8">
                  <h3 className="project-title text-2xl md:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {job.company}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-secondary-foreground md:text-base">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-px w-4 shrink-0 bg-line" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="eyebrow mb-10">Datos académicos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <div key={item.title} className="border border-border bg-card p-8">
                <span className="project-title text-3xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="project-title mt-4 text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary-foreground">{item.place}</p>
                {item.detail && <p className="eyebrow mt-3">{item.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="eyebrow mb-4 text-primary-foreground/60">Contacto</p>
          <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-10">
            <a href="mailto:jennrg1209@gmail.com" className="underline underline-offset-4 hover:no-underline">
              jennrg1209@gmail.com
            </a>
            <a href="tel:+526144699668" className="underline underline-offset-4 hover:no-underline">
              614 469 96 68
            </a>
            <span>Chihuahua, Chih.</span>
          </div>
        </div>
      </section>
    </>
  );
}
