import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { HoverEffect } from "../ui/aceternityui/card-hover"
import { useLocalizedMessages } from '@/lib/ParseLang';


export function Benefits() {
  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <HomeSection className="flex flex-col items-center">
      <Header
        title={messages.home.Benefits.title}
        description={messages.home.Benefits.description}
        button={{
          href: "/docs",
          text: messages.common.documentation,
        }}
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={messages.home.Benefits.list} />
      </div>

    </HomeSection>
  );
};
