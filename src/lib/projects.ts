export interface Project {
  slug: string;
  index: string;
  /** Nombre partido en líneas para el título grande */
  nameLines: string[];
  shortName: string;
  type: string;
  location: string;
  year: string;
  description: string[];
  planLabels: string[];
  photoCount: number;
  collaborators?: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "casa-doble-epoca",
    index: "01",
    nameLines: ["Casa", "Doble Época"],
    shortName: "Casa Doble Época",
    type: "Residencial · Dúplex",
    location: "Chihuahua, Chih.",
    year: "—",
    description: [
      "La Casa Doble Época es un dúplex de estilo arquitectónico moderno que destaca por su diseño audaz y materiales contemporáneos. El edificio presenta una fachada simétrica, con líneas rectas y volúmenes prominentes que crean una sensación de equilibrio y sofisticación.",
      "El exterior de la casa combina concreto aparente con elementos de piedra y madera, lo que le confiere una apariencia robusta y elegante a la vez. Las paredes de piedra añaden textura y contraste, mientras que los paneles de madera aportan calidez y un toque natural al diseño. Las amplias terrazas con barandales de vidrio ofrecen espacios exteriores funcionales, maximizando las vistas y la luz natural.",
    ],
    planLabels: ["Planta Baja", "Planta Alta", "Sótano"],
    photoCount: 5,
  },
  {
    slug: "residencia-sol",
    index: "02",
    nameLines: ["Residencia", "Sol"],
    shortName: "Residencia Sol",
    type: "Residencial",
    location: "Chihuahua, Chih.",
    year: "—",
    description: [
      "Esta residencia ha buscado añadir a su concepto arquitectónico sensaciones de escalas; se ha construido con un contacto hacia el interior del jardín gracias a los grandes ventanales en las fachadas.",
      "Sus habitaciones han sido pensadas y diseñadas a través de distintas alturas, ventanas y aberturas de luz, lo que ha dado lugar a una gran diversidad de volúmenes que se viven y se relacionan de formas diferentes.",
    ],
    planLabels: ["Planta Arquitectónica Baja", "Planta Arquitectónica Alta"],
    photoCount: 5,
  },
  {
    slug: "clinica-lumen",
    index: "03",
    nameLines: ["Clínica", "Lumen"],
    shortName: "Clínica Lumen",
    type: "Salud · Bienestar",
    location: "Chihuahua, Chih.",
    year: "—",
    description: [
      "LUMEN nace como una respuesta arquitectónica a la creciente necesidad de espacios de atención en salud mental que fomenten el bienestar emocional desde su diseño. El proyecto busca crear un ambiente que transmita seguridad, calma y dignidad, a través de una volumetría clara y materiales sobrios.",
      "El edificio cuenta con dos niveles donde se distribuyen consultorios, salas de terapia, áreas comunes y administrativas, así como un estacionamiento subterráneo para comodidad y seguridad de los usuarios. La planta baja se retrae bajo el volumen principal, generando una terraza cubierta que funciona como transición amable entre el exterior y el interior.",
    ],
    planLabels: ["Planta Arquitectónica Baja", "Planta Arquitectónica Alta"],
    photoCount: 5,
  },
  {
    slug: "plaza-luum",
    index: "04",
    nameLines: ["Plaza", "Luum"],
    shortName: "Plaza Luum",
    type: "Comercial",
    location: "Chihuahua, Chih.",
    year: "—",
    description: [
      "Proyecto comercial desarrollado en colaboración. La plaza se plantea como un espacio abierto que articula circulaciones, comercios y áreas de estancia, con una materialidad sobria que ordena el conjunto.",
    ],
    planLabels: ["Planta Arquitectónica Baja", "Planta Arquitectónica Alta"],
    photoCount: 5,
    collaborators: ["Zamyra Peinado", "Samantha Rivera", "Erika Pérez"],
  },
  {
    slug: "casa-olivo",
    index: "05",
    nameLines: ["Casa", "Olivo"],
    shortName: "Casa Olivo",
    type: "Residencial",
    location: "Chihuahua, Chih.",
    year: "—",
    description: [
      "La vivienda se desarrolla en dos niveles con un carácter sobrio e introspectivo. Su composición combina materiales naturales como concreto aparente y madera, generando un equilibrio entre solidez y calidez.",
      "Las celosías y vanos estratégicos permiten filtrar la luz, aportando privacidad sin perder conexión con el exterior. En su interior, un patio central organiza los espacios y favorece la ventilación e iluminación natural, mientras que la volumetría y los juegos de luces refuerzan su atmósfera contemporánea y elegante.",
    ],
    planLabels: ["Planta Arquitectónica Baja", "Planta Arquitectónica Alta"],
    photoCount: 5,
    collaborators: ["Zamyra Peinado"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length]!,
    next: projects[(i + 1) % projects.length]!,
  };
}
