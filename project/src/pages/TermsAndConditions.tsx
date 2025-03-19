import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-36">
      <div className="max-w-5xl mx-auto border border-gray-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Terms and Conditions</h1>
        <p className="mb-6 text-lg">
          Welcome to Myra Digital India. These Terms and Conditions outline the rules and regulations for the use of our
          website and services. By accessing this website, you agree to comply with these terms. If you do not agree
          with any part of these terms, please do not use our services.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">1. Definitions</h2>
        <p className="mb-4 text-lg">
          <strong>"Company"</strong> refers to Myra Digital India, the manufacturer of gadgets and mobile accessories.
        </p>
        <p className="mb-4 text-lg">
          <strong>"OEM"</strong> refers to businesses or entities that purchase our products for resale or integration.
        </p>
        <p className="mb-4 text-lg">
          <strong>"You"</strong> refers to the user of our website and services.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">2. Use of Our Services</h2>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree to provide accurate and complete information when making inquiries or purchases.</li>
          <li>Unauthorized use of our website may result in legal action.</li>
        </ul>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">3. Orders and Payments</h2>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>All orders are subject to acceptance and availability.</li>
          <li>Prices are subject to change without prior notice.</li>
          <li>Payments must be made in full before order processing.</li>
        </ul>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">4. Intellectual Property</h2>
        <p className="mb-6 text-lg">
          All content on this website, including text, graphics, logos, and product images, is the property of
          [Your Brand] and is protected by copyright laws. Unauthorized use or reproduction is strictly prohibited.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">5. Limitation of Liability</h2>
        <p className="mb-6 text-lg">
          [Your Brand] shall not be liable for any indirect, incidental, or consequential damages arising from the
          use of our products or services. We are not responsible for any losses due to incorrect product usage.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">6. Termination</h2>
        <p className="mb-6 text-lg">
          We reserve the right to terminate access to our website and services if a user violates these terms
          or engages in fraudulent activities.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">7. Changes to Terms</h2>
        <p className="mb-6 text-lg">
          We may update these Terms and Conditions at any time. Users will be notified of any significant changes.
        </p>

        <h2 className="text-2xl text-pink-500 font-semibold mt-8">8. Contact Information</h2>
        <p className="mb-6 text-lg">
          If you have any questions regarding these Terms and Conditions, please contact us at:
        </p>
        <p className="text-pink-600 font-medium">Email: info@myra-digital.com</p>
        <p className="text-pink-600 font-medium">Phone: +91 8076418834</p>
        <p className="text-pink-600 font-medium">Address: 153/1, Pocket C, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
