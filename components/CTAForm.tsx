"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormErrors = Partial<Record<keyof FormState, string>>;

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

export default function CTAForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Active email is required.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "WhatsApp number is required.";
    if (!form.businessName.trim()) {
      nextErrors.businessName = "Business name is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 450);
  }

  return (
    <section
      id="consultation-form"
      className="bg-brand-cream px-5 py-16 sm:px-8 lg:py-24"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
            Book the call
          </p>
          <h2
            id="form-heading"
            className="font-display text-4xl leading-tight text-brand-ink sm:text-5xl"
          >
            Free 1:1 Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-brown">
            Customized Strategy for Your Business
          </p>
          <p className="mt-6 max-w-md text-sm font-medium leading-6 text-brand-brown">
            Fill out the short form and we will review your current marketing,
            identify what is not working, and create a simple strategy you can
            actually use.
          </p>
          <div className="mt-8 rounded-lg border border-brand-sage/20 bg-brand-mist p-5">
            {["No paid offer on the call", "Strategy built around your business", "Clear next steps after the consultation"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-2 text-sm text-brand-brown"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-clay" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-brand-line bg-brand-ivory p-5 shadow-premium sm:p-8"
        >
          <div className="mb-7 border-b border-brand-line pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
              Start here
            </p>
            <h3 className="mt-2 font-display text-3xl text-brand-ink">
              Tell us about your business
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-brown">
              The more clearly you fill this out, the more useful your strategy
              call will be.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              value={form.fullName}
              error={errors.fullName}
              onChange={(value) => updateField("fullName", value)}
              autoComplete="name"
              required
            />
            <Field
              id="email"
              label="Active Email"
              placeholder="you@example.com"
              value={form.email}
              error={errors.email}
              onChange={(value) => updateField("email", value)}
              autoComplete="email"
              type="email"
              required
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="+977 98XXXXXXXX"
              value={form.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => updateField("whatsapp", value)}
              autoComplete="tel"
              type="tel"
              required
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Your business name"
              value={form.businessName}
              error={errors.businessName}
              onChange={(value) => updateField("businessName", value)}
              autoComplete="organization"
              required
            />
          </div>

          <div className="mt-5">
            <Field
              id="website"
              label="Website / Facebook URL"
              placeholder="https://yourbusiness.com"
              value={form.website}
              error={errors.website}
              onChange={(value) => updateField("website", value)}
              autoComplete="url"
              type="url"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-brand-ink"
            >
              Anything you want to say
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us what you want help with..."
              rows={5}
              className="w-full resize-y rounded-md border border-brand-line bg-white px-4 py-3 text-base text-brand-ink outline-none transition placeholder:text-brand-brown/55 focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/15"
            />
          </div>

          <p className="mt-5 text-sm font-medium text-brand-brown">
            We respect your privacy. No spam.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-brand-sage px-7 text-base font-bold text-white shadow-soft transition hover:bg-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-sage/20 disabled:cursor-not-allowed disabled:opacity-65"
          >
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  type = "text",
  autoComplete,
  required,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-brand-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
        className="h-12 w-full rounded-md border border-brand-line bg-white px-4 text-base text-brand-ink outline-none transition placeholder:text-brand-brown/55 focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/15"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
