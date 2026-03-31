import Link from 'next/link';
import { Search, PlusCircle, CheckCircle, Navigation } from 'lucide-react';
import ItemCard, { CardItem } from '@/components/ItemCard';
import styles from './page.module.css';

// Mock data for initial home page display before db is hooked up
const recentItems: CardItem[] = [
  {
    id: '1',
    type: 'LOST',
    title: 'MacBook Pro Charger',
    category: 'Electronics',
    dateOccurred: '2026-03-10',
    location: 'Main Library, 2nd Floor',
    description: 'White Apple MacBook charger. Left it plugged into the wall near the north windows.',
    status: 'ACTIVE'
  },
  {
    id: '2',
    type: 'FOUND',
    title: 'Blue Hydroflask',
    category: 'Accessories',
    dateOccurred: '2026-03-11',
    location: 'Science Building, Room 402',
    description: 'Dark blue 32oz Hydroflask water bottle with a couple college stickers on it.',
    status: 'ACTIVE'
  },
  {
    id: '3',
    type: 'LOST',
    title: 'Chemistry 101 Textbook',
    category: 'Books/Notes',
    dateOccurred: '2026-03-09',
    location: 'Student Union Cafe',
    description: 'Hardcover Chemistry textbook, 8th edition. Has my initials "J.D." written on the inside cover.',
    status: 'ACTIVE'
  }
];

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* ... previous sections ... */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Reuniting Campus, One Item at a Time</h1>
            <p className={styles.heroSubtitle}>
              The official lost and found bulletin for students and staff. Did you lose something important, or find an item that belongs to someone else? Let&apos;s get it back to its owner.
            </p>
            <div className={styles.heroActions}>
              <Link href="/report?type=lost" className={styles.btnPrimary}>
                <Search size={20} />
                Report Lost Item
              </Link>
              <Link href="/report?type=found" className={styles.btnSecondary}>
                <PlusCircle size={20} />
                Report Found Item
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>342</span>
            <span className={styles.statLabel}>Items Reported</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>128</span>
            <span className={styles.statLabel}>Items Reunited</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>214</span>
            <span className={styles.statLabel}>Active Listings</span>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIconWrapper}>
                <Navigation size={32} className={styles.stepIcon} />
                <div className={styles.stepNumber}>1</div>
              </div>
              <h3 className={styles.stepTitle}>Report your item</h3>
              <p className={styles.stepDesc}>Post a detailed description and photo of the item you lost or found on campus.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepIconWrapper}>
                <Search size={32} className={styles.stepIcon} />
                <div className={styles.stepNumber}>2</div>
              </div>
              <h3 className={styles.stepTitle}>Get matched</h3>
              <p className={styles.stepDesc}>Browse the listings or let our filters help you find potential matches quickly.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepIconWrapper}>
                <CheckCircle size={32} className={styles.stepIcon} />
                <div className={styles.stepNumber}>3</div>
              </div>
              <h3 className={styles.stepTitle}>Reunite & recover</h3>
              <p className={styles.stepDesc}>Contact the poster securely through our platform and arrange to return the item.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section className={styles.recentListings}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recently Reported</h2>
            <div className={styles.viewAllLinks}>
              <Link href="/lost" className={styles.viewAllLink}>View All Lost &rarr;</Link>
              <Link href="/found" className={styles.viewAllLink}>View All Found &rarr;</Link>
            </div>
          </div>
          
          <div className={styles.listingsGrid}>
            {recentItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Our Campus Says</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"I lost my specific key fob and thought it was gone forever. Thanks to this platform, a nice engineering student found it and returned it the next day!"</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>S</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Sarah J.</div>
                  <div className={styles.authorCourse}>Biology Major</div>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"Found a stray laptop charger in the library and posted it here. The owner messaged me within an hour. Such a lifesaver for all of us."</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>M</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Marcus T.</div>
                  <div className={styles.authorCourse}>Computer Science</div>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★☆</div>
              <p className={styles.quote}>"It's so much better than posting in random WhatsApp groups and hoping someone sees it. Beautiful and simple interface."</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>E</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Elena R.</div>
                  <div className={styles.authorCourse}>Business Admin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
