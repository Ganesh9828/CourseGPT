
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Switch } from '@/components/ui/switch';
import { CheckCircle, XCircle, CreditCard, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Pricing Plans",
      description: "Choose the plan that's right for you.",
      duration: 3000,
    });
  }, []);
  
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "For educators just getting started",
      features: [
        { included: true, text: "1 course" },
        { included: true, text: "Basic AI content generation" },
        { included: true, text: "Standard templates" },
        { included: false, text: "Advanced analytics" },
        { included: false, text: "Priority support" },
        { included: false, text: "Custom branding" },
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Pro",
      description: "For serious educators and content creators",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { included: true, text: "Unlimited courses" },
        { included: true, text: "Advanced AI content generation" },
        { included: true, text: "All templates" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "Priority email support" },
        { included: false, text: "Custom branding" },
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations and institutions",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { included: true, text: "Unlimited courses" },
        { included: true, text: "Premium AI content generation" },
        { included: true, text: "Custom templates" },
        { included: true, text: "Advanced analytics & reporting" },
        { included: true, text: "Dedicated support" },
        { included: true, text: "Custom branding" },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Simple, Transparent <span className="text-primary">Pricing</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that fits your educational needs
              </p>
              
              {/* Billing toggle */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-gray-500'}`}>Annual</span>
                <Switch 
                  checked={!isAnnual}
                  onCheckedChange={() => setIsAnnual(!isAnnual)}
                />
                <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-gray-500'}`}>Monthly</span>
                {isAnnual && <span className="ml-2 px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">Save 20%</span>}
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => {
                const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                
                return (
                  <div 
                    key={idx} 
                    className={`relative rounded-lg border ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'} p-6 flex flex-col`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-500 mt-2 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      {price !== undefined ? (
                        <div className="flex items-baseline">
                          <span className="text-4xl font-extrabold">${price}</span>
                          <span className="text-gray-500 ml-1">/{isAnnual ? 'year' : 'month'}</span>
                        </div>
                      ) : (
                        <div className="flex items-baseline">
                          <span className="text-4xl font-extrabold">Free</span>
                          <span className="text-gray-500 ml-1">forever</span>
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.buttonVariant} 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      asChild
                    >
                      <Link to="/get-started">
                        {plan.buttonText}
                        {plan.popular ? <Zap className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive account credit for your next billing cycle.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Do you offer educational discounts?</h3>
                <p className="text-gray-600">Yes, we offer special pricing for educational institutions. Contact our sales team for more information about our educational licenses.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How many students can access my courses?</h3>
                <p className="text-gray-600">CourseGPT is a course creation tool. We don't limit how many students can access your published courses. You can export or publish your courses to any learning management system.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, you can try CourseGPT Pro for 14 days free of charge. No credit card required during the trial period.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Contact our support team
                  <CreditCard className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
