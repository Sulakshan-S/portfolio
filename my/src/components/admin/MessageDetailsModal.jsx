function MessageDetailsModal({
    message,
    isOpen,
    onClose,
    onDelete,
}) {
    if (!isOpen || !message) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl p-6">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Message Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-5">
                    <div>
                        <p className="text-gray-400">Name</p>
                        <p className="text-white">{message.name}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white">{message.email}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Received</p>
                        <p className="text-white">
                            {message.createdAt
                                ? new Date(
                                    message.createdAt
                                ).toLocaleString()
                                : "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Message</p>

                        <div className="bg-slate-800 rounded-lg p-4 mt-2">
                            <p className="text-white whitespace-pre-wrap">
                                {message.message}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">

                    <button
                        onClick={() => onDelete(message.id)}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
                    >
                        Delete
                    </button>

                    <button
                        onClick={onClose}
                        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white"
                    >
                        Close
                    </button>

                </div>
            </div>
        </div>
    );
}

export default MessageDetailsModal;