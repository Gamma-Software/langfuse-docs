"use client";
import React from "react";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { AnimatedTooltip } from "../ui/aceternityui/animated-tooltip"
import { Team } from "../ui/shadcn/team"
import { useLocalizedMessages } from '@/lib/ParseLang';


export const Clients = ({locale}) => {
  const messages = useLocalizedMessages(locale);
  if (!messages) return null;
  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title={messages.home.Clients.title}
        description={messages.home.Clients.description}
        button={{
          href: "/docs",
          text: messages.common.documentation,
        }}
      />
      <div className="flex flex-row items-center justify-center mt-10 mb-10 w-full">
        <AnimatedTooltip items={messages.home.Clients.list} />
      </div>

      <Team items={messages.home.Clients.list} />

    </HomeSection>
  );
};
