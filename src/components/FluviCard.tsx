import * as React from 'react';
import { cn } from '../utils/cn';

interface FluviCardProps {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  variant?: 'glass' | 'outline' | 'flat' | 'gradient';
  className?: string;
}

export const FluviCard: React.FC<FluviCardProps> = ({ 
  title, description, image, badge, variant = 'flat', className 
}) => {
  const variants = {
    glass: "bg-white/10 backdrop-blur-md border border-white/20",
    outline: "border-2 border-primary/20 hover:border-primary transition-all",
    flat: "bg-base-200 hover:bg-base-300 transition-colors",
    gradient: "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10"
  };

  return (
    <div className={cn("rounded-2xl p-6 shadow-sm flex flex-col gap-4", variants[variant], className)}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />}
      {badge && <span className="badge badge-primary badge-sm w-fit uppercase font-bold">{badge}</span>}
      <h3 className="text-xl font-bold text-base-content">{title}</h3>
      {description && <p className="text-sm opacity-70 leading-relaxed">{description}</p>}
      <div className="mt-auto pt-4">
        <button className="btn btn-sm btn-primary">Learn More</button>
      </div>
    </div>
  );
};