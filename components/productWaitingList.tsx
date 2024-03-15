"use client";
import React from "react";
import { Header } from "@/components/Header";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/shadcn/textarea"
import { Input } from "@/components/ui/shadcn/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email("Entrez une adresse email valide, s’il vous plait."),
  job: z.string().min(2, {
    message: "Veuillez entrer votre profession.",
  }),
  message: z.string(),
})

export function ProductWaitingList(props: {
  source?: string;
  className?: string;
  small?: boolean;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      job: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/productWaitingList", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        source: props.source ?? "waiting-list",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert("Uh oh! Quelque chose s’est mal passé. Reessayez ou contacter nous directement par email: valentin.rudloff.perso@gmail.com");
    } else {
      alert("Message envoyé! Merci pour votre inscription, nous vous préviendrons dès que la version Pro sera disponible.");
      form.reset();
    }
  }

  return (
    <div className="w-full rounded-md flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <Header
            title="Liste d’attente"
            description={
              <>
                Pour le moment Aiop est en version Bêta. Pour souscrire à la version Pro veuillez vous inscrire à la liste d’attente en indiquant votre email.
                <br />
                <br />
                Vous pouvez tout de même commencer à utiliser Aiop gratuitement en cliquant sur le bouton ci-dessous.
              </>
            }
            className="mb-8"
            h="h1"
          />
          <Button size="lg" asChild>
            <Link href="/docs/get-started">Démarrer</Link>
          </Button>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="votre email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Entrez votre email pour être notifié lors de la sortie de la version Pro.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession</FormLabel>
                  <FormControl>
                    <Input placeholder="votre profession" {...field} />
                  </FormControl>
                  <FormDescription>
                    Entrez votre profession pour nous aider à mieux comprendre nos utilisateurs.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="message à faire passer"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Entrez un message à faire passer à l’équipe Aiop.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Faire partie de la liste<Send size={14} className="ml-2" /></Button>
          </form>
        </Form>
        </div>
      </div>
    </div>
  );
}
