import React from "react";

/**
 * Reusable premium button component.
 * @param {object} props
 * @param {React.ReactNode} props.children - Label or child nodes.
 * @param {'primary'|'secondary'|'ghost'} [props.variant] - Button color variant.
 * @param {string} [props.href] - Anchor reference (renders as <a> if provided).
 * @param {function} [props.onClick] - Click callback handler.
 * @param {boolean} [props.disabled] - Disabled state flag.
 * @param {string} [props.className] - Custom CSS classes.
 * @param {boolean|string} [props.download] - Anchor download parameter.
 * @param {'button'|'submit'|'reset'} [props.type] - Button form submission type.
 */
function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled = false,
  className = "",
  download,
  type = "button",
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-bold tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-xl text-xs sm:text-sm py-3.5 px-6 select-none";

  const variants = {
    primary: "bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo/90 hover:to-brand-violet/90 text-white shadow-lg shadow-brand-indigo/15",
    secondary: "border border-white/5 bg-slate-950/60 hover:bg-slate-900/60 text-slate-300 hover:text-white shadow-md shadow-black/25",
    ghost: "border border-brand-indigo/25 hover:border-brand-indigo/50 text-brand-indigo hover:bg-brand-indigo/5 shadow-md shadow-brand-indigo/5"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
