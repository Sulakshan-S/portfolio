import React from "react";

/**
 * Reusable premium glassmorphic Card component.
 * @param {object} props
 * @param {React.ReactNode} props.children - Card contents.
 * @param {string} [props.className] - Custom parent wrapper classes.
 * @param {boolean} [props.hoverable] - Enables 3D scale and glow shift effects on hover.
 */
function Card({ children, className = "", hoverable = true, ...props }) {
  return (
    <div
      className={`glass-panel rounded-3xl p-8 shadow-2xl border border-white/5 relative overflow-hidden transition-all duration-400 ${
        hoverable
          ? "hover:bg-slate-900/60 hover:border-brand-indigo/20 hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1.5"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
