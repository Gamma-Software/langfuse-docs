import Image from "next/image";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import workflowEnDarkPng from "./img/workflow/workflow_en_black.png";
import workflowFrDarkPng from "./img/workflow/workflow_fr_black.png";
import workflowEnLightPng from "./img/workflow/workflow_en_light.png";
import workflowFrLightPng from "./img/workflow/workflow_fr_light.png";
import { useLocalizedMessages } from '@/lib/ParseLang';
import { useRouter } from 'next/router'
import { Button } from "../ui/shadcn/button";
import useDownloader from "react-use-downloader";
import { FolderDown } from "lucide-react";


export function Workflow() {
  const { download, error } = useDownloader();
  const messages = useLocalizedMessages();
  if (!messages) return null;

  const router = useRouter();
  const { locale } = router;

  //const playbookFileUrl = "https://gitlab.com/leap_tech/playbooks/skeleton/-/archive/simplest_version/skeleton-simplest_version.zip";
  //const playbookFilename = "aiop_playbook_ex.zip";
  const playbookFileUrl = "https://gitlab.com/leap_tech/playbooks/skeleton/-/archive/simplest_version/skeleton-simplest_version.zip";
  const playbookFilename = "aiop_playbook_ex.zip";

  const packageFileUrl = "package.zip";
  const packageFilename = "aiop_package_ex.zip";

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

      {/* <div className="flex gap-4 flex-wrap items-center justify-center my-10">
        <Button variant="secondary" size="lg" asChild>
          <button onClick={() => download(playbookFileUrl, playbookFilename)}>
            {messages.home.Workflow.download_playbook} <FolderDown size={14} className="ml-2" />
          </button>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <button onClick={() => download(packageFileUrl, packageFilename)}>
            {messages.home.Workflow.download_package} <FolderDown size={14} className="ml-2" />
          </button>
        </Button>
        {error && <p>possible error {JSON.stringify(error)}</p>}
      </div> */}

    </HomeSection>
  );
}
