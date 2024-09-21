"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import emailjs from "@emailjs/browser";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  from_name: z.string().min(1, { message: "This field has to be filled." }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      from_name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        values,
        {
          publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_ID}`,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast({
            title: "Message sent successfully",
            description: "We'll get back to you soon.",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        },
      );
    console.log(values);

    form.reset()
  }

  return (
    <Section id="contact" className="px-3 py-32">
      <SectionHeading text="Contact" className="my-10" />

      <div className="mx-auto mb-10 max-w-md space-y-2 text-center">
        <h1 className="text-lg font-medium text-foreground/90">
          Let&apos;s Get In Touch
        </h1>
        <p className="text-foreground/80">
          Ready to start your next project with me? That&apos;s great! Give me a
          call or send me an email and I will get back to you as soon as
          possible!
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-lg space-y-4"
        >
          <FormField
            control={form.control}
            name="from_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

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
                  <Textarea placeholder="Message..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full md:w-fit float-right">Send</Button>
        </form>
      </Form>
    </Section>
  );
}
