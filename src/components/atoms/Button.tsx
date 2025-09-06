
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-semibold text-center transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink';
  
  const variantClasses = {
    primary: 'bg-brand text-ink hover:bg-brand-dark focus:ring-brand',
    secondary: 'bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-ink focus:ring-brand',
    ghost: 'text-light-200 hover:text-brand focus:ring-brand'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
