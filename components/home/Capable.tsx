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
import { Radar } from "../ui/aceternityui/Radar";
import { IconContainer, IconContainerHorizontal } from "../ui/aceternityui/IconCntainer";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidFilePdf } from "react-icons/bi";
import { HiDocumentReport, HiOutlineUpload, HiFolderDownload} from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { RiAiGenerate } from "react-icons/ri";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaFolder, FaFileDownload, FaTerminal, FaLaptopCode} from "react-icons/fa";
import { VscCombine } from "react-icons/vsc";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";
import { SiArtifacthub } from "react-icons/si";
import { useMediaQuery } from 'react-responsive';


export function Capable() {
  const messages = useLocalizedMessages();
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' }); // Tailwind's "md" breakpoint is 768px
  if (!messages) return null;

  const router = useRouter();
  const { locale } = router;


  return (
    <HomeSection id="demo">
      <Header
        title={messages.home.Capable.title}
        description={messages.home.Capable.desc}
        button={{ href: "/docs/get-started", text: messages.common.documentation }}
      />
      {isLargeScreen ? <RadarSection messages={messages} /> : <RadarSectionLittleScreen messages={messages}/>}
    </HomeSection>
  );
}

const RadarSection = ({ messages }: any) => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-8 overflow-hidden px-4">
    <div className="mx-auto w-full max-w-xl">
      <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.2}
          text={messages.home.Capable.capable.local_file}
          href={"/docs/declarations/cookbook/local"}
        />
        <IconContainer
          delay={0.5}
          text={messages.home.Capable.capable.local_folder}
          icon={<FaFolder className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/local"}
        />
        <IconContainer
          delay={0.1}
          text={messages.home.Capable.capable.remote_file}
          icon={<FaFileDownload className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/remote"}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.7}
          text={messages.home.Capable.capable.remote_folder}
          icon={<HiFolderDownload className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/remote"}
        />
        <IconContainer
          delay={0.1}
          text={messages.home.Capable.capable.template}
          icon={<LuLayoutTemplate className=" h-8 w-8 text-slate-600" />}
          href={"/docs/integrations/templating/jinja"}
        />
        <IconContainer
          delay={0.2}
          text={messages.home.Capable.capable.file_gen}
          icon={<RiAiGenerate className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/generate_file"}
        />
        <IconContainer
          delay={0.9}
          text={messages.home.Capable.capable.pdf}
          icon={<BiSolidFilePdf className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/parse-to-pdf"}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.5}
          text={messages.home.Capable.capable.combine}
          icon={<VscCombine className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/combine"}
        />
        <IconContainer
          delay={0.3}
          text={messages.home.Capable.capable.unzip}
          icon={<BsFillFileEarmarkZipFill className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/zip"}
        />
        <IconContainer
          delay={0.4}
          text={messages.home.Capable.capable.script}
          icon={<FaTerminal className=" h-8 w-8 text-slate-600" />}
          href={"/docs/aiop-lib/custom-jobs"}
        />
        <IconContainer
          delay={0.7}
          text={messages.home.Capable.capable.installer}
          icon={<FaLaptopCode className=" h-8 w-8 text-slate-600" />}
          href={"/docs/configurations/playbook"}
        />
        <IconContainer
          delay={0.1}
          text={messages.home.Capable.capable.registry}
          icon={<SiArtifacthub className=" h-8 w-8 text-slate-600" />}
          href={"/docs/configurations/playbook#repositories"}
        />
      </div>
    </div>
    <Radar className="absolute -bottom-12" />
    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  )
}



const RadarSectionLittleScreen = ({ messages }: any) => {
  return (
    <div className="flex h-full w-auto flex-col justify-left space-y-8 overflow-hidden px-4">
      <IconContainerHorizontal
          delay={0.0}
          text={messages.home.Capable.capable.local_file}
          href={"/docs/declarations/cookbook/local"}
        />
        <IconContainerHorizontal
          delay={0.1}
          text={messages.home.Capable.capable.local_folder}
          icon={<FaFolder className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/local"}
        />
        <IconContainerHorizontal
          delay={0.2}
          text={messages.home.Capable.capable.remote_file}
          icon={<FaFileDownload className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/remote"}
        />
        <IconContainerHorizontal
          delay={0.3}
          text={messages.home.Capable.capable.remote_folder}
          icon={<HiFolderDownload className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/remote"}
        />
        <IconContainerHorizontal
          delay={0.4}
          text={messages.home.Capable.capable.template}
          icon={<LuLayoutTemplate className=" h-8 w-8 text-slate-600" />}
          href={"/docs/integrations/templating/jinja"}
        />
        <IconContainerHorizontal
          delay={0.5}
          text={messages.home.Capable.capable.file_gen}
          icon={<RiAiGenerate className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/generate_file"}
        />
        <IconContainerHorizontal
          delay={0.6}
          text={messages.home.Capable.capable.pdf}
          icon={<BiSolidFilePdf className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/parse-to-pdf"}
        />
        <IconContainerHorizontal
          delay={0.7}
          text={messages.home.Capable.capable.combine}
          icon={<VscCombine className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/combine"}
        />
        <IconContainerHorizontal
          delay={0.8}
          text={messages.home.Capable.capable.unzip}
          icon={<BsFillFileEarmarkZipFill className=" h-8 w-8 text-slate-600" />}
          href={"/docs/declarations/cookbook/zip"}
        />
        <IconContainerHorizontal
          delay={0.9}
          text={messages.home.Capable.capable.script}
          icon={<FaTerminal className=" h-8 w-8 text-slate-600" />}
          href={"/docs/aiop-lib/custom-jobs"}
        />
        <IconContainerHorizontal
          delay={1.0}
          text={messages.home.Capable.capable.installer}
          icon={<FaLaptopCode className=" h-8 w-8 text-slate-600" />}
          href={"/docs/configurations/playbook"}
        />
        <IconContainerHorizontal
          delay={1.1}
          text={messages.home.Capable.capable.registry}
          icon={<SiArtifacthub className=" h-8 w-8 text-slate-600" />}
          href={"/docs/configurations/playbook#repositories"}
        />
    </div>
  )
}
