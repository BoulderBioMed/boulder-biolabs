"use client";

import { trackEvent } from "./Analytics";
import type { AnchorHTMLAttributes } from "react";

// <TrackedTel /> wraps a tel: link and fires phone_clicked on click.
// Drop-in replacement for <a href="tel:..."> wherever a phone number is shown.
export function TrackedTel({
  number,
  display,
  location,
  style,
  className,
}: {
  number: string; // digits only, e.g. "3035311238"
  display?: string; // human-formatted, e.g. "303-531-1238"
  location: string; // where on the page this link appears, e.g. "header", "footer"
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <a
      href={`tel:${number}`}
      style={style}
      className={className}
      onClick={() => trackEvent("phone_clicked", { location, number })}
    >
      {display || number}
    </a>
  );
}

// <TrackedExtLink /> wraps an external link (typically to a sister family
// site or partner) and fires external_family_link_clicked on click.
export function TrackedExtLink({
  href,
  destination,
  location,
  children,
  style,
  className,
  ...rest
}: {
  href: string;
  destination: string; // logical name of where it points, e.g. "boulder-package-test"
  location: string; // where on the page the link is, e.g. "footer", "family-strip"
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={style}
      className={className}
      onClick={() => trackEvent("external_family_link_clicked", { destination, href, location })}
      {...rest}
    >
      {children}
    </a>
  );
}
