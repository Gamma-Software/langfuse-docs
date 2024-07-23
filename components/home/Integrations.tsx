"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/magicui/animated-beam";
import { forwardRef, useRef, type ReactNode } from "react";
import { Code, MessagesSquare } from "lucide-react";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { SiPython } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import WeasyprintLogo from "./img/weasyprint.png";
import JinjaLogo from "./img/jinja.png";
import ArtifactoryLogo from "./img/artifactory.png";
import NexusLogo from "./img/nexus.webp";
import FreemarkerLogo from "./img/freemarker.png";
import AiopLogo from "public/logo_180.png";
import { useLocalizedMessages } from '@/lib/ParseLang';

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    title?: string;
    children?: ReactNode;
  }
>(({ className, children, title }, ref) => {
  return (
    <div className={cn("z-10 flex flex-row items-center gap-4", className)}>
      {title && (
        <span className="w-[4.4rem] md:w-[6rem] text-right text-sm md:text-base">
          {title}
        </span>
      )}
      <div
        ref={ref}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-200 p-3 text-black"
      >
        {children}
      </div>
    </div>
  );
});

export function Integrations () {
  const containerRef = useRef<HTMLDivElement>(null);
  const inPythonRef = useRef<HTMLDivElement>(null);
  const inTypescriptRef = useRef<HTMLDivElement>(null);
  const inFreemarkerRef = useRef<HTMLDivElement>(null);
  const inOpenAiRef = useRef<HTMLDivElement>(null);
  const inJinjaRef = useRef<HTMLDivElement>(null);
  const inWeasyprintRef = useRef<HTMLDivElement>(null);
  const inLangchainRef = useRef<HTMLDivElement>(null);
  const inApiRef = useRef<HTMLDivElement>(null);
  const inOtherRef = useRef<HTMLDivElement>(null);
  const langfuseNodeRef = useRef<HTMLDivElement>(null);
  const out1ref = useRef<HTMLDivElement>(null);
  const out2ref = useRef<HTMLDivElement>(null);
  const out3ref = useRef<HTMLDivElement>(null);
  const out4ref = useRef<HTMLDivElement>(null);
  const out5ref = useRef<HTMLDivElement>(null);
  const out6ref = useRef<HTMLDivElement>(null);
  const out7ref = useRef<HTMLDivElement>(null);
  const out8ref = useRef<HTMLDivElement>(null);
  const out9ref = useRef<HTMLDivElement>(null);

  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <HomeSection>
      <Header
        title={messages.home.Integrations.title}
        description={messages.home.Integrations.description}
        button={{
          href: "/docs/integrations/overview",
          text: messages.common.documentation,
        }}
      />
      <div
        className="relative flex w-full mx-auto max-w-3xl items-center justify-center overflow-hidden rounded border bg-background py-4 px-2 md:p-12"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-2 md:gap-6">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inPythonRef} title="Python SDK">
              <SiPython className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inTypescriptRef} title="Artifactory">
              <img src={ArtifactoryLogo.src} alt="Logo"/>
            </Circle>
            <Circle ref={out1ref} className="hidden">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inOpenAiRef} title="Nexus">
              <img src={NexusLogo.src} alt="Logo"/>
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inFreemarkerRef} title="FMPP">
              <img src={FreemarkerLogo.src} alt="Logo"/>
            </Circle>
            <Circle ref={out2ref} className="hidden">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inWeasyprintRef} title="Weasyprint">
            <img src={WeasyprintLogo.src} alt="Weasyprint"/>
            </Circle>
            <Circle ref={langfuseNodeRef} className="h-16 w-16">
              <img src={AiopLogo.src} alt="Logo" className="-translate-y-1"/>
            </Circle>
            <Circle ref={out3ref} className="hidden">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inJinjaRef} title="Jinja">
            <img src={JinjaLogo.src} alt="Jinja"/>
            </Circle>
            <Circle ref={out3ref} className="hidden">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inLangchainRef} title="PDF">
              <FaFilePdf className="h-6 w-6" />
            </Circle>
            <Circle ref={out3ref} className="hidden">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inApiRef} title="API">
              <Code className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={inOtherRef} title="Yaml, Json">
              <BsThreeDots className="h-6 w-6" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inPythonRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inTypescriptRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inLangchainRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inJinjaRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inWeasyprintRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inOpenAiRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inFreemarkerRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inApiRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inOtherRef}
          toRef={langfuseNodeRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={out1ref}
          toRef={langfuseNodeRef}
          className="hidden"
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={out2ref}
          toRef={langfuseNodeRef}
          className="hidden"
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={out3ref}
          toRef={langfuseNodeRef}
          className="hidden"
          duration={3}
        />
      </div>
    </HomeSection>
  );
}
