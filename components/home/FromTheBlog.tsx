import { BlogIndex } from "../blog/BlogIndex";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";
import { useLocalizedMessages } from '@/lib/ParseLang';

export const FromTheBlog = ({locale}) => {
  const messages = useLocalizedMessages(locale);
  if (!messages) return null;

  return (
    <HomeSection>
      <Header
        title={messages.Home.FromTheBlog.title}
        description={messages.Home.FromTheBlog.description}
      />
      <BlogIndex maxItems={3} />
    </HomeSection>
  );
}
