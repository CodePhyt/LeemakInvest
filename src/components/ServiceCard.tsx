import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  points: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, points }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-serif font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-600">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;