import React from "react";
import { FaUser, FaEnvelope, FaClock, FaCommentAlt, FaTrash, FaTimes } from "react-icons/fa";

function MessageDetailsModal({
  message,
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen || !message) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[9999] flex items-center justify-center p-4">
      <div className="bg-[#020617]/95 border border-white/5 rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden">
        
        {/* Border header line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-brand-indigo to-brand-violet" />

        {/* Modal Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition cursor-pointer"
        >
          <FaTimes size={16} />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo flex items-center justify-center text-lg">
              <FaCommentAlt size={16} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white">Message Details</h2>
              <p className="text-slate-500 text-xs mt-0.5 font-semibold uppercase tracking-wider">Submitted via portfolio contact form</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Sender Details Grid */}
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1">
                <FaUser size={10} /> Sender Name
              </p>
              <p className="text-white font-medium text-sm sm:text-base">
                {message.name}
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1">
                <FaEnvelope size={10} /> Email Address
              </p>
              <a href={`mailto:${message.email}`} className="text-brand-indigo font-medium hover:underline text-sm sm:text-base break-all">
                {message.email}
              </a>
            </div>
          </div>

          {/* Time Stamp */}
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1">
              <FaClock size={10} /> Date Received
            </p>
            <p className="text-slate-350 text-sm">
              {message.createdAt
                ? new Date(message.createdAt).toLocaleString(undefined, {
                    dateStyle: "full",
                    timeStyle: "short",
                  })
                : "-"}
            </p>
          </div>

          {/* Message Text area */}
          <div className="flex flex-col gap-2 text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Message Content
            </h3>
            <div className="bg-slate-950/70 rounded-2xl p-5 border border-white/5 max-h-48 overflow-y-auto">
              <p className="text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">
                {message.message}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/5 px-6 py-5 bg-slate-950/50 flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/5 hover:bg-slate-900 text-slate-300 hover:text-white transition duration-200 text-sm font-semibold cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => onDelete(message.id)}
            className="px-5 py-2.5 rounded-xl bg-red-550/10 hover:bg-red-650 border border-red-500/20 text-red-400 hover:text-white transition duration-200 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaTrash size={12} />
            Delete Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default MessageDetailsModal;