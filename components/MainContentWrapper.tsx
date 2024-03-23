import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/shadcn/button";
import {
  Calendar,
  Mail,
  MessageSquare,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { RxDiscordLogo } from "react-icons/rx";
import { Textarea } from "./ui/shadcn/textarea";
import { Background } from "./Background";
import cookbookRoutes from "../cookbook/_routes.json";
import { NotebookBanner } from "./NotebookBanner";
import { ProductUpdateSignup } from "./productUpdateSignup";
import { useLocalizedMessages } from '@/lib/ParseLang';

const pathsWithoutFooterWidgets = ["/imprint", "/blog"];

export const MainContentWrapper = (props) => {
  const router = useRouter();
  const notebook = cookbookRoutes.find(
    ({ destination }) => destination === router.pathname + ".md"
  );

  return (
    <>
      {notebook ? (
        <NotebookBanner
          src={notebook.source.replace(".md", ".ipynb")}
          className="mb-4"
        />
      ) : null}
      {props.children}
      {!pathsWithoutFooterWidgets.includes(router.pathname) ? (
        <div
          className="flex flex-col gap-10 pt-14 border-t dark:border-neutral-800 mb-20"
          id="docs-feedback"
        >
          <DocsFeedback key={router.pathname}/>
          <DocsSupport/>
          <DocsSubscribeToUpdates/>
        </div>
      ) : null}
      <Background />
    </>
  );
};

export const DocsSubscribeToUpdates = () => {

  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <div className="flex flex-col items-start gap-3">
      <h3 className="text-xl font-semibold">{messages.main_content_wrapper.doc_sub.title}</h3>
      <div className="flex gap-3 flex-wrap">
        <ProductUpdateSignup source="docs-footer" small />
      </div>
    </div>
  );
};

export const DocsSupport = () => {

  const messages = useLocalizedMessages();
  if (!messages) return null;

  return (
    <div className="flex flex-col items-start gap-3">
      <h3 className="text-xl font-semibold" id="contact">
        {messages.main_content_wrapper.doc_support.question}
      </h3>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" size="sm" asChild>
          <a href="/discord" target="_blank">
            <span>Discord</span>
            <RxDiscordLogo className="h-4 w-4 ml-3" />
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:support@aiop.io" target="_blank">
            <span>Email</span>
            <Mail className="h-4 w-4 ml-3" />
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href="https://calendly.com/valentin-rudloff" target="_blank">
            <span>{messages.main_content_wrapper.doc_support.talk_to_us}</span>
            <Calendar className="h-4 w-4 ml-3" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export const DocsFeedback = () => {
  const messages = useLocalizedMessages();
  const router = useRouter();
  const [selected, setSelected] = useState<
    "positive" | "negative" | "submitted" | null
  >(null);
  const [feedbackComment, setFeedbackComment] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  if (!messages) return null;


  const handleFeedbackSelection = (newSelection: "positive" | "negative") => {
    setSubmitting(true);
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        page: router.pathname,
        feedback: newSelection,
      }),
    })
      .then(() => {
        setFeedbackComment("");
        setSelected(newSelection);
        setSubmitting(false);
      })
      .catch(() => setSelected(null));
  };

  const handleFeedbackCommentSubmit = () => {
    setSubmitting(true);
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        page: router.pathname,
        feedback: selected,
        comment: feedbackComment,
      }),
    })
      .then(() => {
        setSelected("submitted");
        setFeedbackComment("");
        setSubmitting(false);
      })
      .catch(() => setSelected(null));
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold">
        {selected === null
          ? messages.main_content_wrapper.feedback.question
          : selected === "positive"
          ? messages.main_content_wrapper.feedback.positive
          : selected === "negative"
          ? messages.main_content_wrapper.feedback.negative
          : messages.main_content_wrapper.feedback.thanks}
      </h3>
      {selected === null ? (
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="xl"
            onClick={() => handleFeedbackSelection("positive")}
            disabled={submitting}
          >
            <span>{messages.common.yes}</span>
            <ThumbsUp className="h-5 w-5 ml-4 text-green-800" />
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => handleFeedbackSelection("negative")}
            disabled={submitting}
          >
            <span>{messages.main_content_wrapper.feedback.submit}</span>
            <ThumbsDown className="h-5 w-5 ml-4 text-red-800" />
          </Button>
        </div>
      ) : selected === "positive" || selected === "negative" ? (
        <div className="flex flex-col gap-3">
          <Textarea
            placeholder={
              selected === "positive"
                ? messages.main_content_wrapper.feedback.placeholder.positive
                : messages.main_content_wrapper.feedback.placeholder.negative
            }
            value={feedbackComment}
            onChange={(e) => setFeedbackComment(e.target.value)}
          />
          <Button
            variant="secondary"
            className="self-start"
            size="lg"
            disabled={submitting}
            onClick={handleFeedbackCommentSubmit}
          >
            {submitting ? messages.main_content_wrapper.feedback.submitting.loading : messages.main_content_wrapper.feedback.submitting.success}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setSelected(null)}
            className="self-start"
          >
            {messages.main_content_wrapper.feedback.again}
          </Button>
        </div>
      )}
    </div>
  );
};
