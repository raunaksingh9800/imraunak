import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  target?: string;
}

export function Button({
  variant = "primary",
  children,
  asLink = false,
  href,
  target,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-block font-heading font-bold text-xs uppercase px-4 py-2 border border-black text-center no-underline cursor-pointer select-none transition-none";

  const variantClasses =
    variant === "primary"
      ? "bg-black text-white hover:bg-zinc-800 shadow-[1px_1px_0px_#ffffff]"
      : "bg-white text-black hover:bg-zinc-100 shadow-[1px_1px_0px_#000000]";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (asLink && href) {
    if (href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:")) {
      return (
        <a href={href} target={target} rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  target,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`font-body text-sm text-[#0000ee] underline hover:text-[#551a8b] ${className}`}
    >
      {children}
    </a>
  );
}

