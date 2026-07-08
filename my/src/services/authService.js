/**
 * @file authService.js
 * @description Authentication and admin-inbox API operations.
 */

const API_BASE_URL = "http://localhost:8080/api";

/**
 * Authenticates the admin user.
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<object>} Parsed token object on success.
 */
export async function loginAdmin(username, password) {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Authentication failed");
  }

  return response.json();
}

/**
 * Fetches all inbox messages (requires authorization token).
 * @param {string} token - The Bearer token.
 * @returns {Promise<Array>} List of message objects.
 */
export async function fetchAdminMessages(token) {
  const response = await fetch(`${API_BASE_URL}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }

  return response.json();
}

/**
 * Marks a message as read in the database.
 * @param {string|number} id - Message ID.
 * @param {string} token - Authorization token.
 * @returns {Promise<Response>} Fetch Response.
 */
export async function markAdminMessageAsRead(id, token) {
  const response = await fetch(`${API_BASE_URL}/messages/${id}/read`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update message status");
  }

  return response;
}

/**
 * Deletes a message from the database.
 * @param {string|number} id - Message ID.
 * @param {string} token - Authorization token.
 * @returns {Promise<Response>} Fetch Response.
 */
export async function deleteAdminMessage(id, token) {
  const response = await fetch(`${API_BASE_URL}/messages/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete message");
  }

  return response;
}
