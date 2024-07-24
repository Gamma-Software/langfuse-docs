import {
  FiChevronDown,
} from "react-icons/fi";
import { useEffect, useRef } from "react";
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
  const dropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

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
    <div ref={dropdownRef}>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <Button size="lg" variant="cta" onClick={() => setOpen((pv) => !pv)}>
          <GoCommandPalette className="mr-2"/>
          {messages.home.Hero.download}
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top"}}
          className="rounded-lg bg-white shadow-xl absolute mt-1 w-55 overflow-hidden"
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
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-blue-100 text-slate-700 hover:text-blue-500 transition-colors cursor-pointer"
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