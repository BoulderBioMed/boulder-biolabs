"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/quote-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) setSubmitted(true);
    } catch (err) { console.error(err); }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <section style={{ padding: "5rem 1.5rem", minHeight: "60vh" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h1>Thanks — we&apos;ll be in touch within one business day.</h1>
          <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Your quote request has been received. A Boulder BioLabs project manager will respond by email or phone within one business day.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>Request a Quote</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Tell us your device, sterilization method, and tests needed. Scope, price, and turnaround date back within one business day.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: 10, border: "1px solid #E3E7EE" }}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Work Email" name="email" type="email" required />
            <Field label="Phone" name="phone" required />
            <Field label="Device Type / Description" name="device" textarea required />
            <RadioGroup label="Sterilization Method" name="sterilization" options={["EO", "Chlorine Dioxide", "Radiation", "Other", "Not Yet Decided"]} />
            <CheckboxGroup label="Tests Needed" name="tests" options={["Sterility", "Bioburden", "Method Suitability", "LAL/BET", "EO Residuals", "CD Residuals", "Rapid BI Release (4-hour)"]} />
            <Field label="Quantity per Test / Lot" name="quantity" />
            <RadioGroup label="Turnaround Requirement" name="turnaround" options={["Standard", "Rush", "Validation Iteration", "Routine Recurring"]} />
            <Field label="Project Timeline / Notes (optional)" name="notes" textarea />
            <button type="submit" disabled={submitting} className="btn btn-primary" style={{ padding: "1rem 1.5rem" }}>{submitting ? "Sending..." : "Submit Quote Request"}</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false, textarea = false }: any) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontWeight: 600, color: "#0B2545", fontSize: "0.92rem", marginBottom: "0.3rem" }}>{label}{required && <span style={{ color: "#dc2626" }}> *</span>}</div>
      {textarea ? <textarea name={name} required={required} rows={3} style={{ width: "100%", padding: "0.6rem 0.8rem", border: "1px solid #D1D5DB", borderRadius: 6, fontSize: "0.95rem", fontFamily: "inherit" }} /> : <input type={type} name={name} required={required} style={{ width: "100%", padding: "0.6rem 0.8rem", border: "1px solid #D1D5DB", borderRadius: 6, fontSize: "0.95rem" }} />}
    </label>
  );
}

function RadioGroup({ label, name, options }: any) {
  return (
    <div>
      <div style={{ fontWeight: 600, color: "#0B2545", fontSize: "0.92rem", marginBottom: "0.3rem" }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
        {options.map((o: string) => (
          <label key={o} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.92rem" }}>
            <input type="radio" name={name} value={o} /> {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function CheckboxGroup({ label, name, options }: any) {
  return (
    <div>
      <div style={{ fontWeight: 600, color: "#0B2545", fontSize: "0.92rem", marginBottom: "0.3rem" }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
        {options.map((o: string) => (
          <label key={o} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.92rem" }}>
            <input type="checkbox" name={name} value={o} /> {o}
          </label>
        ))}
      </div>
    </div>
  );
}
