import Image from "next/image";
import { useRouter } from "next/router";
import { Page } from "nextra";
import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { Author } from "../Authors";
import { Video } from "../Video";
import { useLocalizedMessages } from '@/lib/ParseLang';

export const ChangelogHeader = () => {
  const changelogPages = getPagesUnderRoute("/changelog");

  const router = useRouter();
  const page = changelogPages.find((page) => page.route === router.asPath && (page as any).locale === router.locale) as Page & { frontMatter: any };
  if (!page) return null;

  const { title, description, ogImage, ogVideo, gif, date, author } = page.frontMatter;

  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <div className="md:mt-10 flex flex-col gap-10">
      <Link
        href={`/changelog${
          page.route ? "#" + page.route.replace("/changelog", "") : ""
        }`}
        className="md:mb-10"
      >
        {messages.changelog.back}
      </Link>

      <div>
        <div className="text-lg text-primary/60 mb-3">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </div>
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl text-pretty font-mono">
              {title}
            </h1>
          </div>
          <Author author={author} />
        </div>
      </div>

      {ogVideo ? (
        <Video src={ogVideo} gifStyle />
      ) : ogImage ? (
        <Image
          src={gif ?? ogImage}
          alt={title}
          width={1200}
          height={630}
          className="rounded"
          unoptimized={
            page.frontMatter.gif !== undefined ||
            page.frontMatter.ogImage?.endsWith(".gif")
          }
        />
      ) : null}

      <p className="text-[17px]">{description}</p>
    </div>
  );
};
