import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { HoverEffect } from "../aceternityui/card-hover"

export const projects = [
  {
    title: "Infinité de packages",
    description:
      "Aiop est conçu pour gérer un nombre illimité de packages. Utilisez l’imbriquation de packages pour gérer des packages complexes.",
    link: "/docs",
  },
  {
    title: "3 heures -> 5 secondes",
    description:
      "C’est le temps que vous économiserez en utilisant Aiop pour générer vos packages à la différence de le faire manuellement. Arrêtez de générer ces packages manuellement, chercher vos artefacts depuis des serveurs et laissez Aiop le faire à votre place. Nos utilisateurs en moyenne réduisent le temps de génération d’un package de 3h (manuellement) à 7 secondes (avec aiop). Ce qui représente une économie de 99.95%.",
    link: "/docs",
  },
  {
    title: "Partage de connaissances",
    description:
      "La collaboration est au coeur même de Aiop. Partagez vos déclarations, packages, ressources et vos connaissances entre équipes. Gagnez en clareté, en productivité et en qualité.",
    link: "/docs",
  },
  {
    title: "Rapidité de debuggage",
    description:
      "Faites confiance à la génération automatique des packages. Réduisez les chances que des erreurs se glissent dans vos packages.",
    link: "/docs",
  },
  {
    title: "Contrôle qualité",
    description:
      "Faites en sorte de ne plus avoir de surprises lors de la génération de vos packages. Aiop vous permet de valider vos resources avant de les générer.",
    link: "/docs",
  },
  {
    title: "Versionning",
    description:
      "Gérez et versionnez tous vos packages d'un seul endroit. Suivez les évolutions et traçez les. Aiop vous permet également de regénérer des versions antérieures de vos packages.",
    link: "/docs",
  },
];


export const Avantages = () => {
  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title="Pourquoi utiliser Aiop ?"
        description="Aiop vous permet de gagner du temps et de l'argent."
        className="mb-0"
      />
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

    </HomeSection>
  );
};
