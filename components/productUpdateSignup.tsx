import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Entrez une adresse email valide, s’il vous plait."),
});

export function ProductUpdateSignup(props: {
  source?: string;
  className?: string;
  small?: boolean;
}) {
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
        source: props.source ?? "Création de compte",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      alert("Quelque chose s’est mal passé. Réessayez plus tard s’il vous plait.");
    } else {
      alert("Merci !");
      form.reset();
    }
  }

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
                  placeholder="Entrez votre email"
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
          type="Soumettre"
          variant="secondary"
          className="sm:rounded-l-none"
          disabled={form.formState.isSubmitting}
          size={props.small ? "sm" : "lg"}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>Rester&nbsp;Informé</>
          )}
        </Button>
      </form>
    </Form>
  );
}
