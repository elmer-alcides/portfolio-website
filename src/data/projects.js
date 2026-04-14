/**
 * @file projects.js
 * @description Data source for portfolio projects.
 * To add a new project, simply add a new object to this array.
 */

export const projects = [
  {
    id: 1,
    title: "Quantum Cloud",
    category: "Infrastructure",
    year: 2026,
    description: "Plataforma de infraestructura distribuida de nueva generación. Diseñada para escalar de cero a millones de peticiones sin comprometer la latencia ni la resiliencia del sistema.",
    tags: ["Rust", "AWS", "Docker"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Nexus Core",
    category: "Security",
    year: 2025,
    description: "Motor de autenticación Zero-Trust con análisis de comportamiento en tiempo real. Detecta anomalías antes de que se conviertan en brechas de seguridad.",
    tags: ["TypeScript", "Node.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Aura Intelligence",
    category: "AI & ML",
    year: 2026,
    description: "Pipeline de inteligencia artificial para análisis predictivo de datos industriales. Modelos entrenados con más de 10M de puntos de datos para máxima precisión.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80",
    repoUrl: "https://github.com",
    liveUrl: null,
  },
];
