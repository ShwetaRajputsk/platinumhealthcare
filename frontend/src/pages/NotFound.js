import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Platinum Healthcare UAE</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Platinum Healthcare UAE homepage." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 p-6">
              <img 
                src="/assets/logo.png" 
                alt="Platinum Healthcare" 
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                variant="primary" 
                size="lg"
                icon={<Home className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Go to Homepage
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              icon={<ArrowLeft className="w-5 h-5" />}
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              Go Back
            </Button>
          </div>

          {/* Help Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Need help? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/doctors" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Our Doctors
              </Link>
              <Link 
                to="/appointments" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Book Appointment
              </Link>
              <Link 
                to="/departments" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Departments
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;