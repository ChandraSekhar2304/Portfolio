import { useState } from "react";
import { API_BASE, profile } from "../data/content.js";

const initialForm = { name: "", email: "", message: "" };

export default function Contact({ id }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", detail: "" });

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", detail: "" });

    try {
      let sentSuccessfully = false;
      let replyMessage = "Thanks! Your message has been sent.";

      // 1. Try sending to the backend API first
      try {
        const res = await fetch(`${API_BASE}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const contentType = res.headers.get("content-type") || "";

        if (res.ok) {
          if (contentType.includes("application/json")) {
            const data = await res.json();
            replyMessage = data.message || replyMessage;
          }
          sentSuccessfully = true;
        } else {
          // If server returned a 4xx validation error as JSON
          if (contentType.includes("application/json")) {
            const errData = await res.json();
            if (errData.detail) {
              const detail = Array.isArray(errData.detail)
                ? errData.detail.map((d) => d.msg).join(" ")
                : errData.detail;
              throw new Error(detail);
            }
          }
        }
      } catch (apiErr) {
        // If it's a validation error, re-throw it so the user sees what's wrong
        if (apiErr.message && !apiErr.message.includes("fetch") && !apiErr.message.includes("Failed")) {
          throw apiErr;
        }
      }

      // 2. If backend is offline or on serverless without python backend, fallback to FormSubmit
      if (!sentSuccessfully) {
        const fallbackRes = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `New Portfolio Message from ${form.name}`,
          }),
        });

        if (fallbackRes.ok) {
          sentSuccessfully = true;
          replyMessage = "Thanks! Your message has been delivered to my inbox.";
        }
      }

      if (sentSuccessfully) {
        setStatus({ state: "sent", detail: replyMessage });
        setForm(initialForm);
      } else {
        throw new Error(`Couldn't send message. Please reach out directly to ${profile.email}`);
      }
    } catch (err) {
      setStatus({
        state: "error",
        detail: err.message || `Couldn't send message. Please reach out directly to ${profile.email}`,
      });
    }
  };

  return (
    <section id={id} className="section">
      <h2 className="section-heading">Contact</h2>
      <p className="contact-intro">
        Reach me directly at{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>, or send a note here.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            required
            minLength={2}
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Jane Recruiter"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            placeholder="jane@company.com"
          />
        </label>
        <label>
          Message
          <textarea
            required
            minLength={10}
            rows={4}
            value={form.message}
            onChange={handleChange("message")}
            placeholder="Let's talk about opportunities..."
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>

        {status.state === "sent" && <p className="form-status form-status-ok">{status.detail}</p>}
        {status.state === "error" && <p className="form-status form-status-error">{status.detail}</p>}
      </form>
    </section>
  );
}
