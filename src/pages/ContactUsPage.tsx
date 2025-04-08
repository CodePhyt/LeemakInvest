import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">
              {t('contact.getInTouch')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
                  <p>Leyla: +90 535 607 85 74</p>
                  <p>Mikail: +90 553 190 61 17</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
                  <p>info@leemakinvest.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{t('contact.office')}</h3>
                  <p>Lara Caddesi, No: 123</p>
                  <p>Muratpaşa, Antalya</p>
                  <p>07100 Turkey</p>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{t('contact.socialMedia')}</h3>
                  <a
                    href="https://www.instagram.com/leemakinvest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    @leemakinvest
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12">
              <h3 className="text-xl font-serif font-bold mb-4">
                {t('contact.officeHours')}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">{t('contact.weekdays')}:</span> 9:00 - 18:00
                </p>
                <p>
                  <span className="font-semibold">{t('contact.saturday')}:</span> 10:00 - 15:00
                </p>
                <p>
                  <span className="font-semibold">{t('contact.sunday')}:</span> {t('contact.closed')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-serif font-bold mb-8">
              {t('contact.form.title')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn"
              >
                {status === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">{t('contact.form.success')}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">{t('contact.form.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
