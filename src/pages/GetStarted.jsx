
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowRight, 
  CalendarCheck, 
  MessagesSquare, 
  PenLine, 
  FileText, 
  Users, 
  BookOpen,
  Check,
  Sparkles
} from 'lucide-react';

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    courseType: '',
    email: '',
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const courseTypes = [
    { id: 'academic', name: 'Academic Course', icon: BookOpen, description: 'University or college credit courses' },
    { id: 'training', name: 'Corporate Training', icon: Users, description: 'Professional development and training' },
    { id: 'tutorial', name: 'Online Tutorial', icon: PenLine, description: 'Knowledge sharing and skill building' },
    { id: 'workshop', name: 'Workshop/Seminar', icon: CalendarCheck, description: 'Interactive focused learning sessions' }
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCourseTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, courseType: type }));
  };
  
  const handleContinue = () => {
    if (step === 1 && !formData.name) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && !formData.courseType) {
      toast({
        title: "Course Type Required",
        description: "Please select a course type to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 3 && !formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit the form
      toast({
        title: "Account Created!",
        description: "Welcome to CourseGPT! Redirecting to your dashboard.",
      });
      
      // Simulate loading
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-center mb-2">Get Started with CourseGPT</h1>
              <p className="text-gray-500 text-center">Create your first AI-powered course in minutes</p>
              
              {/* Progress bar */}
              <div className="mt-8 relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                      {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                    </div>
                    <span className="text-xs mt-1">Profile</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                      {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                    </div>
                    <span className="text-xs mt-1">Course Type</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                      {step > 3 ? <Check className="h-5 w-5" /> : "3"}
                    </div>
                    <span className="text-xs mt-1">Contact</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 4 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 4 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                      {step > 4 ? <Check className="h-5 w-5" /> : "4"}
                    </div>
                    <span className="text-xs mt-1">Ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution/Company (Optional)</Label>
                      <Input 
                        id="institution"
                        name="institution"
                        placeholder="University or Company Name"
                        value={formData.institution}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button onClick={handleContinue}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Course Type */}
            {step === 2 && (
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What type of course are you creating?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courseTypes.map((type) => (
                      <div 
                        key={type.id}
                        className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                          formData.courseType === type.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleCourseTypeSelect(type.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${formData.courseType === type.id ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                            <type.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">{type.name}</h3>
                            <p className="text-sm text-gray-500">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button onClick={handleContinue}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Contact Info */}
            {step === 3 && (
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Almost done!</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <p className="text-sm text-gray-500">We'll use this to create your account.</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button onClick={handleContinue}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 4: Ready to go */}
            {step === 4 && (
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">You're all set!</h2>
                  <p className="text-gray-500 mb-6">
                    Thanks for signing up, {formData.name}. We're excited to help you create amazing courses!
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium mb-2">Your selected course type:</h3>
                    <p className="text-primary font-medium">
                      {courseTypes.find(t => t.id === formData.courseType)?.name || 'Course'}
                    </p>
                  </div>
                  
                  <Button className="w-full" onClick={handleContinue}>
                    Start Creating Your Course <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
