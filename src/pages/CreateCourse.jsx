
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Layout, 
  Lightbulb, 
  Target, 
  Book, 
  FileText, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import AIAssistant from '@/components/AIAssistant';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [generatingContent, setGeneratingContent] = useState(false);
  
  const templates = [
    {
      id: 'standard',
      title: 'Standard Course',
      description: 'A classic course structure with modules, lessons, and assessments.',
      icon: Layout,
      features: [
        'Module-based organization',
        'Quiz and test functionality',
        'Progress tracking',
        'Resources section',
      ],
    },
    {
      id: 'workshop',
      title: 'Interactive Workshop',
      description: 'Focused on interactive activities, discussions, and hands-on learning.',
      icon: Lightbulb,
      features: [
        'Activity-centered design',
        'Discussion prompts',
        'Collaborative elements',
        'Reflection exercises',
      ],
    },
    {
      id: 'micro',
      title: 'Microlearning',
      description: 'Short, focused learning units that can be completed quickly.',
      icon: Target,
      features: [
        'Bite-sized content',
        'Mobile-friendly format',
        'Quick assessments',
        'Focused learning objectives',
      ],
    },
    {
      id: 'book',
      title: 'Digital Textbook',
      description: 'Comprehensive content organized like a traditional textbook with modern features.',
      icon: Book,
      features: [
        'Chapter-based structure',
        'In-depth content',
        'Glossary and index',
        'Embedded interactive elements',
      ],
    },
    {
      id: 'docs',
      title: 'Documentation Style',
      description: 'Clean, organized reference material with search and navigation.',
      icon: FileText,
      features: [
        'Searchable content',
        'Code samples',
        'Step-by-step guides',
        'Technical specifications',
      ],
    },
    {
      id: 'video',
      title: 'Video Course',
      description: 'Video-first approach with supporting materials and resources.',
      icon: Video,
      features: [
        'Video lesson structure',
        'Transcripts and notes',
        'Supplementary resources',
        'Video-aligned assessments',
      ],
    },
  ];

  const handleContinue = () => {
    if (step === 1) {
      if (!courseTitle.trim()) {
        alert('Please enter a course title');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedTemplate) {
        alert('Please select a template');
        return;
      }
      setStep(3);
      // Simulating AI generation
      setGeneratingContent(true);
      setTimeout(() => {
        setGeneratingContent(false);
        navigate('/dashboard');
      }, 5000);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Course Information</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Title *
                </label>
                <input
                  type="text"
                  id="courseTitle"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="e.g., Introduction to Data Science"
                />
              </div>
              
              <div>
                <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Description
                </label>
                <textarea
                  id="courseDescription"
                  rows={4}
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Describe what students will learn in your course..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Audience
                </label>
                <div className="mt-1 flex flex-wrap gap-2">
                  {['Beginners', 'Intermediate', 'Advanced', 'Students', 'Professionals'].map((audience) => (
                    <label key={audience} className="inline-flex items-center bg-gray-50 border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-100 transition-colors">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-primary focus:ring-primary" />
                      <span className="ml-2 text-sm text-gray-700">{audience}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm">
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="language">Language</option>
                  <option value="science">Science</option>
                  <option value="math">Mathematics</option>
                  <option value="humanities">Humanities</option>
                  <option value="health">Health & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-50 rounded-md p-4 flex items-start border border-purple-100">
              <Sparkles className="h-5 w-5 text-primary mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">AI Suggestions</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Once you provide your course details, our AI can suggest learning objectives, content structure, 
                  and assessment types tailored to your subject matter and audience.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Choose a Template</h2>
            <p className="text-gray-500 mb-6">
              Select a template that best fits your teaching style and content type. You can customize it later.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  selected={selectedTemplate === template.id}
                  onSelect={setSelectedTemplate}
                />
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            {generatingContent ? (
              <div className="py-10">
                <div className="animate-pulse flex flex-col items-center justify-center">
                  <div className="rounded-full bg-primary bg-opacity-10 h-20 w-20 flex items-center justify-center mb-4">
                    <Sparkles className="h-10 w-10 text-primary opacity-50" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Generating Your Course</h3>
                  <p className="text-gray-500 mt-2">
                    Our AI is creating your course structure and initial content...
                  </p>
                  
                  <div className="mt-8 w-full max-w-md">
                    <div className="h-2 bg-gray-200 rounded-full mb-6">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-sm text-gray-600">Building course structure</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-sm text-gray-600">Creating learning objectives</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-3"></div>
                        <span className="text-sm text-gray-600">Generating initial content</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <div className="h-5 w-5 mr-3"></div>
                        <span className="text-sm">Preparing assessment materials</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <div className="h-5 w-5 mr-3"></div>
                        <span className="text-sm">Finalizing course</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-10">
                <div className="rounded-full bg-green-100 h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Course Created Successfully!</h3>
                <p className="text-gray-500 mt-2">
                  Your course has been created and is ready for your review.
                </p>
                <button
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90"
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard
                </button>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {step > 1 ? 'Back' : 'Cancel'}
            </button>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Create New Course</h1>
            
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <span className={`ml-2 text-sm ${step >= 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Course Info</span>
                </div>
                <div className="hidden sm:block w-16 h-0.5 bg-gray-200"></div>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                  <span className={`ml-2 text-sm ${step >= 2 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Template</span>
                </div>
                <div className="hidden sm:block w-16 h-0.5 bg-gray-200"></div>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    3
                  </div>
                  <span className={`ml-2 text-sm ${step >= 3 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>AI Generation</span>
                </div>
              </div>
            </div>
          </div>
          
          {renderStepContent()}
          
          {step < 3 && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleContinue}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default CreateCourse;
