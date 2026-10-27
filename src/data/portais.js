import {
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Dna,
  Globe,
  Landmark,
  Lightbulb,
  MonitorPlay,
  Newspaper,
} from "lucide-react";

export const portais = [
  {
    grupo: 1,
    materia: "Geografia",
    descricao: "Mapas, clima, territórios e o mundo em transformação.",
    Icon: Globe,
    cor: "#16a34a",
    href: "#",
  },
  {
    grupo: 2,
    materia: "Biologia",
    descricao: "Vida, corpo humano, ecologia e genética.",
    Icon: Dna,
    cor: "#65a30d",
    href: "#",
  },
  {
    grupo: 3,
    materia: "História",
    descricao: "Do passado ao presente: fatos, povos e revoluções.",
    Icon: Landmark,
    cor: "#b45309",
    href: "#",
  },
  {
    grupo: 4,
    materia: "Português",
    descricao: "Gramática, literatura, interpretação e redação.",
    Icon: BookOpen,
    cor: "#2563eb",
    href: "#",
  },
  {
    grupo: 5,
    materia: "Filosofia",
    descricao: "Pensadores, ética, lógica e grandes perguntas.",
    Icon: Lightbulb,
    cor: "#7c3aed",
    href: "#",
  },
];

export const recursos = [
  {
    titulo: "Notícias",
    texto: "Novidades de cada disciplina, atualizadas pelas equipes.",
    Icon: Newspaper,
  },
  {
    titulo: "Simulados",
    texto: "Questões com correção automática e resultado na hora.",
    Icon: ClipboardCheck,
  },
  {
    titulo: "Carreiras e estágios",
    texto: "Profissões ligadas a cada matéria e aos cursos do SENAI Valinhos.",
    Icon: Briefcase,
  },
  {
    titulo: "Dicas e vídeos",
    texto: "Orientações de estudo e vídeos educativos para o vestibular.",
    Icon: MonitorPlay,
  },
];
