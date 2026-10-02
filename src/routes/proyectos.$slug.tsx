import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { adjacentProjects, getProject } from "@/lib/projects";
import { ImageSlot } from "@/components/ImageSlot";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.shortName ?? "Proyecto"} — Jenn Rod, Portafolio de Arquitectura` },
      {
        name: "description",
        content: loaderData?.description[0] ?? "Proyecto de arquitectura de la Arq. Jennifer Rodríguez García.",
      },
      { property: "og:title", content: `${loaderData?.shortName ?? "Proyecto"} — Jenn Rod` },
      {
        property: "og:description",
        content: loaderData?.description[0] ?? "Proyecto de arquitectura de la Arq. Jennifer Rodríguez García.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8">
      <h1 className="project-title text-5xl">Proyecto no encontrado</h1>
      <Link
        to="/"
        className="mt-8 inline-flex border border-primary bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
      >
        Volver al inicio
      </Link>
    </div>
  ),
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const { prev, next } = adjacentProjects(project.slug);
  const photos = Array.from({ length: project.photoCount }, (_, i) => i + 1);

  return (
    <>
      {/* Hero del proyecto */}
      <section>
        <div className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
          <p className="eyebrow mb-4">
            Proyecto {project.index} · {project.type}
          </p>
        </div>
        <div className="relative">
          <ImageSlot
            label={`Imagen hero · ${project.shortName}`}
            className="h-[62vh] min-h-[380px] w-full md:h-[76vh]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent pb-8 pt-24 text-center">
            <h1 className="project-title text-[clamp(2.75rem,9vw,6.5rem)] text-foreground">
              {project.nameLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>

      {/* Ficha + descripción */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-4">
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="eyebrow">Tipología</dt>
                <dd className="text-foreground">{project.type}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="eyebrow">Ubicación</dt>
                <dd className="text-foreground">{project.location}</dd>
              </div>
              {project.collaborators && (
                <div className="border-b border-border pb-3">
                  <dt className="eyebrow mb-2">En colaboración con</dt>
                  <dd className="space-y-1 text-foreground">
                    {project.collaborators.map((name) => (
                      <span key={name} className="block">
                        {name}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="space-y-5 md:col-span-8">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-secondary-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Galería fotográfica */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-3">Registro</p>
              <h2 className="project-title text-3xl md:text-4xl">Fotografías</h2>
            </div>
            <span className="eyebrow hidden md:inline">{project.photoCount} fotos</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <ImageSlot label="Foto 01 · panorámica" className="aspect-[16/9] md:col-span-2" />
            {photos.slice(1).map((n) => (
              <ImageSlot
                key={n}
                label={`Foto 0${n}`}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-10">
            <p className="eyebrow mb-3">Trazo</p>
            <h2 className="project-title text-3xl md:text-4xl">Planos arquitectónicos</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {project.planLabels.slice(0, 2).map((label) => (
              <figure key={label}>
                <ImageSlot label={label} className="aspect-[4/3] bg-card" />
                <figcaption className="eyebrow mt-3 text-center">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Navegación entre proyectos */}
      <nav className="border-t border-border" aria-label="Otros proyectos">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <Link
            to="/proyectos/$slug"
            params={{ slug: prev.slug }}
            className="group border-b border-border px-5 py-10 text-left transition-colors hover:bg-secondary/60 md:border-b-0 md:border-r md:px-8"
          >
            <span className="eyebrow mb-2 block">← Anterior · {prev.index}</span>
            <span className="project-title text-2xl text-foreground transition-colors group-hover:text-muted-foreground md:text-3xl">
              {prev.shortName}
            </span>
          </Link>
          <Link
            to="/proyectos/$slug"
            params={{ slug: next.slug }}
            className="group px-5 py-10 text-right transition-colors hover:bg-secondary/60 md:px-8"
          >
            <span className="eyebrow mb-2 block">Siguiente · {next.index} →</span>
            <span className="project-title text-2xl text-foreground transition-colors group-hover:text-muted-foreground md:text-3xl">
              {next.shortName}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
