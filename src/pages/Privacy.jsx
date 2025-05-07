
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
              <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
              <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                Last updated: May 1, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Introduction</h2>
            <p>
              CourseGPT ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our course creation platform.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <h3>Information You Provide to Us</h3>
            <ul>
              <li>Account information (name, email, password)</li>
              <li>Profile information (title, biography, profile picture)</li>
              <li>Course content you create or upload</li>
              <li>Payment information (through our payment processors)</li>
              <li>Communications with our support team</li>
            </ul>

            <h3>Information Automatically Collected</h3>
            <ul>
              <li>Log and usage data (IP address, browser type, access times)</li>
              <li>Device information (hardware, operating system)</li>
              <li>Performance and error data</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, operating, and maintaining our services</li>
              <li>Improving, personalizing, and expanding our services</li>
              <li>Understanding and analyzing how you use our services</li>
              <li>Developing new products, services, and features</li>
              <li>Communicating with you, including for customer service, updates, and marketing</li>
              <li>Processing your payments</li>
              <li>Finding and preventing fraud and security issues</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share the information we collect in various ways, including:</p>
            <ul>
              <li>With vendors, consultants, and service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of CourseGPT or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              <li>Between and among CourseGPT and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>Access to the data we hold about you</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your data in certain circumstances</li>
              <li>Restriction or limitation of how we use your data</li>
              <li>Data portability</li>
              <li>Objection to processing your data</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:privacy@coursegpt.com" className="text-primary">privacy@coursegpt.com</a>.
            </p>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any 
              personal information we process. However, despite our safeguards and efforts to secure your information, no electronic 
              transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h2>Third-Party Websites</h2>
            <p>
              Our website may contain links to other websites that are not operated by us. If you click on a third-party link, 
              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our Service is not directed to children under 16. We do not knowingly collect personal information from children under 16. 
              If you are a parent or guardian and you are aware that your child has provided us with personal information, 
              please contact us. If we become aware that we have collected personal information from children without verification 
              of parental consent, we take steps to remove that information from our servers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective 
              when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <a href="mailto:privacy@coursegpt.com" className="text-primary hover:underline">privacy@coursegpt.com</a>
            </p>
            <p>
              <Link to="/terms" className="inline-flex items-center text-primary hover:underline">
                <LinkIcon className="h-4 w-4 mr-1" />
                View our Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
