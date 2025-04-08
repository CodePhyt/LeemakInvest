import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-2">
              <p>Leyla: +90 535 607 85 74</p>
              <p>Mikail: +90 553 190 61 17</p>
              <p>Email: info@leemakinvest.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/leemakinvest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@LeemakInvest"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Team Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.ourTeam')}</h3>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/selimleyla/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary-400 transition-colors"
              >
                {t('footer.leylasInstagram')}
              </a>
              <a
                href="https://www.instagram.com/bedelnadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary-400 transition-colors"
              >
                {t('footer.bedelsInstagram')}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
