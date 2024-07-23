import React from "react";
import {
  DocsThemeConfig,
  Tabs,
  Tab,
  useConfig,
  Steps,
  Card,
  Cards,
} from "nextra-theme-docs";
import { Logo } from "@/components/logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { MainContentWrapper } from "./components/MainContentWrapper";
import { Frame } from "./components/Frame";
//import { BsDiscord } from "react-icons/bs";
import { FaSlack } from "react-icons/fa";
import { GithubMenuBadge } from "./components/GitHubBadge";
import { ToAppButton } from "./components/ToAppButton";
import FooterMenu from "./components/footerMenu";
import { useLocalizedMessages } from '@/lib/ParseLang';

const config: DocsThemeConfig = {
  logo: <Logo />,
  main: MainContentWrapper,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'fr', text: 'Français' },
  ],
  search: {
    placeholder: () => {
      const messages = useLocalizedMessages();
      if (!messages) return null;
      return (
        messages.common.search
      )
    }
  },
  navbar: {
    extraContent: (
      <>
        <a
          className="p-1 hidden sm:inline-block hover:opacity-80"
          target="_blank"
          href="/slack"
          aria-label="aiop Discord"
          rel="nofollow noreferrer"
        >
          <FaSlack size={24} />
        </a>

        <a
          className="p-1 hidden sm:inline-block hover:opacity-80"
          target="_blank"
          href="https://twitter.com/valentinrudlof1"
          aria-label="X or Twitter"
          rel="nofollow noreferrer"
        >
          <svg
            aria-label="X or Twitter"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 22"
          >
            <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
          </svg>
        </a>

        <GithubMenuBadge />

        <ToAppButton />
      </>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  editLink: {
    text: () => {
      const messages = useLocalizedMessages();
      if (!messages) return null;
      if (process.env.NODE_ENV === "development") return messages.common.edit
      return null
    }
  },
  feedback: {
    content: () => {
      const messages = useLocalizedMessages();
      if (!messages) return null;
      return (
        messages.common.question
      )
    }
  },
  toc: {
    backToTop: true,
  },
  docsRepositoryBase: "https://github.com/Gamma-Software/aiop-docs/tree/main",
  footer: {
    text: <FooterMenu />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate:
        asPath === "/"
          ? "aiop"
          : asPath.startsWith("/blog/")
          ? "%s - AIOP Blog"
          : asPath.startsWith("/docs/")
          ? "%s - AIOP Guides"
          : "%s - AIOP",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title: pageTitle } = useConfig();

    const url =
      "https://aiop.io" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const description = frontMatter.description ?? "";

    const title = frontMatter.title ?? pageTitle;

    const section = asPath.startsWith("/docs")
      ? "Docs"
      : asPath.startsWith("/changelog/")
      ? "Changelog"
      : "";

    const image = frontMatter.ogImage
      ? "https://aiop.io" + frontMatter.ogImage
      : `https://aiop.io/api/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&section=${encodeURIComponent(section)}`;

    const video = frontMatter.ogVideo
      ? "https://aiop.io" + frontMatter.ogVideo
      : null;

    return (
      <>
        <meta name="theme-color" content="#000" />
        <meta property="og:url" content={url} />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        {video && <meta property="og:video" content={video} />}

        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="aiop.io" />
        <meta name="twitter:url" content="https://aiop.io" />

        <link
          rel="logo_180"
          sizes="180x180"
          href="/logo_180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo_32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo_16.png"
        />
      </>
    );
  },
  components: {
    Frame,
    Tabs,
    Tab,
    Steps,
    Card,
    Cards,
  },
  banner: {
    key: "beta-banner",
    dismissible: false,
    text: () => {
      const messages = useLocalizedMessages();
      if (!messages) return null;
      return(<Link href="/changelog/2024-03-13-beta-phase">
        {/* mobile */}
        <span className="sm:hidden">{messages.banner}</span>
        {/* desktop */}
        <span className="hidden sm:inline">
         {messages.banner}
        </span>
      </Link>)
    }
  },
};

export default config;
