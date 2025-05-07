
import { Lightbulb, Layout, Clock, Target, Sparkles, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'AI-Powered Content Generation',
      description: 'Use artificial intelligence to generate course content, quiz questions, and learning materials automatically.',
      icon: Sparkles,
    },
    {
      name: 'Course Templates',
      description: 'Choose from a variety of professionally designed templates for different course types and learning styles.',
      icon: Layout,
    },
    {
      name: 'Time Saving',
      description: 'Reduce course creation time by up to 70% with automated content generation and organization tools.',
      icon: Clock,
    },
    {
      name: 'Learning Objectives',
      description: 'AI helps align your content with specific learning objectives and educational standards.',
      icon: Target,
    },
    {
      name: 'Creative Inspiration',
      description: 'Get intelligent suggestions for activities, assessments, and engaging content.',
      icon: Lightbulb,
    },
    {
      name: 'Quick Iterations',
      description: 'Rapidly iterate and improve your courses with AI-assisted refinements.',
      icon: Zap,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to create courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            CourseGPT combines the power of AI with intuitive design to make course creation faster and more effective.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="feature-card flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
