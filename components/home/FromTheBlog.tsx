import { BlogIndex } from "../blog/BlogIndex";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";

export const FromTheBlog = () => (
  <HomeSection>
    <Header
      title="Blog"
      description="Voici les derniers articles du blog. Découvrez les dernières nouveautés, les astuces et les conseils de notre équipe."
    />
    <BlogIndex maxItems={3} />
  </HomeSection>
);
