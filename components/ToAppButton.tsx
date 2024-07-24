import Link from "next/link";
import { Button } from "./ui/shadcn/button";
import { useState, useEffect } from "react";
import { useLocalizedMessages } from '@/lib/ParseLang';

export const ToAppButton = () => {
  const [signedIn, setSignedIn] = useState<"EU" | "US" | false>(false);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Promise.all([
        fetch("https://us.cloud.aiop.io/api/auth/session", {
          credentials: "include",
          mode: "cors",
        }),
        fetch("https://cloud.aiop.io/api/auth/session", {
          credentials: "include",
          mode: "cors",
        }),
      ])
        .then(async ([us, eu]) => {
          return Promise.all([us.json(), eu.json()]).then(([us, eu]) => {
            if (isSignedIn(us)) setSignedIn("US");
            else if (isSignedIn(eu)) setSignedIn("EU");
            else setSignedIn(false);
          });
        })
        .catch(() => setSignedIn(false));
    }
  }, []);
  const messages = useLocalizedMessages();
  if (!messages) return null;
  return (
    <Button size="xs" asChild className="whitespace-nowrap w-auto">
      <Link
        href={
          //signedIn === "US"
          //  ? "https://us.cloud.aiop.io"
          //  //: "https://cloud.aiop.io"
          //  //: "/sign-up"
          //  : "/waiting-list"
          "/waiting-list"
        }
      >
        {signedIn ? messages.app_button.account : messages.app_button.signup}
      </Link>
    </Button>
  );
};

const isSignedIn = (session: Record<string, unknown>) => {
  // check if session is object and has key "user", get typing right
  return session && "user" in session;
};
