import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';
import styles from './ItemCard.module.css';

// Using a partial type for the card UI display
export type CardItem = {
  id: string;
  type: "LOST" | "FOUND";
  title: string;
  category: string;
  dateOccurred: string;
  location: string;
  description: string;
  photoUrl?: string;
  status: "ACTIVE" | "RESOLVED";
}

export default function ItemCard({ item }: { item: CardItem }) {
  const isResolved = item.status === "RESOLVED";
  const statusColors = {
    ACTIVE: item.type === "LOST" ? styles.statusMissing : styles.statusUnclaimed,
    RESOLVED: styles.statusResolved
  };
  
  const statusLabel = {
    LOST: { ACTIVE: "Still Missing", RESOLVED: "Reunited!" },
    FOUND: { ACTIVE: "Unclaimed", RESOLVED: "Claimed!" }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {item.photoUrl ? (
          <img src={item.photoUrl} alt={item.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderText}>No Photo</span>
          </div>
        )}
        <div className={`${styles.badge} ${statusColors[item.status]}`}>
          {statusLabel[item.type][item.status]}
        </div>
        <div className={styles.typeTag}>
          {item.type}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{item.title}</h3>
          <span className={styles.categoryBadge}>{item.category}</span>
        </div>
        
        <p className={styles.description}>
          {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
        </p>
        
        <div className={styles.details}>
          <div className={styles.detailRow}>
             <Clock size={16} className={styles.detailIcon} />
             <span>{new Date(item.dateOccurred).toLocaleDateString()}</span>
          </div>
          <div className={styles.detailRow}>
             <MapPin size={16} className={styles.detailIcon} />
             <span>{item.location}</span>
          </div>
        </div>
        
        <div className={styles.actions}>
          <Link href={`/item/${item.id}`} className={styles.viewBtn}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
