import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  disabled, 
  fullWidth, 
  type = "button", 
  className 
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
        text-white
        py-2
        px-4
        rounded
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
