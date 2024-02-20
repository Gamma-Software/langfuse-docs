import { useEffect, useState } from "react";
import { BsGitlab } from "react-icons/bs";

export const GithubMenuBadge = () => (
  <a
    href="https://gitlab.com/Gamma-Software"
    className="group h-8 flex shrink-0 flex-row items-center rounded border border-primary/10 overflow-hidden transition-opacity"
    target="_blank"
    rel="nofollow noreferrer"
  >
    <div className="py-1 px-2 block bg-primary/10">
      <BsGitlab size={22} className="group-hover:opacity-80 opacity-100" />
    </div>
    {/* <div className="py-1 px-2  text-sm group-hover:opacity-80 opacity-100 w-10">
      <StarCount />
    </div> */}
  </a>
);

export const StarCount = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (!stars)
      fetch("https://gitlab.com/leap_tech/aiop-group/aiop")
        .then((data) =>
          data.json().then((json) => setStars(json.star_count))
        )
        .catch((err) =>
          console.error("Error while loading GitLab stars", err)
        );
  }, []);

  return stars ? (
    <span>
      {(stars as number).toLocaleString("en-US", {
        compactDisplay: "short",
        notation: "compact",
      })}
    </span>
  ) : null;
};
