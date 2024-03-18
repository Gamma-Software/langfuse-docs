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
import { useLocalizedMessages } from '@/lib/ParseLang';


const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  job: z.string().min(2, {
    message: "Enter a valid job title",
  }),
  message: z.string(),
});

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

  const messages = useLocalizedMessages();
  if (!messages) return null;


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
      alert(messages.product_waiting_list.modal.error);
    } else {
      alert(messages.product_waiting_list.modal.success);
      form.reset();
    }
  }

  return (
    <div className="w-full rounded-md flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <Header
            title={messages.product_waiting_list.title}
            description={
              <>
                {messages.product_waiting_list.description}
                <br />
                <br />
                {messages.product_waiting_list.description2}
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
                  <FormLabel>{messages.product_waiting_list.form.email.title}</FormLabel>
                  <FormControl>
                    <Input placeholder={messages.product_waiting_list.form.email.placeholder} {...field} />
                  </FormControl>
                  <FormDescription>
                    {messages.product_waiting_list.form.email.description}
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
                  <FormLabel>{messages.product_waiting_list.form.job.title}</FormLabel>
                  <FormControl>
                    <Input placeholder={messages.product_waiting_list.form.job.placeholder} {...field} />
                  </FormControl>
                  <FormDescription>
                    {messages.product_waiting_list.form.job.description}
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
                  <FormLabel>{messages.product_waiting_list.form.extra.title}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={messages.product_waiting_list.form.extra.placeholder}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {messages.product_waiting_list.form.extra.description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{messages.product_waiting_list.form.submit}<Send size={14} className="ml-2" /></Button>
          </form>
        </Form>
        </div>
      </div>
    </div>
  );
}
