"use client";
import React from "react";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { AnimatedTooltip } from "../ui/aceternityui/animated-tooltip"
import { Team } from "../ui/shadcn/team"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Ingénieur logiciel",
    description: "John utilise Aiop pour générer des packages pour son environnement de simulation et de tests. Il sera également amené à modifier le projet pour ajouter ses fonctionnalités en cours de développement.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Testeur",
    description: "Robert se sert d'Aiop pour générer et modifier des packages pour son environnement de simulation et de tests.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Delivery Manager",
    description: "Jane est à l’initiative de ce projet et se sert des modifications apportée pars les développeurs et les testeurs pour générer des packages  .",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Jarvis",
    designation: "Notre CI-CD",
    description: "La CI-CD pourra lancer la génération de packages et faire de l’intégration continue et du déploiement continue.",
    image:
      "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export const Clients = () => {
  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title="Développé par des ingénieurs pour des ingénieurs"
        description='Initialement l’outil est conçu pour générer des packages spécifiquement pour les systèmes embarqués mais ne doit pas se limiter à cela. Aiop est pensé pour et par des ingénieurs logiciels, des testeurs, des delivery managers.'
        button={{
          href: "/docs",
          text: "Documentation",
        }}
      />
      <div className="flex flex-row items-center justify-center mt-10 mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>

      <Team items={people} />

    </HomeSection>
  );
};
