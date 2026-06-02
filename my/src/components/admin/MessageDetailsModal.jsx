function MessageDetailsModal({
    message,
    isOpen,
    onClose,
    onDelete,
}) {
    if (!isOpen || !message) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">

            <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-slate-800">

                    <div className="flex justify-between items-start">

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-2xl">
                                👤
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Message Details
                                </h2>

                                <p className="text-gray-400">
                                    Contact form submission
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white transition text-xl"
                        >
                            ✕
                        </button>

                    </div>

                </div>

                {/* Content */}
                <div className="p-6 space-y-6">

                    {/* Sender Info */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-slate-800 rounded-2xl p-4">
                            <p className="text-gray-400 text-sm mb-1">
                                Name
                            </p>

                            <p className="text-white font-medium">
                                {message.name}
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-4">
                            <p className="text-gray-400 text-sm mb-1">
                                Email
                            </p>

                            <p className="text-white font-medium break-all">
                                {message.email}
                            </p>
                        </div>

                    </div>

                    {/* Date */}
                    <div className="bg-slate-800 rounded-2xl p-4">
                        <p className="text-gray-400 text-sm mb-1">
                            Received
                        </p>

                        <p className="text-white">
                            {message.createdAt
                                ? new Date(
                                    message.createdAt
                                ).toLocaleString()
                                : "-"}
                        </p>
                    </div>

                    {/* Message */}
                    <div>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">
                                💬
                            </span>

                            <h3 className="text-lg font-semibold text-white">
                                Message
                            </h3>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">

                            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">
                                {message.message}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="border-t border-slate-800 p-6">

                    <div className="flex flex-col-reverse md:flex-row justify-end gap-3">

                        <button
                            onClick={onClose}
                            className="
                px-5
                py-3
                rounded-xl
                bg-slate-800
                hover:bg-slate-700
                text-white
                transition
              "
                        >
                            Close
                        </button>

                        <button
                            onClick={() =>
                                onDelete(message.id)
                            }
                            className="
                px-5
                py-3
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                font-medium
                transition
              "
                        >
                            Delete Message
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MessageDetailsModal;