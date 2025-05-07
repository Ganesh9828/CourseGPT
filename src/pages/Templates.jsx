
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TemplateCard from '../components/TemplateCard';
import { LayoutDashboard, Presentation, BookOpen, GraduationCap, Users, Video, FileText } from 'lucide-react';

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      title: 'Academic Course',
      description: 'Perfect for university or college credit courses with structured learning paths.',
      icon: GraduationCap,
      features: [
        'Syllabus generator',
        'Assignment templates',
        'Grading rubrics',
        'Learning objectives framework'
      ]
    },
    {
      id: 2,
      title: 'Corporate Training',
      description: 'Designed for professional development and workplace skill enhancement.',
      icon: Users,
      features: [
        'Skills assessment tools',
        'Interactive modules',
        'Progress tracking',
        'Certification paths'
      ]
    },
    {
      id: 3,
      title: 'Online Tutorial',
      description: 'Self-paced learning content for knowledge sharing and skill building.',
      icon: Video,
      features: [
        'Step-by-step guides',
        'Interactive exercises',
        'Quizzes and assessments',
        'Community discussion framework'
      ]
    },
    {
      id: 4,
      title: 'Workshop/Seminar',
      description: 'Interactive, focused learning sessions with hands-on activities.',
      icon: Presentation,
      features: [
        'Activity planners',
        'Group exercise templates',
        'Feedback collection forms',
        'Follow-up resources'
      ]
    },
    {
      id: 5,
      title: 'Documentation',
      description: 'Create comprehensive documentation for products or processes.',
      icon: FileText,
      features: [
        'API documentation templates',
        'User guide frameworks',
        'Technical specifications',
        'FAQ generators'
      ]
    },
    {
      id: 6,
      title: 'Custom Course',
      description: 'Start from scratch and build your own custom course structure.',
      icon: LayoutDashboard,
      features: [
        'Flexible content modules',
        'Custom assessment tools',
        'Personalized learning paths',
        'Adaptive content suggestions'
      ]
    }
  ];

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId === selectedTemplate ? null : templateId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Course Templates</h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Choose a template to jumpstart your course creation process
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                selected={selectedTemplate === template.id}
                onSelect={handleSelectTemplate}
              />
            ))}
          </div>
          
          {selectedTemplate && (
            <div className="mt-12 text-center">
              <button
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                onClick={() => console.log(`Creating course with template ${selectedTemplate}`)}
              >
                Use This Template
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
