import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  Boxes,
  GanttChart,
  GitPullRequestArrow,
  LineChart,
  Users,
  Rocket,
  Cable,
  ThumbsUp,
} from "lucide-react";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import bentoLanguagePng from "./img/bento_language.png";
import bentoLanguageDarkPng from "./img/bento_language_dark.png";
import bentoVersionnigPng from "./img/bento_versionning.png";
import bentoVersionnigDarkPng from "./img/bento_versionning_dark.png";
import bentoCollabPng from "./img/bento_collab.png";
import bentoCollabDarkPng from "./img/bento_collab_dark.png";
import bentoPromptPng from "./img/bento_prompt_management.png";
import bentoPromptDarkPng from "./img/bento_prompt_management_dark.png";
import Image, { type StaticImageData } from "next/image";

const BentoBgImage = ({
  imgLight,
  imgDark,
  alt,
}: {
  imgLight: StaticImageData;
  imgDark: StaticImageData;
  alt: string;
}) => (
  <>
    <Image
      className="opacity-30 top-0 right-0 dark:hidden hidden md:block"
      style={{
        objectFit: "contain",
        objectPosition: "top right",
        maskImage: "linear-gradient(to top, rgba(0,0,0,0) 15%, rgba(0,0,0,1))",
      }}
      src={imgLight}
      fill
      alt={alt}
      sizes="(min-width: 1024px) 33vw, 100vw"
    />
    <Image
      className="opacity-30 top-0 right-0 hidden dark:md:block"
      style={{
        objectFit: "contain",
        objectPosition: "top right",
        maskImage: "linear-gradient(to top, rgba(0,0,0,0) 15%, rgba(0,0,0,1))",
      }}
      src={imgDark}
      fill
      alt={alt}
      sizes="(min-width: 1024px) 33vw, 100vw"
    />
  </>
);

const features = [
  {
    Icon: GanttChart,
    name: "Language universel",
    description: "Déclarez vos resources, configurez et persionalisez le projet, dans un language compréhensible par tous.",
    href: "/docs/languages",
    cta: "En savoir plus",
    background: (
      <BentoBgImage
        imgLight={bentoLanguagePng}
        imgDark={bentoLanguageDarkPng}
        alt="Languages"
      />
    ),
    className: "md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-2",
  },
  {
    Icon: Boxes,
    name: "Gestion des packages",
    description:
      "Gérez et versionnez tous vos packages d'un seul endroit. Suivez les évolutions et debuggez plus facilement.",
    href: "/docs/prompts",
    cta: "En savoir plus",
    background: (
      <BentoBgImage
        imgLight={bentoVersionnigPng}
        imgDark={bentoVersionnigDarkPng}
        alt="Versionning des packages"
      />
    ),
    className: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
  },
  {
    Icon: Rocket,
    name: "Rapidité",
    description:
      "Obtenez rapidement des résultats et générer vos packages en un éclair !",
    href: "/docs",
    cta: "En savoir plus",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4",
  },
  {
    Icon: Cable,
    name: "Personnalisation",
    description:
      "Personnalisez le comportement de Aiop et de vos projets pour correspondre à vos problématiques.",
    href: "/docs",
    cta: "En savoir plus",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2",
  },
  {
    Icon: Users,
    name: "Collaboration",
    description: "Travaillez à plusieurs sur un même projet; à distance. Partagez vos packages, ressources et vos connaissances.",
    href: "/docs/collaboration",
    cta: "En savoir plus",
    background: (
      <BentoBgImage
        imgLight={bentoCollabPng}
        imgDark={bentoCollabDarkPng}
        alt="Personnalisation"
      />
    ),
    className: "md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-4",
  },
];

export function FeatureBento() {
  return (
    <HomeSection id="features">
      <Header
        title="Des fonctionnalitées"
        description="pour tous vos besoins."
        button={{ href: "/docs", text: "Explore docs" }}
      />
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </HomeSection>
  );
}
