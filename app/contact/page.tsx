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
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // TODO: send to API route or AWS SES
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Jose</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          {...register("name")}
          placeholder="Your Name"
          className="border border-foreground rounded px-4 py-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email")}
          placeholder="Your Email"
          className="border border-foreground rounded px-4 py-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <textarea
          {...register("message")}
          placeholder="Your Message"
          rows={4}
          className="border border-foreground rounded px-4 py-2"
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}

        <button
          type="submit"
          className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Success modal using Headless UI */}
      <Dialog open={isSubmitSuccessful} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-background text-foreground rounded-lg p-6 shadow">
            <Dialog.Title className="text-lg font-bold">Message Sent!</Dialog.Title>
            <p className="mt-2">Thank you for reaching out. I’ll get back to you soon.</p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            