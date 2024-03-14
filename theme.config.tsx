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
import { BsDiscord } from "react-icons/bs";
import { GithubMenuBadge } from "./components/GitHubBadge";
import { ToAppButton } from "./components/ToAppButton";

const footerNav = [
  {
    name: "Participer à une démo",
    href: "/schedule-demo",
  },
  {
    name: "Status",
    href: "https://aiop-uptime.pival.fr/status/services",
  },
];

const footerLegalNav = [
  { name: "Security", href: "/security" },
  { name: "Imprint", href: "/imprint" },
  {
    name: "Terms",
    href: "/tos",
  },
  {
    name: "Privacy",
    href: "/privacy",
  },
];

const config: DocsThemeConfig = {
  logo: <Logo />,
  main: MainContentWrapper,
  search: {
    placeholder: "Rechercher...",
  },
  navbar: {
    extraContent: (
      <>
        <a
          className="p-1 hidden sm:inline-block hover:opacity-80"
          target="_blank"
          href="/discord"
          aria-label="aiop Discord"
          rel="nofollow noreferrer"
        >
          <BsDiscord size={24} />
        </a>

        <a
          className="p-1 hidden sm:inline-block hover:opacity-80"
          target="_blank"
          href="https://twitter.com/valentinrudlof1"
          aria-label="X précédement Twitter"
          rel="nofollow noreferrer"
        >
          <svg
            aria-label="X précédement Twitter"
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
    text: "Êditer cette page sur Github",
  },
  feedback: {
    content	: "Question ? Faites nous un retour.",
  },
  toc: {
    backToTop: true,
  },
  docsRepositoryBase: "https://github.com/Gamma-Software/aiop-docs/tree/main",
  footer: {
    text: (
      <div className="flex md:justify-between md:flex-row flex-col items-center flex-1 flex-wrap gap-2 text-sm">
        <div className="md:order-last flex flex-col lg:flex-row gap-y-1 gap-x-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {footerNav.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className="inline rounded-none leading-6 text-primary/80 hover:text-primary whitespace-nowrap"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {/* TODO add legal links
            {footerLegalNav.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className="inline rounded-none leading-6 text-primary/80 hover:text-primary whitespace-nowrap"
              >
                {nav.name}
              </Link>
            ))} */}
            <a
              href="#"
              onClick={() => (window as any).displayPreferenceModal()}
              className="inline rounded-none leading-6 text-primary/80 hover:text-primary"
              id="termly-consent-preferences"
            >
              Préférence des Cookies
            </a>
          </div>
        </div>
        <span className="text-primary/80">
          {new Date().getFullYear()} © Leaptech
        </span>
      </div>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate:
        asPath === "/"
          ? "aiop"
          : asPath.startsWith("/blog/")
          ? "%s - Aiop Blog"
          : asPath.startsWith("/docs/guides/")
          ? "%s - Aiop Guides"
          : "%s - Aiop",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title: pageTitle } = useConfig();
    const url =
      "https://aiop.fr" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const description = frontMatter.description ?? "";

    const title = frontMatter.title ?? pageTitle;

    const section = asPath.startsWith("/docs")
      ? "Docs"
      : asPath.startsWith("/changelog/")
      ? "Changelog"
      : "";

    const image = frontMatter.ogImage
      ? "https://aiop.fr" + frontMatter.ogImage
      : `https://aiop.fr/api/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&section=${encodeURIComponent(section)}`;

    const video = frontMatter.ogVideo
      ? "https://aiop.fr" + frontMatter.ogVideo
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
        <meta name="twitter:site:domain" content="aiop.fr" />
        <meta name="twitter:url" content="https://aiop.fr" />

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
    text: (
      <Link href="/changelog/2024-03-05-beta-phase">
        {/* mobile */}
        <span className="sm:hidden">Aiop est en Bêta →</span>
        {/* desktop */}
        <span className="hidden sm:inline">
          Aiop est en Bêta →
        </span>
      </Link>
    ),
  },
};

export default config;
