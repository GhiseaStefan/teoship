'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '../../lib/useTranslation';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
    });
    const [agreedToMarketing, setAgreedToMarketing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL;

            if (!serviceId || !templateId || !publicKey || !toEmail) {
                throw new Error('EmailJS configuration incomplete. Check environment variables.');
            }

            if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
                throw new Error('All fields are required');
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                company: formData.company,
                message: formData.message,
                marketing_consent: agreedToMarketing ? 'Da' : 'Nu',
                to_email: toEmail,
                reply_to: formData.email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setSubmitStatus('success');
            setFormData({
                name: '',
                phone: '',
                email: '',
                company: '',
                message: ''
            });
            setAgreedToMarketing(false);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
                <p className={styles.subtitle}>{t('contact.subtitle')}</p>
                <h1 className={styles.title}>{t('contact.title')}</h1>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.leftSection}>
                    <h2 className={styles.leftTitle}>{t('contact.leftTitle')}</h2>
                    <p className={styles.leftDescription}>
                        {t('contact.leftDescription')}
                    </p>
                </div>

                <div className={styles.rightSection}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="name" className={styles.label}>
                                    {t('contact.form.name')}*
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
                                    {t('contact.form.phone')}*
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
                                    {t('contact.form.email')}*
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
                                    {t('contact.form.company')}*
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
                                {t('contact.form.message')}*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={styles.textarea}
                                placeholder={t('contact.form.placeholder')}
                                required
                            />
                        </div>

                        <div className={styles.disclaimer}>
                            <p className={styles.disclaimerText}>
                                {t('contact.form.disclaimer')}
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
                                {t('contact.form.checkbox')}
                            </label>
                        </div>

                        {/* Feedback messages */}
                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ✅ {t('contact.form.success')}
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className={styles.errorMessage}>
                                ❌ {t('contact.form.error')}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isLoading}
                        >
                            {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}