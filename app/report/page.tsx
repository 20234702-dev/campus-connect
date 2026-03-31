'use client';

import { useState } from 'react';
import { Camera, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';
import styles from './page.module.css';

export default function ReportPage() {
  const [reportType, setReportType] = useState<'lost' | 'found'>('lost');

  return (
    <div className={`container ${styles.pageWrapper}`}>
      <div className={styles.formContainer}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Report an Item</h1>
          <p className={styles.subtitle}>
            Please provide as much detail as possible to help us match this item.
          </p>
        </div>

        {/* Tab Selection */}
        <div className={styles.tabs}>
          <button 
            className={`${styles.tabBtn} ${reportType === 'lost' ? styles.activeTabLost : ''}`}
            onClick={() => setReportType('lost')}
            type="button"
          >
            I Lost Something
          </button>
          <button 
            className={`${styles.tabBtn} ${reportType === 'found' ? styles.activeTabFound : ''}`}
            onClick={() => setReportType('found')}
            type="button"
          >
            I Found Something
          </button>
        </div>

        {/* Form Body */}
        <form className={styles.form}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Item Details</h2>
            
            <div className={styles.inputGroup}>
              <label htmlFor="title" className={styles.label}>
                What is it? <span className={styles.required}>*</span>
              </label>
              <input 
                type="text" 
                id="title" 
                placeholder="e.g. Blue Hydroflask, Keys, MacBook Pro" 
                className={styles.input} 
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="category" className={styles.label}>
                Category <span className={styles.required}>*</span>
              </label>
              <select id="category" className={styles.select} required defaultValue="">
                <option value="" disabled>Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="books">Books/Notes</option>
                <option value="id">ID/Cards</option>
                <option value="keys">Keys</option>
                <option value="bags">Bags</option>
                <option value="sports">Sports Equipment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="description" className={styles.label}>
                Description <span className={styles.required}>*</span>
              </label>
              <textarea 
                id="description" 
                rows={4} 
                className={styles.textarea} 
                placeholder="Describe color, brand, unique marks, size, etc."
                required
              ></textarea>
            </div>
            
            <div className={styles.photoUpload}>
              <label className={styles.label}>Photo (Optional but recommended)</label>
              <div className={styles.uploadArea}>
                <Camera size={32} className={styles.uploadIcon} />
                <p className={styles.uploadText}>Click to upload or drag and drop</p>
                <p className={styles.uploadHint}>JPG, PNG, max 5MB</p>
                <input type="file" className={styles.fileInput} accept="image/*" />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>When & Where</h2>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="date" className={styles.label}>
                  Date <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWithIcon}>
                  <Calendar size={18} className={styles.fieldIcon} />
                  <input type="date" id="date" className={styles.input} required />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="time" className={styles.label}>
                  Approx Time (Optional)
                </label>
                <div className={styles.inputWithIcon}>
                  <Clock size={18} className={styles.fieldIcon} />
                  <input type="time" id="time" className={styles.input} />
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="location" className={styles.label}>
                Location on Campus <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWithIcon}>
                <MapPin size={18} className={styles.fieldIcon} />
                <input 
                  type="text" 
                  id="location" 
                  className={styles.input} 
                  placeholder="e.g. Student Union, Library 2nd Floor, North Parking"
                  required 
                />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Your Details</h2>
            <div className={styles.infoBanner}>
              <AlertCircle size={20} className={styles.infoIcon} />
              <p>Your contact details will only be shared with the person who claims or returns this item.</p>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input type="email" id="email" className={styles.input} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number (Optional)
                </label>
                <input type="tel" id="phone" className={styles.input} />
              </div>
            </div>
            
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="anonymous" className={styles.checkbox} />
              <label htmlFor="anonymous" className={styles.checkboxLabel}>
                Post Anonymously (Hide my name publicly)
              </label>
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitBtn}>
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
