import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MessageDetailsModal from "../components/admin/MessageDetailsModal";
import { FaTrash, FaEye, FaSignOutAlt, FaEnvelope, FaMailBulk, FaHeart, FaCircle } from "react-icons/fa";
import { fetchAdminMessages, deleteAdminMessage, markAdminMessageAsRead } from "../services/authService";

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
      const data = await fetchAdminMessages(token);
      setMessages(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load messages from database.");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this message?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");
      await deleteAdminMessage(id, token);

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
      await markAdminMessageAsRead(id, token);

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
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10 grid-bg">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-indigo/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 animate-float">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-900">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3 select-none">
              <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                Control Console
              </span>
            </h1>
            <p className="text-slate-550 text-[10px] font-bold uppercase tracking-wider">
              Manage portfolio messages and recruiter outreach
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-red-500/10 hover:border-red-500/30 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <FaSignOutAlt size={14} />
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 select-none">
          {/* Card 1 */}
          <div className="glass-panel rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute right-6 top-6 text-3xl text-slate-800">
              <FaMailBulk />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Total Inbox
            </p>
            <h2 className="text-4xl font-extrabold text-white mt-3">
              {messages.length}
            </h2>
            <div className="mt-4 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-brand-indigo rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" style={{ width: `${messages.length > 0 ? 100 : 0}%` }} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute right-6 top-6 text-3xl text-slate-800">
              <FaEnvelope />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Unread Messages
            </p>
            <h2 className="text-4xl font-extrabold text-brand-indigo mt-3 animate-pulse">
              {unreadCount}
            </h2>
            <div className="mt-4 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-indigo to-brand-violet rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
                style={{ width: `${messages.length > 0 ? (unreadCount / messages.length) * 100 : 0}%` }} 
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute right-6 top-6 text-3xl text-slate-800">
              <FaHeart />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Console Status
            </p>
            <h2 className="text-4xl font-extrabold text-emerald-400 mt-3 flex items-center gap-2">
              Online
            </h2>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <FaCircle className="text-emerald-500 animate-ping text-[6px]" />
              Syncing with database
            </div>
          </div>
        </div>

        {/* Message Inbox Loader */}
        {loading ? (
          <div className="glass-panel rounded-3xl p-16 text-center border border-white/5 text-slate-400 font-medium">
            <div className="w-8 h-8 rounded-full border-2 border-brand-indigo border-t-transparent animate-spin mx-auto mb-4" />
            Synchronizing message registry...
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block glass-panel rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-slate-900 bg-slate-950/40 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Inbox Messages</h3>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-slate-850 text-slate-400 select-none">
                  {messages.length} Submissions
                </span>
              </div>
              
              <table className="w-full text-left">
                <thead className="bg-slate-950 border-b border-slate-900 text-[10px] font-bold uppercase tracking-wider text-slate-500 select-none">
                  <tr>
                    <th className="p-4 pl-6">Sender</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right pr-6">Action</th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-slate-900 bg-slate-900/10">
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-16 text-center text-slate-550 font-medium">
                        No contact messages found.
                      </td>
                    </tr>
                  ) : (
                    messages.map((msg) => (
                      <tr
                        key={msg.id}
                        className={`hover:bg-slate-900/35 transition duration-150 ${
                          !msg.read ? "bg-brand-indigo/[0.02]" : ""
                        }`}
                      >
                        {/* Name Column */}
                        <td className="p-4 pl-6 font-bold flex items-center gap-3">
                          {!msg.read && (
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-indigo inline-block animate-pulse shrink-0" />
                          )}
                          <span className={!msg.read ? "text-white" : "text-slate-400 font-normal"}>
                            {msg.name}
                          </span>
                        </td>

                        {/* Email Column */}
                        <td className="p-4">
                          <span className={!msg.read ? "text-slate-350 font-semibold" : "text-slate-500"}>
                            {msg.email}
                          </span>
                        </td>

                        {/* Date Column */}
                        <td className="p-4 text-slate-500 text-xs">
                          {msg.createdAt
                            ? new Date(msg.createdAt).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "-"}
                        </td>

                        {/* Actions Column */}
                        <td className="p-4 text-right pr-6">
                          <div className="inline-flex gap-2">
                            <button
                              onClick={() => {
                                if (!msg.read) {
                                  markAsRead(msg.id);
                                }
                                setSelectedMessage(msg);
                                setShowModal(true);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-indigo/10 hover:border-brand-indigo/30 bg-brand-indigo/5 hover:bg-brand-indigo/10 text-brand-indigo text-xs font-bold transition cursor-pointer"
                            >
                              <FaEye size={11} />
                              Open
                            </button>

                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/10 hover:border-red-500/30 bg-red-500/5 hover:bg-red-500/10 text-red-400 text-xs font-bold transition cursor-pointer"
                            >
                              <FaTrash size={11} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4 text-left">
              {messages.length === 0 ? (
                <div className="glass-panel rounded-2xl p-12 text-center text-slate-550 border border-white/5">
                  No messages found
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`glass-panel rounded-2xl p-5 border shadow-lg ${
                      !msg.read ? "border-brand-indigo/30 bg-brand-indigo/[0.01]" : "border-white/5"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white flex items-center gap-2 text-base">
                        {!msg.read && (
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-indigo inline-block animate-pulse shrink-0" />
                        )}
                        {msg.name}
                      </h4>
                      
                      {!msg.read && (
                        <span className="text-[9px] font-extrabold tracking-wider bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20 px-2.5 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="text-slate-400 text-xs mt-1.5 break-all">
                      {msg.email}
                    </p>

                    <div className="h-[1px] bg-slate-900 my-4" />

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 text-xs font-medium">
                        {msg.createdAt
                          ? new Date(msg.createdAt).toLocaleDateString()
                          : "-"}
                      </span>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            if (!msg.read) {
                              markAsRead(msg.id);
                            }
                            setSelectedMessage(msg);
                            setShowModal(true);
                          }}
                          className="px-3.5 py-2 rounded-lg bg-brand-indigo text-slate-950 text-xs font-extrabold cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="px-3.5 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {/* Modal display portal */}
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
    </div>
  );
}

export default AdminDashboard;