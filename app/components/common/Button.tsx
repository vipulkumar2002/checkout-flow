interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "custom";
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "default",
    className = "",
    disabled = false,
    ...props
}) => {
    const baseStyle =
        "px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles: Record<"default" | "outline" | "custom", string> = {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
        custom: "",
    };

    return (
        <button
            disabled={disabled}
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
