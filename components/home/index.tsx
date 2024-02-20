import { Background } from "../Background";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Users } from "./Users";
import { OpenSource } from "./OpenSource";
import { Footer } from "./Footer";
import { FeatureBento } from "./FeatureBento";
import { Integrations } from "./Integrations";
import { FromTheBlog } from "./FromTheBlog";

export const Home = () => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero />
      <Users />
      <FeatureBento />
      <Integrations />
      {/* <OpenSource /> */}
      <Pricing />
      <FromTheBlog />
      {/* <CTA /> */}
      <Footer />
    </main>
    <Background />
  </>
);
