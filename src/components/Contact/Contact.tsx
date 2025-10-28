'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: 'Vlad Ionescu',
        phone: '0723456789',
        email: 'vlad.ionescu@company.com',
        company: 'Tech Solutions SRL',
        message: ''
    });
    const [agreedToMarketing, setAgreedToMarketing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
                <p className={styles.subtitle}>Hai sa vorbim!</p>
                <h1 className={styles.title}>Cu ce te putem ajuta?</h1>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.leftSection}>
                    <h2 className={styles.leftTitle}>Lasa-ne un mesaj</h2>
                    <p className={styles.leftDescription}>
                        Completeaza acest formular si trimite-ne intrebarile tale.
                    </p>
                </div>

                <div className={styles.rightSection}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="name" className={styles.label}>
                                    Nume/prenume*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="phone" className={styles.label}>
                                    Numar de telefon*
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="email" className={styles.label}>
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="company" className={styles.label}>
                                    Denumire companie*
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.textareaContainer}>
                            <label htmlFor="message" className={styles.label}>
                                Mesaj*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={styles.textarea}
                                placeholder="Spune-ne cu ce informatii te putem ajuta..."
                                required
                            />
                        </div>

                        <div className={styles.disclaimer}>
                            <p className={styles.disclaimerText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                            <p className={styles.disclaimerText}>
                                Citeste <a href="#" className={styles.link}>aici</a> informatii detaliate despre prelucrarea datelor tale personale.
                            </p>
                        </div>

                        <div className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                id="marketing"
                                checked={agreedToMarketing}
                                onChange={(e) => setAgreedToMarketing(e.target.checked)}
                                className={styles.checkbox}
                            />
                            <label htmlFor="marketing" className={styles.checkboxLabel}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptate numquam consequuntur laudantium temporibus tenetur, dignissimos esse? Error corporis tenetur dignissimos excepturi iure atque provident at, sint totam eligendi qui!
                            </label>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Trimiteti
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}