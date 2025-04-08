import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold mb-2">{t(project.title)}</h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{project.location}</span>
          </div>
          <p className="text-gray-700 line-clamp-2 mb-4">{t(project.description)}</p>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
              >
                {t(feature)}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
                +{project.features.length - 3} {t('more')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;