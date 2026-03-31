import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export default function Card({ 
  children, 
  padding = 'md',
  shadow = 'md',
  bordered = false,
  className = '',
  ...props 
}: CardProps) {
  return (
    <div 
      className={`
        ${styles.card} 
        ${styles[`padding-${padding}`]} 
        ${styles[`shadow-${shadow}`]} 
        ${bordered ? styles.bordered : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
