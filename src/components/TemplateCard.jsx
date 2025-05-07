
import { CheckCircle2 } from 'lucide-react';

const TemplateCard = ({ template, onSelect, selected }) => {
  const { id, title, description, icon: Icon, features } = template;
  
  return (
    <div 
      className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
        selected ? 'border-primary bg-primary bg-opacity-5 ring-2 ring-primary ring-opacity-50' : 'border-gray-200 hover:border-primary'
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-md ${selected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="ml-3 text-lg font-medium">{title}</h3>
      </div>
      
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        className={`mt-4 w-full py-2 rounded-md text-sm font-medium transition-colors ${
          selected 
            ? 'bg-primary text-white hover:bg-opacity-90' 
            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {selected ? 'Selected' : 'Select Template'}
      </button>
    </div>
  );
};

export default TemplateCard;
