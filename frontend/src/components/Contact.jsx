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
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        const detail = Array.isArray(data.detail)
          ? data.detail.map((d) => d.msg).join(" ")
          : data.detail || "Something went wrong.";
        throw new Error(detail);
      }
      setStatus({ state: "sent", detail: data.message || "Message sent." });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", detail: err.message || "Couldn't send that — try again." });
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
            rows={4}
            value={form.message}
            onChange={handleChange("message")}
            placeholder="Let's talk about..."
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
