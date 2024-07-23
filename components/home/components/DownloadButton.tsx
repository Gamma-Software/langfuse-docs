import {
  FiChevronDown,
} from "react-icons/fi";
import { FaWindows, FaCentos, FaLinux, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { GoCommandPalette } from "react-icons/go";
import { Button } from "../../ui/shadcn/button";
import { useLocalizedMessages } from '@/lib/ParseLang';
import { ConfettiButton } from "../../ui/magicui/confetti";
import { useToast } from "../../ui/shadcn/use-toast"


export function DownloadButton () {
  const [open, setOpen] = useState(false);
  const { toast } = useToast()
  const [copied, setCopied] = useState(false);

  const messages = useLocalizedMessages();
  if (!messages) return null;

  const copyToClipboard = (command) => {
      setOpen((pv) => !pv);
      navigator.clipboard.writeText(command);
      setCopied(true);
      toast({
        description: messages.home.Hero.toaster_download
      })

      // Remettre à false après quelques secondes
      setTimeout(() => {
      setCopied(false);
      }, 1000);
  };

  const gist = 'sh -c "$(curl -fsSL https://gist.githubusercontent.com/Gamma-Software/8d931d0d243cbe650009672d62d90f00/raw/)"'

  return (
    <div>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <Button size="xl" variant="cta" onClick={() => setOpen((pv) => !pv)}>
          <GoCommandPalette className="mr-2"/>
          <span className="flex font-medium text-sm">{messages.home.Hero.download}</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[100%] sm:left-[70%] w-60 overflow-hidden"
        >
          <Option setOpen={() => {copyToClipboard(gist)}} Icon={FaApple} text="MacOS" />
          <Option setOpen={() => {copyToClipboard(gist)}} Icon={FaLinux} text="Ubuntu | Debian GNU/Linux" />
          <Option setOpen={() => {copyToClipboard(gist)}} Icon={FaCentos} text="CentOS | RHEL" />
          <Option setOpen={() => {copyToClipboard(gist)}} Icon={FaWindows} text="Windows" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};