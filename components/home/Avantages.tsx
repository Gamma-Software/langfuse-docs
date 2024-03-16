import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { HoverEffect } from "../ui/aceternityui/card-hover"
import { useLocalizedMessages } from '@/lib/ParseLang';


export function Avantages({locale}) {
  const messages = useLocalizedMessages(locale);
  if (!messages) return null;

  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title={messages.home.Avantages.title}
        description={messages.home.Avantages.description}
        button={{
          href: "/docs",
          text: messages.common.documentation,
        }}
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={messages.home.Avantages.list} />
      </div>

    </HomeSection>
  );
};
