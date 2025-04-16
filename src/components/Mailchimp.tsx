"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column, Textarea } from "@/once-ui/components";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  
  const [form, setForm] = useState({ email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Send the form data to your backend or email service
      // Example: await sendEmail(form.email, form.message);
      console.log("Sending email:", form);

      setSuccess("Email sent successfully!");
      setForm({ email: "", message: "" });
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };
  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      
      <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Input
        id="contact-email"
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        description="Write your email here."
        required
      />

      <Textarea
        id="example-textarea"
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        lines={5}
        description="Write the content of your email here."
        labelAsPlaceholder={false}
        resize="vertical"
        required
      />
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      {success && <p style={{ color: "green", fontSize: "14px" }}>{success}</p>}
      <Button
          onClick={handleSubmit}
          variant="secondary"
          size="l"
          label="Send Email"
          suffixIcon="arrowUpRight"
          disabled={false}
          loading={false}
          fillWidth
      >
        Send Email
      </Button>
    </form>
    </Column>
  );
};
