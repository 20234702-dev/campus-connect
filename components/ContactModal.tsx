'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import styles from './ContactModal.module.css';
import Button from './ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
  itemTitle: string;
}

export default function ContactModal({ isOpen, onClose, itemId, itemTitle }: ContactModalProps) {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      // We will implement the actual API call later.
      // For now this is just UI scaffolding.
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSent(true);
    } catch (error) {
      console.error('Failed to send message', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Poster</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className={styles.body}>
          {isSent ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successDesc}>
                The poster will receive an email with your message and contact info.
              </p>
              <Button onClick={onClose} fullWidth>Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className={styles.helperText}>
                You are sending a message regarding <strong>{itemTitle}</strong>. 
                Your registered email address will be shared so they can reply to you.
              </p>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={styles.textarea}
                  placeholder="Hello, I think this might be mine! Can we meet up so I can describe it in more detail?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div className={styles.actions}>
                <Button variant="outline" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSending || !message.trim()}>
                  {isSending ? 'Sending...' : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
