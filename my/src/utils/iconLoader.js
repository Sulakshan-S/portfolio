import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";

const iconMap = {
  ...FaIcons,
  ...SiIcons,
  ...HiIcons,
  ...VscIcons
};

/**
 * Returns a React element for the requested icon name.
 * @param {string} iconName - The name of the icon (e.g., 'FaReact', 'SiSpringboot').
 * @param {object} props - Optional props (className, size, etc.) to pass to the icon.
 * @returns {React.ReactElement|null} The rendered icon element or null if not found.
 */
export function getIcon(iconName, props = {}) {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in mapping.`);
    return null;
  }
  return React.createElement(IconComponent, props);
}
