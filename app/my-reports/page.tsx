import Link from 'next/link';
import { Edit2, Trash2, MessageCircle, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

// Mock data
const myItems = [
  {
    id: '1',
    type: 'LOST',
    title: 'MacBook Pro Charger',
    dateOccurred: '2026-03-10',
    status: 'ACTIVE',
    unreadMessages: 2,
    createdAt: '2026-03-10T16:00:00Z'
  },
  {
    id: '2',
    type: 'FOUND',
    title: 'Blue Hydroflask',
    dateOccurred: '2026-03-11',
    status: 'ACTIVE',
    unreadMessages: 0,
    createdAt: '2026-03-11T09:30:00Z'
  },
  {
    id: '5',
    type: 'LOST',
    title: 'Black North Face Beanie',
    dateOccurred: '2026-03-08',
    status: 'RESOLVED',
    unreadMessages: 0,
    createdAt: '2026-03-08T11:15:00Z'
  }
];

export default function MyReportsPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>My Reports</h1>
          <p className={styles.subtitle}>Manage the items you've reported lost or found</p>
        </div>
        <Link href="/report" className={styles.newReportBtn}>
          + New Report
        </Link>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Item Title</th>
              <th>Type</th>
              <th>Date Posted</th>
              <th>Status</th>
              <th>Messages</th>
              <th className={styles.actionsColumn}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map(item => {
              const isActive = item.status === 'ACTIVE';
              return (
                <tr key={item.id} className={!isActive ? styles.rowResolved : ''}>
                  <td className={styles.titleCell}>
                    <Link href={`/item/${item.id}`} className={styles.itemLink}>
                      {item.title}
                    </Link>
                  </td>
                  <td>
                    <span className={`${styles.typeBadge} ${item.type === 'LOST' ? styles.typeLost : styles.typeFound}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className={styles.dateCell}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${isActive ? styles.statusActive : styles.statusResolved}`}>
                      {isActive ? 'Active' : 'Resolved'}
                    </span>
                  </td>
                  <td>
                    <div className={styles.messagesBadge}>
                      <MessageCircle size={16} className={item.unreadMessages > 0 ? styles.hasMessagesIcon : styles.noMessagesIcon} />
                      <span className={item.unreadMessages > 0 ? styles.hasMessagesText : styles.noMessagesText}>
                        {item.unreadMessages} {item.unreadMessages === 1 ? 'New' : 'New'}
                      </span>
                    </div>
                  </td>
                  <td className={styles.actionsCell}>
                    <div className={styles.actionGroup}>
                      {isActive && (
                        <button className={`${styles.actionBtn} ${styles.actionResolve}`} title="Mark as Resolved">
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button className={`${styles.actionBtn} ${styles.actionEdit}`} title="Edit Report">
                        <Edit2 size={18} />
                      </button>
                      <button className={`${styles.actionBtn} ${styles.actionDelete}`} title="Delete Report">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {myItems.length === 0 && (
        <div className={styles.emptyState}>
          <p>You haven't posted any reports yet.</p>
          <Link href="/report" className={styles.emptyLink}>Report an item now</Link>
        </div>
      )}
    </div>
  );
}
