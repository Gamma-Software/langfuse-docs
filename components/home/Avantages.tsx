import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { HoverEffect } from "../ui/aceternityui/card-hover"

export const projects = [
  {
    title: "Infinité de packages",
    description:
      "Aiop est conçu pour gérer un nombre illimité de packages. Utilisez l’imbrication de packages pour gérer des packages complexes.",
  },
  {
    title: "3 heures -> 5 secondes",
    description:
      "En moyenne, nos utilisateurs réduisent le temps de génération d'un package de 3 heures à seulement 7 secondes avec Aiop.",
  },
  {
    title: "Partage de connaissances",
    description:
      "La collaboration est au coeur même de Aiop. Partagez vos déclarations, packages, ressources et vos connaissances entre équipes. Gagnez en clarté, en productivité et en qualité.",
  },
  {
    title: "Rapidité de debuggage",
    description:
      "Faites confiance à la génération automatique des packages. Réduisez les chances que des erreurs se glissent dans vos packages.",
  },
  {
    title: "Contrôle qualité",
    description:
      "Faites en sorte de ne plus avoir de surprises lors de la génération de vos packages. Aiop vous permet de valider vos ressources avant de les générer.",
  },
  {
    title: "Versionning",
    description:
      "Gérez et versionnez tous vos packages d'un seul endroit. Suivez les évolutions et traçez les. Aiop vous permet également de regénérer des versions antérieures de vos packages.",
  },
];


export const Avantages = () => {
  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title="Pourquoi utiliser Aiop ?"
        description="Aiop vous permet de gagner du temps et de l'argent."
        button={{
          href: "/docs",
          text: "Documentation",
        }}
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

    </HomeSection>
  );
};
