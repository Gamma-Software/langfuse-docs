import { getPagesUnderRoute } from "nextra/context";
import { useRouter } from 'next/router'
import Link from "next/link";
import Image from "next/image";
import { type Page } from "nextra";
import { useLocalizedMessages } from '@/lib/ParseLang';


export const BlogIndex = ({ maxItems }: { maxItems?: number }) => {

  const messages = useLocalizedMessages();

  const router = useRouter();
  const changelogPages = getPagesUnderRoute("/blog");
  const pages = changelogPages.filter((page) => page.locale === router.locale) as Array<Page & { frontMatter: any }>;

  if (!messages) return null;
  if (!pages) return null;

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {pages.slice(0, maxItems)
        .map((page) => (
          <Link key={page.route} href={page.route} className="block mb-8 group">
            {page.frontMatter?.ogImage ? (
              <div className="mt-4 rounded relative aspect-video overflow-hidden">
                <Image
                  src={page.frontMatter.ogImage}
                  className="object-cover transform group-hover:scale-105 transition-transform"
                  alt={page.frontMatter?.title ?? "Blog post image"}
                  fill={true}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            ) : null}
            <h2 className="block font-mono mt-8 text-2xl opacity-90 group-hover:opacity-100">
              {page.meta?.title || page.frontMatter?.title || page.name}
            </h2>
            <div className="opacity-80 mt-2 group-hover:opacity-100">
              {page.frontMatter?.description} <span>{messages.blog.read_more}</span>
            </div>
            <div className="flex gap-2 flex-wrap mt-3 items-baseline">
              {page.frontMatter?.tag ? (
                <span className="opacity-80 text-xs py-1 px-2 ring-1 ring-gray-300 rounded group-hover:opacity-100">
                  {page.frontMatter.tag}
                </span>
              ) : null}
              {page.frontMatter?.date ? (
                <span className="opacity-60 text-sm group-hover:opacity-100">
                  {page.frontMatter.date}
                </span>
              ) : null}
              {page.frontMatter?.author ? (
                <span className="opacity-60 text-sm group-hover:opacity-100">
                  {messages.blog.by} {page.frontMatter.author}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
    </div>
  )
};
