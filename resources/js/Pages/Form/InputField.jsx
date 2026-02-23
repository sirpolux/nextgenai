export default function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    required = false,
    placeholder = "",
    error = ""
}) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition
                    ${error 
                        ? "border-red-500 focus:ring-2 focus:ring-red-200" 
                        : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    }`}
            />

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}