import React from 'react';
import { cn } from '../utils/cn';

interface FluviProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'main';
  minWidth?: string;
  gap?: string;
  className?: string;
}

export const FluviDiv: React.FC<FluviProps> = ({
  children,
  as: Component = 'div',
  minWidth = '280px',
  gap = '1.5rem',
  className,
}) => {
  return (
    <Component
      className={cn('w-full grid', className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}), 1fr))`,
        gap: gap,
      }}
    >
      {children}
    </Component>
  );
};