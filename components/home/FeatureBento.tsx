import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  Boxes,
  GanttChart,
  Workflow,
  UserRoundCog,
  Blocks,
  DraftingCompass,
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
    Icon: Blocks,
    name: "Extensible",
    description:
      "Etendez les fonctionnalités de l’application pour correspondre à vos besoins. Notre équipe est là pour vous accompagner.",
    href: "/docs/lib-index",
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
    href: "/docs",
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
    Icon: DraftingCompass,
    name: "Outils",
    description:
      "Aiop propose une suite d'outils (En expension) pour vous aider à la maintenance, conception et la production des packages.",
    href: "/docs",
    cta: "En savoir plus",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4",
  },
  {
    Icon: UserRoundCog,
    name: "Personnalisation",
    description:
      "Personnalisez le comportement de Aiop et de vos projets pour correspondre à vos problématiques.",
    href: "/docs/configurations/user",
    cta: "En savoir plus",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2",
  },
  {
    Icon: Users,
    name: "Collaboration",
    description: "Travaillez à plusieurs sur un même projet; à distance. Partagez vos packages, ressources et vos connaissances entre équipes. Gagnez en productivité et en qualité.",
    href: "/docs",
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
        title="Vos exigences"
        description="notre priorité"
        button={{ href: "/docs", text: "Documentation" }}
      />
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </HomeSection>
  );
}
