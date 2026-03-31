import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ItemCard, { CardItem } from '@/components/ItemCard';
import styles from './page.module.css';

// Using mock data for now
const lostItems: CardItem[] = [
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
    id: '3',
    type: 'LOST',
    title: 'Chemistry 101 Textbook',
    category: 'Books/Notes',
    dateOccurred: '2026-03-09',
    location: 'Student Union Cafe',
    description: 'Hardcover Chemistry textbook, 8th edition. Has my initials "J.D." written on the inside cover.',
    status: 'ACTIVE'
  },
  {
    id: '4',
    type: 'LOST',
    title: 'Car Keys (Honda)',
    category: 'Keys',
    dateOccurred: '2026-03-12',
    location: 'North Parking Lot',
    description: 'Honda car key fob with a blue lanyard and a small bear keychain attached.',
    status: 'ACTIVE'
  },
  {
    id: '5',
    type: 'LOST',
    title: 'Black North Face Beanie',
    category: 'Clothing',
    dateOccurred: '2026-03-08',
    location: 'Recreation Center',
    description: 'Standard black knit beanie from North Face. Left it by the weight room cubbies.',
    status: 'RESOLVED'
  }
];

export default function LostItemsPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Lost Items</h1>
          <p className={styles.pageDescription}>
            Browse items reported lost around campus. If you've found something match it here!
          </p>
        </div>
        <div className={styles.countBadge}>{lostItems.length} Items</div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            placeholder="Search by keyword..." 
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterControls}>
          <div className={styles.dropdownField}>
            <select className={styles.selectInput} defaultValue="">
              <option value="" disabled>All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="books">Books/Notes</option>
              <option value="id">ID/Cards</option>
              <option value="keys">Keys</option>
              <option value="bags">Bags</option>
            </select>
          </div>
          
          <div className={styles.dropdownField}>
            <select className={styles.selectInput} defaultValue="">
              <option value="" disabled>Date Range</option>
              <option value="today">Today</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
            </select>
          </div>
          
          <button className={styles.moreFilterBtn}>
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {lostItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      
      <div className={styles.pagination}>
        <button className={styles.pageBtn} disabled>Previous</button>
        <div className={styles.pageNumbers}>
          <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
          <button className={styles.pageNumber}>2</button>
        </div>
        <button className={styles.pageBtn}>Next</button>
      </div>
    </div>
  );
}
