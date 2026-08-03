"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";

// Module has no TypeScript definitions.
// @ts-ignore
const countryList = require("react-select-country-list");

type CountryOption = {
  value: string;
  label: string;
};

type FormValues = {
  name: string;
  email: string;
  mobile: string;
  course: string;
  country: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialFormValues: FormValues = {
  name: "",
  email: "",
  mobile: "",
  course: "",
  country: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

function countPhoneDigits(value: string) {
  return value.replace(/\D/g, "").length;
}

function validateField(
  field: keyof FormValues,
  value: string
): string {
  const cleanedValue = value.trim();

  switch (field) {
    case "name": {
      if (!cleanedValue) {
        return "Please enter your full name.";
      }

      if (cleanedValue.length < 2) {
        return "Name must contain at least 2 characters.";
      }

      if (cleanedValue.length > 80) {
        return "Name must not exceed 80 characters.";
      }

      if (!NAME_PATTERN.test(cleanedValue)) {
        return "Name can only contain letters, spaces, apostrophes and hyphens.";
      }

      return "";
    }

    case "email": {
      if (!cleanedValue) {
        return "Please enter your email address.";
      }

      if (cleanedValue.length > 120) {
        return "Email address is too long.";
      }

      if (!EMAIL_PATTERN.test(cleanedValue)) {
        return "Please enter a valid email address.";
      }

      return "";
    }

    case "mobile": {
      if (!cleanedValue) {
        return "Please enter your mobile number.";
      }

      if (!/^[+\d\s()-]+$/.test(cleanedValue)) {
        return "Mobile number contains invalid characters.";
      }

      const digitCount = countPhoneDigits(cleanedValue);

      if (digitCount < 10) {
        return "Mobile number must contain at least 10 digits.";
      }

      if (digitCount > 15) {
        return "Mobile number must not exceed 15 digits.";
      }

      return "";
    }

    case "course": {
      if (!cleanedValue) {
        return "Please select a programme.";
      }

      return "";
    }

    case "country": {
      if (!cleanedValue) {
        return "Please select your country.";
      }

      return "";
    }

    default:
      return "";
  }
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  (
    Object.keys(values) as Array<keyof FormValues>
  ).forEach((field) => {
    const error = validateField(field, values[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

export default function ScholarshipSection() {
  const countryOptions = useMemo<CountryOption[]>(
    () =>
      countryList()
        .getData()
        .sort((a: CountryOption, b: CountryOption) =>
          a.label.localeCompare(b.label)
        ),
    []
  );

  const [formValues, setFormValues] =
    useState<FormValues>(initialFormValues);

  const [errors, setErrors] = useState<FormErrors>({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isSubmitted) return;

    const timer = window.setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const field = event.target.name as keyof FormValues;
    let value = event.target.value;

    if (field === "name") {
      value = value.replace(/\s{2,}/g, " ");
    }

    if (field === "mobile") {
      value = value.replace(/[^+\d\s()-]/g, "");
    }

    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));

    setSubmitError("");

    if (touched[field]) {
      const fieldError = validateField(field, value);

      setErrors((current) => ({
        ...current,
        [field]: fieldError || undefined,
      }));
    }
  };

  const handleBlur = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>
  ) => {
    const field = event.target.name as keyof FormValues;
    const value = event.target.value;

    setTouched((current) => ({
      ...current,
      [field]: true,
    }));

    const fieldError = validateField(field, value);

    setErrors((current) => ({
      ...current,
      [field]: fieldError || undefined,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const cleanedValues: FormValues = {
      name: formValues.name.trim().replace(/\s+/g, " "),
      email: formValues.email.trim().toLowerCase(),
      mobile: formValues.mobile.trim(),
      course: formValues.course.trim(),
      country: formValues.country.trim(),
    };

    const validationErrors = validateForm(cleanedValues);

    setFormValues(cleanedValues);

    setTouched({
      name: true,
      email: true,
      mobile: true,
      course: true,
      country: true,
    });

    setErrors(validationErrors);
    setSubmitError("");
    setIsSubmitted(false);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(
        validationErrors
      )[0] as keyof FormValues;

      const firstInvalidElement =
        document.querySelector<HTMLElement>(
          `[name="${firstInvalidField}"]`
        );

      firstInvalidElement?.focus();

      return;
    }

    setIsSubmitting(true);

    try {
      /*
        Replace this temporary delay with your real API request.

        Example:

        const response = await fetch("/api/scholarship-enquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cleanedValues),
        });

        if (!response.ok) {
          throw new Error("Unable to submit enquiry.");
        }
      */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setFormValues(initialFormValues);
      setErrors({});
      setTouched({});
      setIsSubmitted(true);
    } catch (error) {
      console.error(
        "Scholarship form submission failed:",
        error
      );

      setSubmitError(
        "We could not submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A1414] text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/CampusFront.jpg')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#0A1414]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1414]/70 via-[#0A1414]/40 to-[#0A1414]/70" />

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <p className="font-neue text-sm font-bold uppercase tracking-[0.28em] text-[#C8EB00]">
            Scholarship Enquiry
          </p>

          <h2 className="font-garage mt-5 text-[44px] font-black uppercase leading-[1] tracking-[-0.04em] sm:text-[60px] md:text-[76px]">
            Interested in
            <br />

            <span className="text-[#C8EB00]">
              Scholarship?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-white/85 md:text-lg">
            Please complete this form and our admissions team
            will contact you.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="scholarship-form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-10 grid max-w-2xl gap-x-5 gap-y-6 text-left sm:grid-cols-2"
              >
                {/* NAME */}
                <FormField
                  label="Full Name"
                  error={errors.name}
                >
                  <input
                    id="scholarship-name"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    maxLength={80}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name
                        ? "scholarship-name-error"
                        : undefined
                    }
                    className={getInputClass(Boolean(errors.name))}
                  />
                </FormField>

                {/* EMAIL */}
                <FormField
                  label="Email Address"
                  error={errors.email}
                >
                  <input
                    id="scholarship-email"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={120}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email
                        ? "scholarship-email-error"
                        : undefined
                    }
                    className={getInputClass(Boolean(errors.email))}
                  />
                </FormField>

                {/* MOBILE */}
                <FormField
                  label="Mobile Number"
                  error={errors.mobile}
                >
                  <input
                    id="scholarship-mobile"
                    type="tel"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your mobile number"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={25}
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby={
                      errors.mobile
                        ? "scholarship-mobile-error"
                        : undefined
                    }
                    className={getInputClass(
                      Boolean(errors.mobile)
                    )}
                  />
                </FormField>

                {/* PROGRAMME */}
                <FormField
                  label="Programme"
                  error={errors.course}
                >
                  <select
                    id="scholarship-course"
                    name="course"
                    value={formValues.course}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.course)}
                    aria-describedby={
                      errors.course
                        ? "scholarship-course-error"
                        : undefined
                    }
                    className={getInputClass(
                      Boolean(errors.course)
                    )}
                  >
                    <option value="" className="text-black">
                      Select Programme
                    </option>

                    <optgroup
                      label="Undergraduate Programmes"
                      className="text-black"
                    >
                      <option
                        value="bsc-computer-science"
                        className="text-black"
                      >
                        BSc (Hons) Computer Science
                      </option>

                      <option
                        value="bsc-games-development"
                        className="text-black"
                      >
                        BSc (Hons) Games Development
                      </option>

                      <option
                        value="ba-graphic-design"
                        className="text-black"
                      >
                        BA (Hons) Graphic Design
                      </option>

                      <option
                        value="ba-business-management"
                        className="text-black"
                      >
                        BA (Hons) Business &amp; Management
                      </option>

                      <option
                        value="ba-visual-communication"
                        className="text-black"
                      >
                        BA (Hons) Visual Communication
                      </option>

                      <option
                        value="ba-digital-marketing-social-media"
                        className="text-black"
                      >
                        BA (Hons) Digital Marketing &amp; Social
                        Media
                      </option>
                    </optgroup>

                    <optgroup
                      label="Postgraduate Programmes"
                      className="text-black"
                    >
                      <option
                        value="mba"
                        className="text-black"
                      >
                        MBA
                      </option>
                    </optgroup>

                    <optgroup
                      label="Entry Routes"
                      className="text-black"
                    >
                      <option
                        value="integrated-foundation-year"
                        className="text-black"
                      >
                        Integrated Foundation Year
                      </option>

                      <option
                        value="integrated-pre-masters"
                        className="text-black"
                      >
                        Integrated Pre-Master&apos;s
                      </option>
                    </optgroup>
                  </select>
                </FormField>

                {/* COUNTRY */}
                <div className="sm:col-span-2">
                  <FormField
                    label="Country"
                    error={errors.country}
                  >
                    <select
                      id="scholarship-country"
                      name="country"
                      value={formValues.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="country-name"
                      aria-invalid={Boolean(errors.country)}
                      aria-describedby={
                        errors.country
                          ? "scholarship-country-error"
                          : undefined
                      }
                      className={getInputClass(
                        Boolean(errors.country)
                      )}
                    >
                      <option value="" className="text-black">
                        Select Country
                      </option>

                      {countryOptions.map((country) => (
                        <option
                          key={country.value}
                          value={country.label}
                          className="text-black"
                        >
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* GENERAL SUBMIT ERROR */}
                {submitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 border border-red-400 bg-red-500/15 px-4 py-3 text-sm text-red-100 sm:col-span-2"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                    <p>{submitError}</p>
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="flex justify-center sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-garage mt-2 inline-flex min-h-14 min-w-[180px] items-center justify-center gap-3 bg-[#C8EB00] px-9 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8EB00] focus:ring-offset-2 focus:ring-offset-[#0A1414] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.97,
                }}
                transition={{ duration: 0.4 }}
                className="mx-auto mt-10 flex min-h-[365px] max-w-2xl flex-col items-center justify-center border border-[#C8EB00] bg-[#C8EB00] px-6 py-12 text-center text-[#0A1414] shadow-[0_20px_55px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-[#0A1414] text-[#C8EB00]">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h3 className="font-garage mt-6 text-[30px] font-black uppercase leading-none sm:text-[38px]">
                  Thank you for your enquiry!
                </h3>

                <p className="mt-5 max-w-lg text-base font-semibold leading-7 sm:text-lg">
                  Your scholarship enquiry has been submitted
                  successfully.
                  <br />
                  Our admissions team will contact you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `scholarship-${label
    .toLowerCase()
    .replace(/\s+/g, "-")}-error`;

  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-white/80">
        {label}
        <span className="ml-1 text-[#C8EB00]">*</span>
      </label>

      {children}

      <div className="min-h-6">
        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-start gap-2 text-sm font-medium text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

function getInputClass(hasError: boolean) {
  return [
    "h-14 w-full rounded-none border bg-white/10 px-4 text-white",
    "placeholder:text-white/60 outline-none backdrop-blur-sm transition",
    "focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60",
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-400"
      : "border-white/40 focus:border-[#C8EB00] focus:ring-[#C8EB00]",
  ].join(" ");
}