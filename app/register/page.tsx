import Link from 'next/link';
import { Mail, Lock, User, Building } from 'lucide-react';
import styles from '../login/auth.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create an Account</h1>
          <p className={styles.subtitle}>Join Campus Connect to quickly report listings</p>
        </div>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={18} />
              <input 
                type="text" 
                id="name" 
                className={styles.input} 
                placeholder="Jane Doe"
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>School Email</label>
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
            <label htmlFor="campus" className={styles.label}>Campus / University</label>
            <div className={styles.inputWrapper}>
              <Building className={styles.inputIcon} size={18} />
              <input 
                type="text" 
                id="campus" 
                className={styles.input} 
                placeholder="State University"
                required 
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
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
            Create Account
          </button>
        </form>
        
        <div className={styles.footer}>
          <p>Already have an account? <Link href="/login" className={styles.registerLink}>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}
