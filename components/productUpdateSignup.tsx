import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalizedMessages } from '@/lib/ParseLang';

const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export function ProductUpdateSignup(props: {
  source?: string;
  className?: string;
  small?: boolean;
}) {
  const messages = useLocalizedMessages();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/productUpdateSignup", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        source: props.source ?? "create",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      alert(messages.product_update_signup.modal.error);
    } else {
      alert(messages.product_update_signup.modal.success);
      form.reset();
    }
  }
  if (!messages) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex gap-y-2 w-full flex-row", props.className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={messages.product_update_signup.form.email.placeholder}
                  type="email"
                  {...field}
                  className={cn(
                    "sm:rounded-r-none h-11 px-4 py-2",
                    props.small && "h-9"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type={messages.product_update_signup.form.submit}
          variant="secondary"
          className="sm:rounded-l-none"
          disabled={form.formState.isSubmitting}
          size={props.small ? "sm" : "lg"}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>{messages.product_update_signup.form.submit}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
