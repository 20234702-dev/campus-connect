import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero */}
      <div className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>About Campus Connect</h1>
          <p className={styles.heroSubtitle}>Built by students, for students. We believe that losing something on campus shouldn't mean losing it forever.</p>
        </div>
      </div>
      
      <div className={`container ${styles.contentContainer}`}>
        {/* Mission Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.textContent}>
            <p>Every year, thousands of valuable items are lost across university campuses — from laptops and textbooks to crucial dorm keys and IDs. While campus police and individual building front desks offer physical lost-and-found boxes, there is rarely a centralized, accessible way for students to connect with each other directly.</p>
            <p>Campus Connect bridges that gap. It's a digital bulletin board dedicated specifically to reuniting students and faculty with their misplaced belongings as quickly and safely as possible.</p>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className={styles.section} id="faq">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is my contact information private?</h3>
              <p className={styles.faqAnswer}>Yes. Your email address is only shared when another student actively clicks "Contact Poster" on your listing to send you a message. You can also choose to post items anonymously if you prefer your name not to be shown publicly on the listing.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How long are listings kept active?</h3>
              <p className={styles.faqAnswer}>Listings remain active for 90 days. After that, they are automatically archived. You can mark an item as "Reunited" or "Claimed" at any time to update its status without deleting the record.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What should I do if I find an expensive item like a laptop?</h3>
              <p className={styles.faqAnswer}>For highly valuable items, we recommend turning them in to the Campus Police or the main student union desk immediately, then creating a "Found" listing here stating exactly where you turned it in. This avoids the liability of holding onto expensive property while still helping the owner locate it.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can anyone use this site?</h3>
              <p className={styles.faqAnswer}>Currently, you need a valid `.edu` university email address to register for an account and contact posters. Anyone can browse the active listings to see if their item has been found.</p>
            </div>
            
          </div>
        </section>
        
        {/* Contact Section */}
        <section className={styles.section}>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Still have questions?</h2>
              <p className={styles.contactDesc}>We're a student-run team and we'd love to hear your feedback, feature requests, or bug reports.</p>
              
              <a href="mailto:support@campusconnect.edu" className={styles.contactBtn}>
                <Mail size={18} />
                Email Support Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
