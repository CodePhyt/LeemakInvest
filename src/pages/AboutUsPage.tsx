import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutUsPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Leyla Aslanoğlu',
      role: t('about.team.salesDirector'),
      image: '/src/assets/team/Leyla Aslanoğlu.jpeg',
      description: t('about.team.salesDesc'),
    },
    {
      name: 'Mikail Nadir',
      role: t('about.team.founderCEO'),
      image: '/src/assets/team/Mikail Nadir.jpg',
      description: t('about.team.founderDesc'),
    },
    {
      name: 'Bedel Nadir',
      role: t('about.team.marketingDirector'),
      image: '/src/assets/team/Bedel Nadir.jpeg',
      description: t('about.team.marketingDesc'),
    },
  ];

  const values = [
    {
      icon: Users,
      title: t('about.values.clientFocused'),
      description: t('about.values.clientFocusedDesc'),
    },
    {
      icon: Target,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc'),
    },
    {
      icon: Award,
      title: t('about.values.expertise'),
      description: t('about.values.expertiseDesc'),
    },
    {
      icon: Heart,
      title: t('about.values.trust'),
      description: t('about.values.trustDesc'),
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
          alt={t('about.heroAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t('About Leemak Invest')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('Your trusted partner in Turkish real estate investment')}
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">
            {t('Our Story')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('Founded in 2015, Leemak Invest has established itself as a leading real estate investment company in Antalya. We specialize in helping international clients find and invest in premium properties across Turkey\'s most desirable locations. Our commitment to excellence and client satisfaction has made us a trusted name in the industry.')}
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <value.icon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          {t('Meet Our Team')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">{t('about.stats.propertiesSold')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">{t('about.stats.happyClients')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-lg">{t('about.stats.yearsExperience')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">{t('about.stats.teamMembers')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
