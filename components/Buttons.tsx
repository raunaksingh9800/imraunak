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
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-heading font-bold text-xs uppercase px-3.5 py-2 border text-center no-underline cursor-pointer select-none shadow-hard-sm active:translate-y-[1px] active:shadow-none focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";

  const variantClasses =
    variant === "primary"
      ? "bg-black text-white border-black hover:bg-red hover:border-red"
      : "bg-white text-black border-black hover:bg-light-gray hover:text-red";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (asLink && href) {
    if (href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
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
    <button className={combinedClasses} disabled={disabled} {...props}>
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
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <a
      href={href}
      target={target || (isExternal ? "_blank" : undefined)}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`font-body text-xs sm:text-sm text-black underline underline-offset-2 hover:text-red hover:decoration-red active:translate-y-[1px] transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] ${className}`}
    >
      {children}
    </a>
  );
}
