import { Background } from "../Background";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Users } from "./Users";
import { OpenSource } from "./OpenSource";
import { Footer } from "./Footer";
import { FeatureBento } from "./FeatureBento";
import { Integrations } from "./Integrations";
import { FromTheBlog } from "./FromTheBlog";
import { Benefits } from "./Benefits";
import { Clients } from "./Clients";

export const Home = ({ locale }) => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero locale={locale}/>
      {/* <Users /> */}
      <FeatureBento locale={locale}/>
      <Benefits locale={locale}/>
      <Clients locale={locale}/>
      <Integrations locale={locale}/>
      {/* <OpenSource /> */}
      <Pricing locale={locale}/>
      {/* <FromTheBlog locale={lang} /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
    <Background />
  </>
);
