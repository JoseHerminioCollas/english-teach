"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@headlessui/react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // TODO: send to API route or AWS SES
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Jose Collas at Collas English</h1>
 
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScSufj0qyhn8LvTcSf7Mvm-oq0h2XQdWl_9x5to3uJ-5KR2mw/viewform?embedded=true"
          width="640"
          height="1000"
          // frameBorder="0"
          // marginHeight="0"
          // marginWidth="0"
        >
          Loading…
        </iframe>
 
      {/* Success modal using Headless UI */}
      <Dialog
        open={isSubmitSuccessful}
        onClose={() => {}}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-background text-foreground rounded-lg p-6 shadow">
            <Dialog.Title className="text-lg font-bold">
              Message Sent!
            </Dialog.Title>
            <p className="mt-2">
              Thank you for reaching out. I’ll get back to you soon.
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
