import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h2 className={styles.brandTitle}>Campus Connect</h2>
            <p className={styles.brandDesc}>
              Reuniting campus, one item at a time. The community platform for lost and found items.
            </p>
          </div>
          
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/lost">Lost Items</Link>
              <Link href="/found">Found Items</Link>
              <Link href="/report">Report an Item</Link>
            </div>
          </div>
          
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Support</h3>
            <div className={styles.links}>
              <Link href="/about">About Us</Link>
              <Link href="/about#faq">FAQ</Link>
              <a href="mailto:support@campusconnect.edu">Contact</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© {currentYear} Campus Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
