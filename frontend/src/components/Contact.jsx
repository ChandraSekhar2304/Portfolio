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
      // Send directly via FormSubmit so it arrives in your Gmail inbox
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
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
          _captcha: "false",
          _template: "table",
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok && (data.success === "true" || data.success === true || res.status === 200)) {
        setStatus({
          state: "sent",
          detail: "Thanks! Your message has been sent to my inbox.",
        });
        setForm(initialForm);
      } else {
        throw new Error(data.message || `Couldn't send message. Please email directly to ${profile.email}`);
      }
    } catch (err) {
      setStatus({
        state: "error",
        detail: err.message || `Couldn't send message. Please email directly to ${profile.email}`,
      });
    }
  };

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio Inquiry from " + (form.name || "Recruiter")
  )}&body=${encodeURIComponent(
    form.message || "Hi Chandra Sekhar, I saw your portfolio and would like to connect."
  )}`;

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

        <div className="contact-actions">
          <button className="btn btn-primary" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>
          <a className="btn btn-ghost" href={mailtoUrl}>
            Open in Email App
          </a>
        </div>

        {status.state === "sent" && <p className="form-status form-status-ok">{status.detail}</p>}
        {status.state === "error" && <p className="form-status form-status-error">{status.detail}</p>}
      </form>
    </section>
  );
}
