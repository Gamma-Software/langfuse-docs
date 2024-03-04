import { Background } from "./Background";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Header } from "./Header";

export function ScheduleDemoPage() {
  return (
    <section className="flex flex-col gap-10 w-full min-h-screen items-center py-20">
      <Header
        title="Discutez avec nous"
        description=" Nous pourrons vous faire un démonstration de la solution Aiop et comment elle peut vous aider dans votre entreprise."
        h="h1"
      />

      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            src="https://calendly.com/valentin-rudloff/aiop-demo"
            style={{ width: '80%', height: '80%', border: 'none' }}>
        </iframe>
      </div>
      {/* <ScheduleDemo /> */}
      <Background />
    </section>
  );
}

export function ScheduleDemo() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="valentin-rudloff/aiop-demo"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
