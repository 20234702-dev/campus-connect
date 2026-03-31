import { Search, SlidersHorizontal } from 'lucide-react';
import ItemCard, { CardItem } from '@/components/ItemCard';
import styles from '../lost/page.module.css';

// Using mock data for now
const foundItems: CardItem[] = [
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
    id: '6',
    type: 'FOUND',
    title: 'Gold Framed Glasses',
    category: 'Accessories',
    dateOccurred: '2026-03-12',
    location: 'Campus Recreation Center',
    description: 'Found near the treadmills. Thin gold frames, prescription lenses. Left them at the front desk.',
    status: 'ACTIVE'
  },
  {
    id: '7',
    type: 'FOUND',
    title: 'Student ID - John Smith',
    category: 'ID/Cards',
    dateOccurred: '2026-03-13',
    location: 'Dining Hall',
    description: 'Found a student ID for "John Smith" on a table in the dining hall. Handed it to the cashier.',
    status: 'RESOLVED'
  }
];

export default function FoundItemsPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Found Items</h1>
          <p className={styles.pageDescription}>
            Browse items found around campus. Are you looking for something you lost?
          </p>
        </div>
        <div className={styles.countBadge}>{foundItems.length} Items</div>
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
              <option value="semester">This Semester</option>
            </select>
          </div>
          
          <button className={styles.moreFilterBtn}>
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {foundItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      
      <div className={styles.pagination}>
        <button className={styles.pageBtn} disabled>Previous</button>
        <div className={styles.pageNumbers}>
          <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
        </div>
        <button className={styles.pageBtn} disabled>Next</button>
      </div>
    </div>
  );
}
