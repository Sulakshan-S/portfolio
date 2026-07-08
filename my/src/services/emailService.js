import emailjs from "@emailjs/browser";
import { siteConfig } from "../data/siteConfig";

/**
 * Sends a contact form submission directly to the EmailJS cloud service.
 * @param {HTMLFormElement} formElement - The HTML form DOM element.
 * @returns {Promise<any>} Resolves if mail sends successfully.
 */
export async function sendContactMessage(formElement) {
  const { serviceId, templateId, publicKey } = siteConfig.emailjs;

  // Verify that the user has changed default placeholder settings
  if (
    !serviceId ||
    !templateId ||
    !publicKey ||
    serviceId === "service_xxx" ||
    templateId === "template_xxx" ||
    publicKey === "your_public_key_xxx"
  ) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
}
