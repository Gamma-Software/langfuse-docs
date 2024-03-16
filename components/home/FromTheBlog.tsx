import { BlogIndex } from "../blog/BlogIndex";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { useLocalizedMessages } from '@/lib/ParseLang';

export const FromTheBlog = () => {
  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <HomeSection>
      <Header
        title={messages.home.from_the_blog.title}
        description={messages.home.from_the_blog.description}
      />
      <BlogIndex maxItems={3} />
    </HomeSection>
  );
}
