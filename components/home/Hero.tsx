import { useEffect, useState } from 'react';
import Link from "next/link";
import { YCLogo } from "./img/ycLogo";
import { Button } from "../ui/shadcn/button";
import Image from "next/image";
import phLight from "./img/ph_product_of_the_day_light.png";
import phDark from "./img/ph_product_of_the_day_dark.png";
import { CloudflareVideo } from "../Video";
import GoldenKittyAwardSVG from "./img/ph_gke_ai_infra.svg";
import GoldenKittyAwardSVGWhite from "./img/ph_gke_ai_infra_white.svg";
import { HomeSection } from "./components/HomeSection";
import {Meteors} from "../ui/magicui/meteors";
import { log } from 'console';
import { useLocalizedMessages } from '@/lib/ParseLang';
import { DownloadButton } from "./components/DownloadButton";
import { TerminalMockup } from "../ui/shadcn/terminal";
import WordRotate from "../ui/magicui/word-rotate";


export function Hero() {
  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <HomeSection className="mb-10">
      {/* HERO */}
      {/* <Meteors/> */}
      <div className="flex flex-row">
      <div className="flex flex-col items-start justify-center gap-3 md:min-h-[calc(60vh-100px)] pb-12 lg:py-20">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-mono relative z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-300 font-sans font-bold">
          <WordRotate className="text-5xl sm:text-7xl lg:text-8xl font-bold font-mono relative z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-300 font-sans font-bold" words={messages.home.Hero.catch_word}/>
          {messages.home.Hero.quickly}
          <br />
          {messages.home.Hero.package}
        </h1>
        <span className="mt-2 text-primary/70 text-2xl sm:text-2xl lg:text-3xl z-10  md:text-balance font-semibold tracking-wide">
          {messages.home.Hero.desc}
        </span>

        <div className="flex gap-4 flex-wrap items-center justify-center my-4 z-10">
          <DownloadButton/>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/docs/demo">{messages.home.Hero.documentationButton}</Link>
          </Button>
        </div>
      </div>
      <Image src="/demo_transparent.png" alt="Image" className="visible rounded-xl blur-[0.5px] absolute ml-[800px] mt-[100px] opacity-[30%] " height={100} width={1000}/>
      </div>

      {/*<TerminalMockup command={"aiop build"}/>*/}


      {/* Badges */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 items-center justify-items-center my-10 flex-wrap"> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-y-5 gap-x-4 items-center justify-items-center my-10 flex-wrap">
        <Link href="https://github.com/langfuse/langfuse">
          <img
            alt="Langfuse Github stars"
            src="https://img.shields.io/github/stars/langfuse/langfuse?label=langfuse&style=social"
          />
        </Link>
        <a
          href="https://www.ycombinator.com/companies/langfuse"
          className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-primary/70 text-sm">Backed by</div>
          <YCLogo />
        </a>
        <a
          href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={GoldenKittyAwardSVG}
            alt="Langfuse won #1 Golden Kitty in AI Infra Category"
            className="block dark:hidden"
          />
          <Image
            src={GoldenKittyAwardSVGWhite}
            alt="Langfuse won #1 Golden Kitty in AI Infra Category"
            className="hidden dark:block"
          />
        </a>
        <div className="max-w-full w-52 px-1">
          <ProductHuntBadge />
        </div>
      </div>
      {/* <div className="aspect-video bg-blue-200"></div>
      <CloudflareVideo
        videoId="ff57153dd945da86f7549c1f30daaea2"
        aspectRatio={1.71}
        title="What is Langfuse?"
      />
      */}
    </HomeSection>
  );
}

const ProductHuntBadge = () => (
  <a
    href="https://www.producthunt.com/posts/langfuse?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-langfuse"
    target="_blank"
  >
    <Image
      src={phLight}
      alt="Product Hunt - Product of the Day"
      width={250}
      height={54}
      className="block dark:hidden"
    />
    <Image
      src={phDark}
      alt="Product Hunt - Product of the Day"
      width={250}
      height={54}
      className="hidden dark:block"
    />
  </a>
);
