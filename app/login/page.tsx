import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import styles from './auth.module.css';

export default function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to manage your reports and messages</p>
        </div>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} size={18} />
              <input 
                type="email" 
                id="email" 
                className={styles.input} 
                placeholder="student@campus.edu"
                required 
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <Link href="#" className={styles.forgotLink}>Forgot password?</Link>
            </div>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input 
                type="password" 
                id="password" 
                className={styles.input} 
                placeholder="••••••••"
                required 
              />
            </div>
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
        </form>
        
        <div className={styles.footer}>
          <p>Don&apos;t have an account? <Link href="/register" className={styles.registerLink}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
