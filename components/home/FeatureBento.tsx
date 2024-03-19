import { BentoCard, BentoGrid } from "@/components/ui/magicui/bento-grid";
import {
  Boxes,
  UserRoundCog,
  Blocks,
  DraftingCompass,
  Users,
} from "lucide-react";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import bentoLanguagePng from "./img/bento_language.png";
import bentoLanguageDarkPng from "./img/bento_language_dark.png";
import bentoVersionnigPng from "./img/bento_versionning.png";
import bentoVersionnigDarkPng from "./img/bento_versionning_dark.png";
import bentoCollabPng from "./img/bento_collab.png";
import bentoCollabDarkPng from "./img/bento_collab_dark.png";
import Image, { type StaticImageData } from "next/image";
import { useLocalizedMessages } from '@/lib/ParseLang';

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


export function FeatureBento() {
  const messages = useLocalizedMessages();
  if (!messages) return null;

  const features = [
    {
      Icon: Blocks,
      name: messages.home.FeatureBento.feature.extensible.title,
      description: messages.home.FeatureBento.feature.extensible.description,
      href: "/docs/lib-index",
      cta: messages.common.learn_more,
      background: (
        <BentoBgImage
          imgLight={bentoLanguagePng}
          imgDark={bentoLanguageDarkPng}
          alt={messages.home.FeatureBento.feature.extensible.alt}
        />
      ),
      className: "md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-2",
    },
    {
      Icon: Boxes,
      name: messages.home.FeatureBento.feature.packages.title,
      description: messages.home.FeatureBento.feature.packages.description,
      href: "/docs/intro",
      cta: messages.common.learn_more,
      background: (
        <BentoBgImage
          imgLight={bentoVersionnigPng}
          imgDark={bentoVersionnigDarkPng}
          alt={messages.home.FeatureBento.feature.packages.alt}
        />
      ),
      className: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
    },
    {
      Icon: DraftingCompass,
      name: messages.home.FeatureBento.feature.tools.title,
      description: messages.home.FeatureBento.feature.tools.description,
      href: "/docs/intro",
      cta: messages.common.learn_more,
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4",
    },
    {
      Icon: UserRoundCog,
      name: messages.home.FeatureBento.feature.customization.title,
      description: messages.home.FeatureBento.feature.customization.description,
      href: "/docs/configurations/user",
      cta: messages.common.learn_more,
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2",
    },
    {
      Icon: Users,
      name: messages.home.FeatureBento.feature.collaboration.title,
      description: messages.home.FeatureBento.feature.collaboration.description,
      href: "/docs/intro",
      cta: messages.common.learn_more,
      background: (
        <BentoBgImage
          imgLight={bentoCollabPng}
          imgDark={bentoCollabDarkPng}
          alt={messages.home.FeatureBento.feature.collaboration.alt}
        />
      ),
      className: "md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-4",
    },
  ];

  return (
    <HomeSection id="features">
      <Header
        title={messages.home.FeatureBento.title}
        description={messages.home.FeatureBento.description}
        button={{ href: "/docs", text: messages.common.documentation }}
      />
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </HomeSection>
  );
}
