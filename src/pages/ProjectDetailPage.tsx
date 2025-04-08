import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Check } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { projects } from '../data/projects';
import 'leaflet/dist/leaflet.css';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('Project not found')}
          </h1>
          <p className="text-gray-600">
            {t('The project you are looking for does not exist.')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex items-center justify-center text-xl">
              <MapPin className="h-6 w-6 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">
                {t('About this property')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t(project.description)}
              </p>
              
              <h3 className="text-xl font-serif font-bold mb-4">
                {t('Key Features')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-primary-600 mr-2" />
                    <span>{t(feature)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">
                {t('Location')}
              </h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <MapContainer
                  center={project.coordinates}
                  zoom={13}
                  className="h-full w-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={project.coordinates}>
                    <Popup>{project.title}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-serif font-bold mb-6">
                {t('Interested in this property?')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('Contact us for more information about this property.')}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{t('Call us')}</h3>
                  <div className="space-y-2">
                    <p>Leyla: +90 535 607 85 74</p>
                    <p>Mikail: +90 553 190 61 17</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('Email us')}</h3>
                  <p>info@leemakinvest.com</p>
                </div>
                <a
                  href="https://www.instagram.com/leemakinvest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-600 hover:text-primary-700"
                >
                  {t('Follow us on Instagram')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
