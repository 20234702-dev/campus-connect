import { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: BadgeProps) {
  return (
    <span 
      className={`${styles.badge} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
