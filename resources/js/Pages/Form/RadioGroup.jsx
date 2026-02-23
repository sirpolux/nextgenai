export default function RadioGroup({
    label,
    name,
    options = [],
    value,
    onChange,
    required = false,
    error = ""
}) {
    return (
        <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <div className="space-y-2">
                {options.map((option, index) => (
                    <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option}
                            checked={value === option}
                            onChange={onChange}
                            required={required}
                            className="accent-orange-500"
                        />
                        <span className="text-gray-700">
                            {option}
                        </span>
                    </label>
                ))}
            </div>

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}