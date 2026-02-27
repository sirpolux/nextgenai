import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

export default function SuccessAlert({
    message,
    show,
    onClose,
    autoClose = true,
    duration = 4000,
}) {
    useEffect(() => {
        if (show && autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-6 right-6 z-50"
                >
                    <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-2xl shadow-xl w-[350px]">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1" />

                        <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                                Success
                            </h4>
                            <p className="text-sm mt-1">{message}</p>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-green-500 hover:text-green-700 transition"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}