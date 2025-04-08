import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectPreviewProps {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  id,
  image,
  title,
  location,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/projects/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={t(`projects.propertyTitles.${title}`)}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-xl font-serif font-bold mb-2">{t(`projects.propertyTitles.${title}`)}</h3>
            <div className="flex items-center text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreview;