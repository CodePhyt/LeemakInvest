import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, Menu } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-serif font-bold text-gray-900">Leemak Invest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">{t('nav.home')}</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary-600">{t('nav.projects')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">{t('nav.about')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">{t('nav.contact')}</Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => changeLanguage('ru')}
              className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-2 py-1 rounded ${i18n.language === 'tr' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600">{t('nav.home')}</Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary-600">{t('nav.projects')}</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600">{t('nav.about')}</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600">{t('nav.contact')}</Link>
              
              <div className="flex space-x-2 pt-4">
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
                >
                  RU
                </button>
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`px-2 py-1 rounded ${i18n.language === 'tr' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
                >
                  TR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;