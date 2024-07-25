import Link from "next/link";
import Image from "next/image";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import tutoEnPng from "./img/tuto_en.png";
import tutoFrPng from "./img/tuto_fr.png";
import { useLocalizedMessages } from '@/lib/ParseLang';
import { useRouter } from 'next/router'
import { Button } from "../ui/shadcn/button";
import useDownloader from "react-use-downloader";
import { FolderDown } from "lucide-react";
import ShinyButton from "../ui/magicui/shiny-button"

export function Demo() {
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
    <HomeSection id="demo">
      <Header
        title={messages.home.Tuto.title}
        description={messages.home.Tuto.desc}
        button={{ href: "/docs/get-started", text: messages.common.documentation }}
      />
      <div className="flex flex-row gap-4 justify-center">
        <ol className="justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    1
                </span>
                <span>
                    <h3 className="font-medium leading-tight">{messages.home.Tuto.step1.title}</h3>
                    <p className="text-sm">{messages.home.Tuto.step1.desc}</p>
                </span>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    2
                </span>
                <span>
                    <h3 className="font-medium leading-tight">{messages.home.Tuto.step2.title}</h3>
                    <p className="text-sm">{messages.home.Tuto.step2.desc}</p>
                </span>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    3
                </span>
                <span>
                    <h3 className="font-medium leading-tight">{messages.home.Tuto.step3.title}</h3>
                    <p className="text-sm">{messages.home.Tuto.step3.desc}</p>
                </span>
            </li>
        </ol>
      </div>

      {locale === "en" ? (
        <section className="flex flex-col gap-2 pt-8 items-center ">
          <Image
            src={tutoEnPng}
            alt="Workflow"
            width={1400}
            height={1400}
            className="w-full rounded-lg shadow-xl shadow-blue-500/50"
          />
        </section>
      ) : (
        <section className="flex flex-col gap-2 pt-8 items-center ">
          <Image
            src={tutoFrPng}
            alt="Workflow"
            width={1400}
            height={1400}
            className="w-full rounded-lg shadow-xl shadow-blue-500/50"
          />
        </section>
        )
      }
      <Link href="https://gitlab.com/leap_tech/playbooks/skeleton/-/archive/simplest_version/skeleton-simplest_version.zip">
        <ShinyButton text="Download the sample" className="mt-8"/>
      </Link>
    </HomeSection>
  );
}
