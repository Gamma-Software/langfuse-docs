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
{/*
      <div className="mt-10 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">File</h3>
              <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
              <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
              <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
              <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
              <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
          </div>
      </div> */}

    </HomeSection>
  );
}
