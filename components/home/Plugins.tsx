import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/magicui/marquee";

import Image, { type StaticImageData } from "next/image";
import pigmentLight from "./img/pigment_light.svg";
import pigmentDark from "./img/pigment_dark.svg";
import alphawatchLight from "./img/alphawatch_light.png";
import alphawatchDark from "./img/alphawatch_dark.png";
import mavaLight from "./img/mava_light.png";
import mavaDark from "./img/mava_dark.png";
import frontifyLight from "./img/frontify_light.svg";
import frontifyDark from "./img/frontify_dark.svg";
import berryLight from "./img/berry_light.png";
import berryDark from "./img/berry_light.png";
import rosLight from "./img/ros-ar21.svg";
import rosDark from "./img/ros-ar21.svg";
import { HomeSection } from "./components/HomeSection";

type Plugin = {
  name: string;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  href: string;
};

const plugins: Plugin[] = [
  {
    name: "ROS",
    lightImage: rosLight,
    darkImage: rosDark,
    href: "https://ros.org",
  }
];

const  PluginsLogo = ({ plugin }: { plugin: Plugin }) => {
  return (
    <a
      href={plugin.href}
      className={cn("relative h-12 sm:h-16 w-20 sm:w-40 cursor-pointer")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={plugin.lightImage}
        alt={plugin.name}
        className="object-contain hidden dark:block grayscale hover:grayscale-0 transition dark:opacity-90 opacity-80 hover:opacity-100"
        sizes="(min-width: 768px) 20vw, 40vw"
        fill={true}
      />
      <Image
        src={plugin.darkImage}
        alt={plugin.name}
        className="object-contain dark:hidden grayscale hover:grayscale-0 transition dark:opacity-90 opacity-80 hover:opacity-100"
        sizes="(min-width: 768px) 20vw, 40vw"
        fill={true}
      />
    </a>
  );
};

export const Plugins = ({ messages }: any) => {
  return (
    <section>
    <h2 className="text-center text-lg font-semibold leading-8 mt-10 mb-6">
      {messages.home.Hero.works_with}
    </h2>
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden">
     {plugins.length === 1 ? (
      <PluginsLogo key={plugins[0].name} plugin={plugins[0]} />
     ) : (
      <Marquee className="[--gap:4rem]">
        {plugins.map((plugin) => (
          <PluginsLogo key={plugin.name} plugin={plugin} />
        ))}
      </Marquee>
    )}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </section>
  );
};
