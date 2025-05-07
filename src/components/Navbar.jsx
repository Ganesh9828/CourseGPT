
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Layers, DollarSign, Rocket, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout, isAuthenticated } = useAuth();
  const { toast } = useToast();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Course<span className="text-foreground">GPT</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center text-gray-700 hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : ''}`}
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link 
              to="/features" 
              className={`flex items-center text-gray-700 hover:text-primary transition-colors ${isActive('/features') ? 'text-primary font-medium' : ''}`}
            >
              <Layers className="h-4 w-4 mr-1" />
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`flex items-center text-gray-700 hover:text-primary transition-colors ${isActive('/pricing') ? 'text-primary font-medium' : ''}`}
            >
              <DollarSign className="h-4 w-4 mr-1" />
              Pricing
            </Link>
            
            <div className="ml-8 flex items-center">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`text-gray-700 hover:text-primary mr-6 transition-colors ${isActive('/dashboard') ? 'text-primary font-medium' : ''}`}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`text-gray-700 hover:text-primary mr-6 transition-colors ${isActive('/login') ? 'text-primary font-medium' : ''}`}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/get-started" 
                    className="flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-opacity-90 transition-colors"
                  >
                    <Rocket className="h-4 w-4 mr-1" />
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/') ? 'text-primary font-medium' : ''}`}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link 
              to="/features" 
              className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/features') ? 'text-primary font-medium' : ''}`}
            >
              <Layers className="h-4 w-4 mr-2" />
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/pricing') ? 'text-primary font-medium' : ''}`}
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Pricing
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/dashboard') ? 'text-primary font-medium' : ''}`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary w-full text-left"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/login') ? 'text-primary font-medium' : ''}`}
                >
                  Login
                </Link>
                <Link 
                  to="/get-started" 
                  className={`flex items-center px-3 py-2 text-gray-700 hover:text-primary ${isActive('/get-started') ? 'text-primary font-medium' : ''}`}
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
