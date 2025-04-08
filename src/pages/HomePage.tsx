import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  TrendingUp,
  Car,
  HeartHandshake,
  Scale,
} from 'lucide-react';
import Slideshow from '../components/Slideshow';
import ServiceCard from '../components/ServiceCard';
import ProjectPreview from '../components/ProjectPreview';

const HomePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      title: t('services.propertySales'),
      points: [
        t('services.points.propertySales.search'),
        t('services.points.propertySales.viewings'),
        t('services.points.propertySales.negotiation'),
        t('services.points.propertySales.documentation'),
        t('services.points.propertySales.postSale'),
      ],
    },
    {
      icon: Building2,
      title: t('services.propertyRental'),
      points: [
        t('services.points.propertyRental.search'),
        t('services.points.propertyRental.lease'),
        t('services.points.propertyRental.inspection'),
        t('services.points.propertyRental.rights'),
        t('services.points.propertyRental.support'),
      ],
    },
    {
      icon: TrendingUp,
      title: t('services.investment'),
      points: [
        t('services.points.investment.analysis'),
        t('services.points.investment.strategy'),
        t('services.points.investment.roi'),
        t('services.points.investment.risk'),
        t('services.points.investment.portfolio'),
      ],
    },
    {
      icon: Car,
      title: t('services.transfers'),
      points: [
        t('services.points.transfers.pickup'),
        t('services.points.transfers.viewing'),
        t('services.points.transfers.luxury'),
        t('services.points.transfers.availability'),
        t('services.points.transfers.drivers'),
      ],
    },
    {
      icon: HeartHandshake,
      title: t('services.concierge'),
      points: [
        t('services.points.concierge.utilities'),
        t('services.points.concierge.registration'),
        t('services.points.concierge.banking'),
        t('services.points.concierge.healthcare'),
        t('services.points.concierge.lifestyle'),
      ],
    },
    {
      icon: Scale,
      title: t('services.legal'),
      points: [
        t('services.points.legal.contracts'),
        t('services.points.legal.titleDeed'),
        t('services.points.legal.residency'),
        t('services.points.legal.tax'),
        t('services.points.legal.translation'),
      ],
    },
  ];

  const featuredProjects = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
      title: 'Modern Apartments in Lara',
      location: 'Lara, Antalya',
      description: 'Luxurious apartments with stunning sea views, featuring modern amenities and premium finishes.',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1920',
      title: 'Exclusive Villas in Konyaaltı',
      location: 'Konyaaltı, Antalya',
      description: 'Private villas with spacious gardens, perfect for families seeking comfort and luxury.',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1920',
      title: 'Beachfront Residences',
      location: 'Alanya, Antalya',
      description: 'Premium residences with direct beach access and panoramic Mediterranean views.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Slideshow />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                points={service.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            {t('projects.featured')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectPreview key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            {t('cta.dream')}
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            {t('cta.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
