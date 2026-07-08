import React from "react";

/**
 * Reusable section header component.
 * @param {object} props
 * @param {string} [props.eyebrow] - Small uppercase prefix above title.
 * @param {string} props.title - Primary header text.
 * @param {string} [props.highlightText] - Text to highlight with accent gradient.
 * @param {string} [props.subtitle] - Supporting description text below header.
 * @param {string} [props.className] - Custom parent wrapper classes.
 */
function SectionHeading({ eyebrow, title, highlightText, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-10 select-none ${className}`}>
      {eyebrow && (
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-indigo block mb-3 animate-pulse">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlightText && (
          <span className="bg-gradient-to-r from-brand-indigo via-purple-400 to-brand-violet bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </h2>
      
      <div className="w-16 h-1 bg-gradient-to-r from-brand-indigo to-brand-violet mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
      
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
