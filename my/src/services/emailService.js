import emailjs from "@emailjs/browser";

/**
 * Sends a contact form submission directly to the EmailJS cloud service.
 * @param {HTMLFormElement} formElement - The HTML form DOM element.
 * @returns {Promise<any>} Resolves if mail sends successfully.
 */
export async function sendContactMessage(formElement) {
  // Read exclusively from Vite environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Verify that the environment variables are configured
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
}
