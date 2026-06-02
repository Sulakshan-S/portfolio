import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MessageDetailsModal from "../components/admin/MessageDetailsModal";

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const unreadCount = messages.filter(
    (message) => !message.read
  ).length;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:8080/api/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();

      setMessages(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    const confirmed = window.confirm(
      "Delete this message?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:8080/api/messages/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setMessages(
        messages.filter(
          (message) => message.id !== id
        )
      );

      setShowModal(false);
      setSelectedMessage(null);

    } catch (error) {
      console.error(error);
      alert("Failed to delete message");
    }
  };

  const markAsRead = async (id) => {
  try {

    const token = localStorage.getItem("token");

    await fetch(
      `http://localhost:8080/api/messages/${id}/read`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMessages((prev) =>
      prev.map((message) =>
        message.id === id
          ? { ...message, read: true }
          : message
      )
    );

    setSelectedMessage((prev) =>
      prev && prev.id === id
        ? { ...prev, read: true }
        : prev
    );

  } catch (error) {
    console.error(error);
  }
};

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Portfolio Admin
          </h1>

          <p className="text-gray-400 mt-1">
            Manage contact messages
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-full md:w-auto"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <p className="text-gray-400">
            Total Messages
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {messages.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <p className="text-gray-400">
            Unread Messages
          </p>

          <h2 className="text-3xl font-bold mt-2 text-cyan-400">
            {unreadCount}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <p className="text-gray-400">
            Status
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-400">
            Active
          </h2>
        </div>

      </div>

      {/* Loading */}
      {loading ? (
        <div className="bg-slate-900 rounded-xl p-6 text-center">
          Loading messages...
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block bg-slate-900 rounded-xl overflow-hidden">

            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-4">
                    Name
                  </th>
                  <th className="text-left p-4">
                    Email
                  </th>
                  <th className="text-left p-4">
                    Date
                  </th>
                  <th className="text-left p-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {messages.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-6 text-center text-gray-400"
                    >
                      No messages found
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr
                      key={msg.id}
                      className="border-t border-slate-700"
                    >
                      <td
                        className={`p-4 ${
                          !msg.read
                            ? "font-bold text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {msg.name}
                      </td>

                      <td
                        className={`p-4 ${
                          !msg.read
                            ? "font-bold text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {msg.email}
                      </td>

                      <td className="p-4">
                        {msg.createdAt
                          ? new Date(
                              msg.createdAt
                            ).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="p-4">
                        {!msg.read && (
                          <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded mr-2">
                            NEW
                          </span>
                        )}

                        <button
                          className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded"
                          onClick={() => {
                            if (!msg.read) {
                              markAsRead(msg.id);
                            }

                            setSelectedMessage(msg);
                            setShowModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">

            {messages.length === 0 ? (
              <div className="bg-slate-900 rounded-xl p-6 text-center text-gray-400">
                No messages found
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center">

                    <h3
                      className={`${
                        !msg.read
                          ? "font-bold text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {msg.name}
                    </h3>

                    {!msg.read && (
                      <span className="bg-cyan-500 text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}

                  </div>

                  <p className="text-gray-400 mt-2">
                    {msg.email}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {msg.createdAt
                      ? new Date(
                          msg.createdAt
                        ).toLocaleDateString()
                      : "-"}
                  </p>

                  <button
                    onClick={() => {
                      if (!msg.read) {
                        markAsRead(msg.id);
                      }

                      setSelectedMessage(msg);
                      setShowModal(true);
                    }}
                    className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg"
                  >
                    View Message
                  </button>

                </div>
              ))
            )}

          </div>
        </>
      )}

      <MessageDetailsModal
        message={selectedMessage}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedMessage(null);
        }}
        onDelete={deleteMessage}
      />
    </div>
  );
}

export default AdminDashboard;