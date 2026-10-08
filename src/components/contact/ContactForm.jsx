import React, { useRef, useState } from "react";
import { base44 } from "@/api/base44Client";
import { PROJECT_TYPES } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Check, Loader2, Paperclip } from "lucide-react";

const FIELD =
  "w-full border border-input bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-steel/60 focus:border-brand";
const LABEL = "label-mono mb-2 block text-steel";

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  project_type: "",
  project_location: "",
  requirements: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const fileInput = useRef(null);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please describe the requirement.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      let file_uri;
      let file_name;
      if (file) {
        const uploaded = await base44.integrations.Core.UploadPrivateFile({ file });
        file_uri = uploaded.file_uri;
        file_name = file.name;
      }

      await base44.entities.Inquiry.create({
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        project_type: form.project_type,
        project_location: form.project_location.trim(),
        requirements: form.requirements.trim(),
        message: form.message.trim(),
        file_uri,
        file_name,
      });

      base44.analytics.track({ eventName: "project_enquiry_submit", properties: { project_type: form.project_type || "not_specified" } });
      setForm(EMPTY);
      setFile(null);
      if (fileInput.current) fileInput.current.value = "";
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-border bg-background p-8 lg:p-12">
        <span className="inline-flex h-11 w-11 items-center justify-center border border-brand text-brand">
          <Check size={18} aria-hidden="true" />
        </span>
        <h2 className="display mt-7 text-[clamp(1.5rem,3vw,2.1rem)] text-ink">Enquiry received.</h2>
        <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-steel">
          Thank you — your project information has reached our engineering team. We review each enquiry against
          the scope, project type and location provided, and will follow up to discuss the requirement.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline-dark mt-8">
          Submit Another Requirement
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-border bg-background p-6 lg:p-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            className={cn(FIELD, errors.name && "border-destructive")}
            value={form.name}
            onChange={update("name")}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-[13px] text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className={LABEL} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className={FIELD}
            value={form.company}
            onChange={update("company")}
            autoComplete="organization"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={cn(FIELD, errors.email && "border-destructive")}
            value={form.email}
            onChange={update("email")}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-[13px] text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={FIELD}
            value={form.phone}
            onChange={update("phone")}
            autoComplete="tel"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="project_type">
            Project Type
          </label>
          <select
            id="project_type"
            name="project_type"
            className={cn(FIELD, "min-w-0 max-w-full")}
            value={form.project_type}
            onChange={update("project_type")}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL} htmlFor="project_location">
            Project Location
          </label>
          <input
            id="project_location"
            name="project_location"
            className={FIELD}
            value={form.project_location}
            onChange={update("project_location")}
            placeholder="City / Province or State"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="requirements">
            Project Requirements
          </label>
          <input
            id="requirements"
            name="requirements"
            className={FIELD}
            value={form.requirements}
            onChange={update("requirements")}
            placeholder="Scope, structure type, stage, programme"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={cn(FIELD, "resize-y", errors.message && "border-destructive")}
            value={form.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-[13px] text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="attachment">
            File Upload
          </label>
          <label
            htmlFor="attachment"
            className="flex min-w-0 cursor-pointer items-center gap-3 border border-input bg-background px-4 py-3 text-[15px] text-steel transition-colors hover:border-brand"
          >
            <Paperclip size={16} aria-hidden="true" className="shrink-0" />
            <span className="min-w-0 flex-1 truncate">
              {file ? file.name : "Attach drawings, specifications or a brief"}
            </span>
          </label>
          <input
            ref={fileInput}
            id="attachment"
            name="attachment"
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border pt-8">
        <button type="submit" className="btn-solid-dark" disabled={sending}>
          {sending ? (
            <>
              <Loader2 size={14} className="animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Discuss Your Project"
          )}
        </button>
        <p className="label-mono text-steel/70">* Required</p>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-[14px] text-destructive">
          Your enquiry could not be sent. Please try again, or contact us directly.
        </p>
      ) : null}
    </form>
  );
}