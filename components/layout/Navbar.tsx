import Link from 'next/link';
import { Search, MapPin, Menu, User } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbarContainer}`}>
        
        {/* Logo Section */}
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoIconPairs}>
            <Search className={styles.iconSearch} size={20} strokeWidth={3} />
            <MapPin className={styles.iconPin} size={20} strokeWidth={3} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.brandTitle}>Campus Connect</span>
            <span className={styles.brandSubtitle}>We Connect.</span>
          </div>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/lost" className={styles.navLink}>Lost Items</Link>
          <Link href="/found" className={styles.navLink}>Found Items</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          
          <div className={styles.divider}></div>
          
          <Link href="/report" className={styles.reportBtn}>
            Report an Item
          </Link>
          
          <Link href="/login" className={styles.loginBtn}>
            <User size={18} />
            Login
          </Link>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button className={styles.mobileMenuBtn} aria-label="Toggle navigation">
          <Menu size={28} />
        </button>
        
      </div>
    </header>
  );
}
