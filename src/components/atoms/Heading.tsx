
import React from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ as: Component = 'h2', children, className = '' }) => {
  const sizeClasses = {
    h1: 'text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-display font-semibold',
    h4: 'text-xl md:text-2xl font-display font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
  };

  return (
    <Component className={`${sizeClasses[Component]} ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;
