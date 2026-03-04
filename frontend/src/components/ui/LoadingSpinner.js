import React from 'react';
import { cn } from '../../utils/helpers';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary', 
  className,
  text,
  showLogo = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-brand-primary',
    secondary: 'border-brand-secondary',
    white: 'border-white',
    gray: 'border-gray-600'
  };

  if (showLogo) {
    return (
      <div className={cn('flex flex-col items-center justify-center', className)}>
        <div className="relative">
          <img 
            src="/assets/logo.png" 
            alt="Platinum Healthcare Logo" 
            className={cn('object-contain animate-pulse', sizeClasses[size])}
          />
          <div
            className={cn(
              'absolute inset-0 animate-spin rounded-full border-2 border-gray-200',
              sizeClasses[size],
              colorClasses[color],
              'border-t-transparent'
            )}
          />
        </div>
        {text && (
          <p className="mt-2 text-sm text-gray-600">{text}</p>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-200',
          sizeClasses[size],
          colorClasses[color],
          'border-t-transparent'
        )}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;