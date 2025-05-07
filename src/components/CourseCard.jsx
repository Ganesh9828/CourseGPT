
import { Book, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { id, title, description, category, progress, lastEdited, thumbnail } = course;
  
  return (
    <div className="course-card bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md relative group">
      <div className="h-40 bg-gray-200 relative">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy" // Added lazy loading for better performance
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-purple-50 to-indigo-50">
            <Book className="h-12 w-12 text-primary opacity-50" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{lastEdited}</span>
          </div>
          
          {progress !== undefined && (
            <div className="flex items-center">
              <div className="w-16 h-1.5 bg-gray-100 rounded-full mr-2">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">{progress}%</span>
            </div>
          )}
        </div>
      </div>
      
      <Link 
        to={`/course/${id}`}
        className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
      >
        <span className="bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
          Open Course
        </span>
      </Link>
    </div>
  );
};

export default CourseCard;
