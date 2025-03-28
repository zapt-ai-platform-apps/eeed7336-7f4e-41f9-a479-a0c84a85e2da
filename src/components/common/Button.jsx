import React from 'react';

export default function Button({ children, onClick, type = 'primary', disabled = false, className = '', ...props }) {
  const baseClasses = "py-2 px-4 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const typeClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500"
  };
  
  const disabledClasses = "opacity-50 cursor-not-allowed";
  
  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${disabled ? disabledClasses : ''} ${className}`;
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}