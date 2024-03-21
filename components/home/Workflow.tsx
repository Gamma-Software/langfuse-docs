import Image from "next/image";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import workflowEnDarkPng from "./img/workflow/workflow_en_black.png";
import workflowFrDarkPng from "./img/workflow/workflow_fr_black.png";
import workflowEnLightPng from "./img/workflow/workflow_en_light.png";
import workflowFrLightPng from "./img/workflow/workflow_fr_light.png";
import { useLocalizedMessages } from '@/lib/ParseLang';
import { useRouter } from 'next/router'


export function Workflow() {
  const messages = useLocalizedMessages();
  if (!messages) return null;

  const router = useRouter();
  const { locale } = router;

  return (
    <HomeSection id="features">
      <Header
        title={messages.home.Workflow.title}
        description={messages.home.Workflow.description}
        button={{ href: "/docs/intro", text: messages.common.documentation }}
      />
      {locale === "en" ? (
        <section className="flex flex-col gap-2 pt-8 items-center">
          <Image
            src={workflowEnDarkPng}
            alt="Workflow"
            width={700}
            height={700}
            className="block dark:hidden"
          />
          <Image
            src={workflowEnLightPng}
            alt="Workflow"
            width={700}
            height={700}
            className="hidden dark:block"
          />
        </section>
      ) : (
        <section className="flex flex-col gap-2 pt-8 items-center">
          <Image
            src={workflowFrDarkPng}
            alt="Workflow"
            width={700}
            height={700}
            className="block dark:hidden"
          />
          <Image
            src={workflowFrLightPng}
            alt="Workflow"
            width={700}
            height={700}
            className="hidden dark:block"
          />
        </section>
        )
      }

    </HomeSection>
  );
}
