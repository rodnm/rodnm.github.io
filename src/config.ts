export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

export const personalInfo = {
    name: "Rodrigo Andres Norabuena Mascaraqui",
    title: "Economista",
    description: "Economista que transforma datos en decisiones, procesos y soluciones con impacto",
    profileImage: "/images/profile.png",
    cv: "/cv.pdf",
    about: [
        "Economista orientado a la ciencia e ingeniería de datos, con experiencia en investigación aplicada, análisis cuantitativo y desarrollo de sistemas de información. He diseñado pipelines ETL, modelos de bases de datos e indicadores institucionales para fortalecer la gestión del conocimiento y la productividad académica.",
        "Me apasiona aprender nuevas tecnologías, construir soluciones reproducibles y conectar la analítica, la automatización y la economía para generar conocimiento útil e impulsar la innovación. Creo en el valor de los datos bien estructurados, la documentación transparente y la creatividad aplicada a la resolución de problemas reales."
    ],
    contact: {
        email: "rodrigo.norabuena@pucp.edu.pe",
        github: "https://github.com/rodnm",
        linkedin: "https://linkedin.com/in/rodnm"
    }
};

export const experiences: Experience[] = [
    {
        title: "Practicante Profesional de Investigación",
        company: "CENTRUM PUCP",
        period: "2025 - Presente",
        description: "Diseñé e implementé modelos de bases de datos relacionales para centralizar y analizar la producción académica, integrando datos de Scopus y Web of Science.\nDesarrollé pipelines ETL en Python para la limpieza, estandarización y carga automatizada en SQL Server, asegurando flujos confiables para dashboards institucionales en Power BI.\n\nConstruí indicadores de productividad en investigación alineados con estándares internacionales (AACSB, EQUIS, BGA, AMBA) para monitorear desempeño académico.\n\nDiseñé e implementé asistentes de voz con IA generativa y modelos de lenguaje (LLMs) para automatizar procesos de evaluación en programas de posgrado.\n\nElaboré documentación técnica reproducible con Markdown y Quarto, fortaleciendo la trazabilidad, estandarización y transferencia de conocimiento dentro del equipo."
    }
];

export const education: Education[] = [
    {
        degree: "Bachiller en Economía",
        institution: "Pontificia Universidad Católica del Perú",
        period: "2018 - 2023",
        description: "Especialización en métodos cuantitativos y economía aplicada."
    }
];

export const projects: Project[] = [
    {
        title: "Análisis de comercio mundial de tierras raras",
        description: "Dashboard que presenta un análisis del comercio mundial de tierras raras para el periodo 1995-2022. La fuente empleada son los datos de Observatory of Economic Complexity (OEC).",
        tags: ["R", "Power BI"],
        link: "https://github.com/rodnm/proyect_powebi_rare-earth",
        image: "/images/rare-earth.png"
    },
    {
        title: "BCRP: Tasa de cambio",
        description: "Web scrapping de datos que se encuentran en el repositorio de Series Estadísticas del BCRP. Estos datos son las series de la Tasa de cambio del dólar - Venta para cualquier año.",
        tags: ["R"],
        link: "https://github.com/rodnm/bcrp-tasa-de-cambio",
        image: "/images/exchange-rate.png"
    },
    {
        title: "Rseries",
        description: "This package contains beauty palettes to personalize plots with the style of series of plataforms like Netflyx, Amazon Prime or local TV from Latin American Countries",
        tags: ["R", "Git", "GitHub"],
        link: "https://github.com/diognes/Rseries",
        image: "/images/rseries.png"
    },
    {
        title: "Portfolio V1",
        description: "Primera versión de mi portafolio personal usando Astro.",
        tags: ["HTML", "Tailwind", "TypeScript"],
        link: "#",
        image: "/images/portfolio-v1.png"
    }
];
