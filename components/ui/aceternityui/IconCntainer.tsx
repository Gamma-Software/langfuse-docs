"use client";
import Link from "next/link";
import React from "react";

import { twMerge } from "tailwind-merge";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

export const IconContainer = ({ icon, text, delay, href }: any) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        "relative z-10 flex flex-col items-center justify-center space-y-2",
      )}
    >
      <Link href={href || "/docs/intro"}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl opacity-80 hover:opacity-100 border border-slate-700 bg-slate-800 shadow-inner">
        {icon || <HiDocumentText className="  h-8 w-8 text-slate-600" />}
      </div>
      </Link>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-slate-400">
          {text || `Local file`}
        </div>
      </div>

    </motion.div>
  );
};

export const IconContainerHorizontal = ({ icon, text, delay, href }: any) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        "relative z-10 flex flex-row items-left justify-left space-y-2"
      )}
    >
      <Link href={href || "/docs/intro"}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner">
        {icon || <HiDocumentText className="  h-8 w-8 text-slate-600" />}
      </div>
      </Link>
      <div className="rounded-md px-2 py-1">
        <div className="text-left text-xs font-bold text-slate-400">
          {text || `Local file`}
        </div>
      </div>
    </motion.div>
  );
};

